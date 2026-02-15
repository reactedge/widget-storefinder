import {useMemo} from "react";
import {activity} from "../activity";
import {readIntegrationConfig, readWidgetConfig, resolveStoreFinderConfig} from "../StoreFinderConfig.ts";
import type {ResolvedStoreFinderConfig} from "../domain/store.types.ts";

export function useWidgetConfig(
    host: HTMLElement
): ResolvedStoreFinderConfig | null {
    return useMemo(() => {
        const widgetConfig = readWidgetConfig(host);
        if (!widgetConfig) {
            activity('bootstrap', 'Missing widget config', null, 'error');
            return null;
        }

        const runtime = readIntegrationConfig();
        const resolved = resolveStoreFinderConfig(widgetConfig, runtime);

        activity('bootstrap', 'Config resolved', {
            data: resolved.data,
            integrations: resolved.integrations
        });

        return resolved;

    }, [host]);
}



