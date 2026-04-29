import { createRoot } from "react-dom/client";
import StoreFinderWidget from "./StoreFinderWidget.tsx";
import {getMountedHost} from "./lib/hostReader.ts";
import {activity} from "./activity";
import type {StoreFinderWidgetConfig} from "./domain/store.types.ts";

export const WIDGET_ID = 'storefinder';

export function mountWidget(hostElement: HTMLElement, config: StoreFinderWidgetConfig) {
    const mountedHost = getMountedHost(hostElement);

    activity('bootstrap', 'Widget mounted', hostElement);

    // Create React root inside shadow
    const root = createRoot(mountedHost);
    root.render(<StoreFinderWidget rawConfig={config} />);
}
