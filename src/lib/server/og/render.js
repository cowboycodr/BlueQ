import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';

/**
 * Renders a Svelte component to an image.
 * 
 * This function takes a Svelte component and rendering options, including props for the component,
 * fonts to be used in the rendering, and the resolution of the output image. It uses `satori` to convert
 * the component to SVG and then `Resvg` to render the SVG to an image.
 * 
 * @param {Object} component - The Svelte component to render.
 * @param {Object} [options={}] - The options for rendering the component.
 * @param {Object} [options.props={}] - The props to pass to the Svelte component.
 * @param {Object} [options.fonts={}] - Object containing font data for regular and semi-bold fonts.
 * @param {Blob} [options.fonts.regular=null] - The regular font data.
 * @param {Blob} [options.fonts.semi_bold=null] - The semi-bold font data.
 * @param {Object} [options.resolution={}] - The resolution for the output image.
 * @param {number} [options.resolution.height=630] - The height of the output image.
 * @param {number} [options.resolution.width=1200] - The width of the output image.
 * @returns {Promise<Object>} A promise that resolves to the rendered image data.
 */
export async function render(component, {
    props = {},
    fonts: {
        regular = null,
        semi_bold = null,
    } = {}, // Default empty object for fonts
    resolution: {
        height = 630, // Default height
        width = 1200  // Default width
    } = {} // Default empty object for resolution
} = {}) {
    const result = component.render(props);
    const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);

    const svg = await satori(element, {
        fonts: [
            {
                name: 'Geist',
                data: await regular,
                style: 'normal'
            },
            {
                name: 'Geist',
                data: await semi_bold,
                style: 'normal',
                weight: 600,
            }
        ],
        height,
        width
    });

    const resvg = new Resvg(svg, {
        fitTo: {
            mode: 'width',
            value: width
        }
    });

    const image = resvg.render();

    return image;
}
