import {mountWidget, WIDGET_ID} from "./mountWidget";
import type {StoreFinderWidgetConfig} from "./domain/store.types.ts";

const mount = async (el: HTMLElement, config: StoreFinderWidgetConfig) => {
    await mountWidget(el, config)
}

const api = { mount };

(window as any)[`ReactEdge_${WIDGET_ID}`] = api;

export { mount };
