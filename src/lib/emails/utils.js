import { twi } from 'tw-to-css';

/**
 * Converts Tailwind CSS classes to their corresponding inline styles.
 * 
 * @param {string} tailwindcss The string of Tailwind CSS classes, separated by spaces.
 * @returns {Object} An object where each key is a CSS property and each value is the corresponding style value.
 */
export function twist(tailwindcss) {
    // Splitting classes, ensuring single class is also processed
    const classes = tailwindcss.includes(' ') ? tailwindcss.split(' ') : [tailwindcss];

    const style = {};

    classes.forEach(cls => {
        const inlineStyle = twi(cls);
        if (!inlineStyle) return; // Skip if no inline style

        // Extracting and trimming CSS property and value
        const [key, value] = inlineStyle.split(':').map(segment => segment.trim());
        if (!key || !value) return; // Skip if parsing fails

        // Concatenate values for the same CSS property
        style[key] = style[key] ? `${style[key]}, ${value}` : value;
    });

    return style;
}
