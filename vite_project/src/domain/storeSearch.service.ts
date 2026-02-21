import type {LatLng, Store, StoreFinderDataConfig, StoreWithDistance} from "./store.types";
import { MapSearch } from "../Model/MapSearch";

export interface StoreSearchResult {
    readonly stores: readonly StoreWithDistance[];
    readonly center: LatLng;
}

export class StoreSearchService {
    private readonly dataset: StoreFinderDataConfig;
    private readonly mapSearch: MapSearch;

    constructor(dataset: StoreFinderDataConfig, mapSearch: MapSearch) {
        this.dataset = dataset;
        this.mapSearch = mapSearch;
    }

    async search(
        postcode: string,
        distanceMiles: number
    ): Promise<StoreSearchResult | null> {

        const userLocation = await this.mapSearch.geocodePostcode(postcode);
        if (!userLocation) return null;

        const maxDistanceKm = distanceMiles * 1.60934;

        const stores: StoreWithDistance[] = this.dataset.stores
            .map((store: Store) => ({
                ...store,
                distanceKm: this.mapSearch.calculateDistanceKm(
                    userLocation.lat,
                    userLocation.lng,
                    store.lat,
                    store.lng
                )
            }))
            .filter((store: StoreWithDistance) => store.distanceKm !== null && store.distanceKm <= maxDistanceKm)
            .sort((a: StoreWithDistance, b: StoreWithDistance) => {
                if (a.distanceKm === null || b.distanceKm === null) return 0;
                return a.distanceKm - b.distanceKm
            });

        return {
            stores,
            center: userLocation
        };
    }
}
