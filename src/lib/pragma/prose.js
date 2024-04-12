import { pragma } from "./pragma";
import { proseStyles } from "./prose-styles";

function prose(html) {
    return pragma(html, proseStyles)
}

export { prose }