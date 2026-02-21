import {storeFinderStyles} from "../styles/store-finder.styles.ts";
import {injectStyles} from "./style.ts";

export function getMountedHost(hostElement: HTMLElement) {
    //hostElement.classList.add(`reactedge-${WIDGET_ID}`);
    //return hostElement
    const shadow =
        hostElement.shadowRoot || hostElement.attachShadow({ mode: "open" });

    for (const css of storeFinderStyles) {
        injectStyles(shadow, css);
    }
    return shadow
}