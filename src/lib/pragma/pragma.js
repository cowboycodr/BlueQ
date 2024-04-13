import { JSDOM } from 'jsdom';
import postcss from 'postcss';
import postcssJs from 'postcss-js';

function hexToRGB(hex) {
	hex = hex.replace(/^\#/, '');
	let r = parseInt(hex.slice(0, 2), 16),
		g = parseInt(hex.slice(2, 4), 16),
		b = parseInt(hex.slice(4, 6), 16);
	return `rgb(${r}, ${g}, ${b})`;
}

function convertHexToRgbInCss(css) {
	return css.replace(/#[0-9A-Fa-f]{6}/g, (match) => hexToRGB(match));
}

function extractCssVariables(css) {
	let cssVars = {};
	postcss.parse(css).walkDecls((decl) => {
		if (decl.prop.startsWith('--')) {
			console.log({ prop: decl.prop, value: decl.value });
			cssVars[decl.prop] = decl.value;
		}
	});
	return cssVars;
}

function replaceCssVariables(css, cssVars) {
	Object.keys(cssVars).forEach((varName) => {
		const varValue = cssVars[varName];
		const varPattern = new RegExp(`var\\(${varName}\\)`, 'g');
		css = css.replace(varPattern, varValue);
	});
	return css;
}

function pragma(html, css) {
	const cssVars = extractCssVariables(css);
	css = replaceCssVariables(css, cssVars);
	css = convertHexToRgbInCss(css);

	const dom = new JSDOM(`<body>${html}</body>`);
	const { document } = dom.window;

	const root = postcss.parse(css);
	const cssObject = postcssJs.objectify(root);

	Object.keys(cssObject).forEach((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			const styles = cssObject[selector];
			Object.keys(styles).forEach((prop) => {
				element.style[prop] = styles[prop];
			});
		});
	});

	return document.body.innerHTML;
}

export { pragma };
