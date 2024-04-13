export const proseStyles = `
img {
    max-width: 100%;
    vertical-align: middle;
    line-height: 1;
}

.prose {
    color: var(--tw-prose-body);
    max-width: 65ch;
}

.prose :where(p):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
}

.prose :where([class~="lead"]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-lead);
    font-size: 1.25em;
    line-height: 1.6;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
}

.prose :where(a):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-links);
    text-decoration: underline;
    font-weight: 500;
}

.prose :where(strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-bold);
    font-weight: 600;
}

.prose :where(a strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: inherit;
}

.prose :where(blockquote strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: inherit;
}

.prose :where(thead th strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: inherit;
}

.prose :where(ol):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    list-style-type: decimal;
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    padding-left: 1.625em;
}

.prose :where(ul):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    list-style-type: disc;
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    padding-left: 1.625em;
}

.prose :where(dt):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-headings);
    font-weight: 600;
    margin-top: 1.25em;
}

.prose :where(hr):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    border-color: var(--tw-prose-hr);
    border-top-width: 1px;
    margin-top: 3em;
    margin-bottom: 3em;
}

.prose :where(blockquote):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    font-weight: 500;
    font-style: italic;
    color: var(--tw-prose-quotes);
    border-inline-start-width: 0.25rem;
    border-inline-start-color: var(--tw-prose-quote-borders);
    quotes: "\x81201C" "\x81201D" "\x812018" "\x812019";
    margin-top: 1.6em;
    margin-bottom: 1.6em;
    padding-left: 1em;
}

.prose :where(blockquote p:first-of-type):not(:where([class~="not-prose"], [class~="not-prose"] *))::before {
    content: open-quote;
}

.prose :where(blockquote p:last-of-type):not(:where([class~="not-prose"], [class~="not-prose"] *))::after {
    content: close-quote;
}

.prose :where(h1):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-headings);
    font-weight: 800;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
}

.prose :where(h1 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    font-weight: 900;
    color: inherit;
}

.prose :where(h2):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-headings);
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333;
}

.prose :where(h2 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    font-weight: 800;
    color: inherit;
}

.prose :where(h3):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-headings);
    font-weight: 600;
    font-size: 1.25em;
    margin-top: 1.6em;
    margin-bottom: 0.6em;
    line-height: 1.6;
}

.prose :where(h3 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    font-weight: 700;
    color: inherit;
}

.prose :where(h4):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-headings);
    font-weight: 600;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    line-height: 1.5;
}

.prose :where(h4 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    font-weight: 700;
    color: inherit;
}

.prose :where(img):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 2em;
    margin-bottom: 2em;
}

.prose :where(picture):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    display: block;
    margin-top: 2em;
    margin-bottom: 2em;
}

.prose :where(video):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 2em;
    margin-bottom: 2em;
}

.prose :where(kbd):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    font-weight: 500;
    font-family: inherit;
    color: var(--tw-prose-kbd);
    box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);
    font-size: 0.875em;
    border-radius: 0.3125rem;
    padding-top: 0.1875em;
    padding-right: 0.375em;
    padding-bottom: 0.1875em;
    padding-left: 0.375em;
}

.prose :where(code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-code);
    font-weight: 600;
    font-size: 0.875em;
}

.prose :where(code):not(:where([class~="not-prose"], [class~="not-prose"] *))::before {
    content: "\`";
}

.prose :where(code):not(:where([class~="not-prose"], [class~="not-prose"] *))::after {
    content: "\`";
}

.prose :where(a code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: inherit;
}

.prose :where(h1 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: inherit;
}

.prose :where(h2 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: inherit;
    font-size: 0.875em;
}

.prose :where(h3 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: inherit;
    font-size: 0.9em;
}

.prose :where(h4 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: inherit;
}

.prose :where(blockquote code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: inherit;
}

.prose :where(thead th code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: inherit;
}

.prose :where(pre):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-pre-code);
    background-color: var(--tw-prose-pre-bg);
    overflow-x: auto;
    font-weight: 400;
    font-size: 0.875em;
    line-height: 1.7142857;
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
    border-radius: 0.375rem;
    padding-top: 0.8571429em;
    padding-right: 1.1428571em;
    padding-bottom: 0.8571429em;
    padding-left: 1.1428571em;
}

.prose :where(pre code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    background-color: transparent;
    border-width: 0;
    border-radius: 0;
    padding: 0;
    font-weight: inherit;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
}

.prose :where(pre code):not(:where([class~="not-prose"], [class~="not-prose"] *))::before {
    content: none;
}

.prose :where(pre code):not(:where([class~="not-prose"], [class~="not-prose"] *))::after {
    content: none;
}

.prose :where(table):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    width: 100%;
    table-layout: auto;
    text-align: start;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 0.875em;
    line-height: 1.7142857;
}

.prose :where(thead):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    border-bottom-width: 1px;
    border-bottom-color: var(--tw-prose-th-borders);
}

.prose :where(thead th):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-headings);
    font-weight: 600;
    vertical-align: bottom;
    padding-right: 0.5714286em;
    padding-bottom: 0.5714286em;
    padding-left: 0.5714286em;
}

.prose :where(tbody tr):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    border-bottom-width: 1px;
    border-bottom-color: var(--tw-prose-td-borders);
}

.prose :where(tbody tr:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    border-bottom-width: 0;
}

.prose :where(tbody td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    vertical-align: baseline;
}

.prose :where(tfoot):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    border-top-width: 1px;
    border-top-color: var(--tw-prose-th-borders);
}

.prose :where(tfoot td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    vertical-align: top;
}

.prose :where(figcaption):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    color: var(--tw-prose-captions);
    font-size: 0.875em;
    line-height: 1.4285714;
    margin-top: 0.8571429em;
}

.prose {
    --tw-prose-body: #374151;
    --tw-prose-headings: #111827;
    --tw-prose-lead: #4b5563;
    --tw-prose-links: #111827;
    --tw-prose-bold: #111827;
    --tw-prose-counters: #6b7280;
    --tw-prose-bullets: #d1d5db;
    --tw-prose-hr: #e5e7eb;
    --tw-prose-quotes: #111827;
    --tw-prose-quote-borders: #e5e7eb;
    --tw-prose-captions: #6b7280;
    --tw-prose-kbd: #111827;
    --tw-prose-kbd-shadows: 17 24 39;
    --tw-prose-code: #e5e7eb;
    --tw-prose-pre-code: #e5e7eb;
    --tw-prose-pre-bg: #1f2937;
    --tw-prose-th-borders: #d1d5db;
    --tw-prose-td-borders: #e5e7eb;
    --tw-prose-invert-body: #d1d5db;
    --tw-prose-invert-headings: #fff;
    --tw-prose-invert-lead: #9ca3af;
    --tw-prose-invert-links: #fff;
    --tw-prose-invert-bold: #fff;
    --tw-prose-invert-counters: #9ca3af;
    --tw-prose-invert-bullets: #4b5563;
    --tw-prose-invert-hr: #374151;
    --tw-prose-invert-quotes: #f3f4f6;
    --tw-prose-invert-quote-borders: #374151;
    --tw-prose-invert-captions: #9ca3af;
    --tw-prose-invert-kbd: #fff;
    --tw-prose-invert-kbd-shadows: 255 255 255;
    --tw-prose-invert-code: #fff;
    --tw-prose-invert-pre-code: #d1d5db;
    --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
    --tw-prose-invert-th-borders: #4b5563;
    --tw-prose-invert-td-borders: #374151;
    font-size: 1rem;
    line-height: 1.75;
}

.prose :where(li):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.prose :where(.prose > ul > li > *:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 1.25em;
}

.prose :where(.prose > ul > li > *:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-bottom: 1.25em;
}

.prose :where(.prose > ol > li > *:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 1.25em;
}

.prose :where(.prose > ol > li > *:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-bottom: 1.25em;
}

.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
}

.prose :where(dl):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
}

.prose :where(dd):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 0.5em;
    padding-left: 1.625em;
}

.prose :where(thead th:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    padding-left: 0;
}

.prose :where(thead th:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    padding-right: 0;
}

.prose :where(tbody td, tfoot td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    padding-top: 0.5714286em;
    padding-right: 0.5714286em;
    padding-bottom: 0.5714286em;
    padding-left: 0.5714286em;
}

.prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    padding-left: 0;
}

.prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    padding-right: 0;
}

.prose :where(figure):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 2em;
    margin-bottom: 2em;
}

.prose :where(.prose > :first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 0;
}

.prose :where(.prose > :last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-bottom: 0;
}

.absolute {
    position: absolute;
}

.m-0 {
    margin: 0px;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.inline-block {
    display: inline-block;
}

.hidden {
    display: none;
}

.w-full {
    width: 100%;
}

.rounded {
    border-radius: 0.25rem;
}

.border {
    border-width: 1px;
}

.bg-indigo-700 {
    --tw-bg-opacity: 1;
    background-color: rgb(67 56 202 / var(--tw-bg-opacity));
}

.bg-slate-300 {
    --tw-bg-opacity: 1;
    background-color: rgb(203 213 225 / var(--tw-bg-opacity));
}

.bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.p-0 {
    padding: 0px;
}

.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
}

.py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.text-left {
    text-align: left;
}

.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
}

.font-sans {
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.text-base {
    font-size: 1rem;
    line-height: 1.5rem;
}

.font-semibold {
    font-weight: 600;
}

.leading-none {
    line-height: 1;
}

.text-primary {
    --tw-text-opacity: 1;
    color: hsl(222.2 47.4% 11.2% / var(--tw-text-opacity));
}

.text-slate-50 {
    --tw-text-opacity: 1;
    color: rgb(248 250 252 / var(--tw-text-opacity));
}

.mso-font-width-150pc {
    mso-font-width: 150%;
}

.-webkit-font-smoothing-antialiased {
    -webkit-font-smoothing: antialiased;
}

.text-decoration-none {
    text-decoration: none;
}

.word-break-break-word {
    word-break: break-word;
}
`;