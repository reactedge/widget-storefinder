import {StoreFinder} from "./components/StoreListing.tsx";
import {useWidgetConfig} from "./hooks/useWidgetConfig.ts";
import {Spinner} from "./components/global/Spinner.tsx";
import {ErrorState} from "./components/global/ErrorState.tsx";
import {TranslationStateProvider} from "./state/Translation/TranslationStateProvider.tsx";

type Props = {
    host: HTMLElement
}

export default function StoreFinderWidget({host}: Props) {
    const {config, error, loading} = useWidgetConfig(host);

    if (!config) return null;
    if (error) return <ErrorState />
    if (loading) return <Spinner />

    return (
        <TranslationStateProvider translations={config.translations}>
            <StoreFinder config={config} />
        </TranslationStateProvider>
    );
}
