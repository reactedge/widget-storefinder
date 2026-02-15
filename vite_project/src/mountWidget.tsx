import { createRoot } from "react-dom/client";
import StoreFinderWidget from "./StoreFinderWidget.tsx";
import {getMountedHost} from "./lib/hostReader.ts";
import {ensureGlobalStyle} from "./lib/style.ts";
import {activity} from "./activity";

export function mountWidget(hostElement: HTMLElement) {
    const mountedHost = getMountedHost(hostElement);

    ensureGlobalStyle('reactedge-storefinder-css', '/widget/storefinder.css');

    activity('bootstrap', 'Widget mounted', hostElement);

    // Create React root inside shadow
    const root = createRoot(mountedHost);
    root.render(<StoreFinderWidget host={hostElement} />);
}
