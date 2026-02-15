/* -------------------- */
/* Widget Contract      */
/* -------------------- */

export interface Store {
    readonly name: string,
    readonly lat: number;
    readonly lng: number;
    readonly hours?: string;
}

export type StoreWithDistance = Store & { distanceKm: number | null };


export interface StoreFinderWidgetConfig {
    readonly data: StoreFinderDataConfig;
    readonly integration?: {
        readonly requires?: readonly GoogleMapsIntegrationName[];
    };
}

export interface StoreFinderDataConfig {
    readonly stores: readonly Store[];
    readonly defaultCenter: LatLng;
    readonly zoom: number;
}

export type LatLng = {
    readonly lat: number;
    readonly lng: number;
};

export type GoogleMapsIntegrationName = 'googleMaps';

/* -------------------- */
/* Runtime              */
/* -------------------- */

export interface ReactEdgeRuntimeConfig {
    readonly integrations: ReactEdgeRuntimeIntegrations;
}

export interface ReactEdgeRuntimeIntegrations {
    readonly googleMaps?: {
        readonly apiKey: string;
    };
}

/* -------------------- */
/* Resolved Config      */
/* -------------------- */

export interface ResolvedStoreFinderConfig {
    readonly data: StoreFinderDataConfig;
    readonly integrations: ReactEdgeRuntimeIntegrations;
}

export type DistanceOption = { label: string; miles: number; };

export const DISTANCE_OPTIONS: DistanceOption[] = [
    { label: "10 miles", miles: 10 },
    { label: "30 miles", miles: 30 },
    { label: "100 miles", miles: 100 },
    { label: "300 miles", miles: 300 }
];