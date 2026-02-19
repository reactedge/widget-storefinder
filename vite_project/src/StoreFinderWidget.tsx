import {StoreFinder} from "./components/StoreListing.tsx";
import {useWidgetConfig} from "./hooks/useWidgetConfig.ts";

type Props = {
    host: HTMLElement
}

export default function StoreFinderWidget({host}: Props) {
    const config = useWidgetConfig(host);

    if (!config) return null;

    return (
        <StoreFinder config={config} />
    );
}
