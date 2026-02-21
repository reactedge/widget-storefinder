import { createRoot } from "react-dom/client";
import StoreFinderWidget from "./StoreFinderWidget.tsx";
import {getMountedHost} from "./lib/hostReader.ts";
import {activity} from "./activity";

export const WIDGET_ID = 'storefinder';

export function mountWidget(hostElement: HTMLElement) {
    const mountedHost = getMountedHost(hostElement);

    activity('bootstrap', 'Widget mounted', hostElement);

    // Create React root inside shadow
    const root = createRoot(mountedHost);
    root.render(<StoreFinderWidget host={hostElement}/>);
}
