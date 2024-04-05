import { twi } from 'tw-to-css';
import { clsx } from 'clsx';

/**
 * Converts Tailwind CSS classes to their corresponding inline styles.
 * 
 * @param {string} tailwindcss The string of Tailwind CSS classes, separated by spaces.
 * @returns {Object} An object where each key is a CSS property and each value is the corresponding style value,
 *                   with trailing semicolons removed from the values and handling multiple styles per class.
 */
export function twist(tailwind) {
    // Splitting classes, ensuring single class is also processed
    const tailwindcss = clsx(tailwind);
    const classes = tailwindcss.includes(' ') ? tailwindcss.split(' ') : [tailwindcss];

    const style = {};

    classes.forEach(cls => {
        const inlineStyles = twi(cls);
        if (!inlineStyles) return; // Skip if no inline style

        // Handling multiple styles returned by twi for a single class
        inlineStyles.split(';').forEach(styleString => {
            let [key, value] = styleString.split(':').map(segment => segment.trim());
            if (!key || !value) return; // Skip if parsing fails

            // If the same key appears more than once, values are concatenated
            style[key] = style[key] ? `${style[key]}, ${value}` : value;
        });
    });

    return style;
}
