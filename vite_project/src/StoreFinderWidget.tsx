import {StoreFinder} from "./components/StoreListing.tsx";
import {TranslationStateProvider} from "./state/Translation/TranslationStateProvider.tsx";
import type {StoreFinderWidgetConfig} from "./domain/store.types.ts";
import {readWidgetConfig} from "./StoreFinderConfig.ts";

type Props = {
    rawConfig: StoreFinderWidgetConfig
}

export default function StoreFinderWidget({rawConfig}: Props) {
    const config = readWidgetConfig(rawConfig);

    if (!config) return null;

    return (
        <TranslationStateProvider translations={config.translations}>
            <StoreFinder config={config} />
        </TranslationStateProvider>
    );
}
