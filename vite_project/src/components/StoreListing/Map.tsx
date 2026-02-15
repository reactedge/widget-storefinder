import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import type {Store} from "../../domain/store.types.ts";
import type {Center, ResolvedStoreFinderConfig} from "../Types.ts";

interface StoreMapProps {
    readonly stores: readonly Store[];
    readonly currentCenter: Center;
    readonly config: ResolvedStoreFinderConfig
}

export function StoreMap({ stores, currentCenter, config }: StoreMapProps) {
    const [selected, setSelected] = useState<Store | null>(null);
    const apiKey = config.integrations.googleMaps.apiKey

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <div className="storeMap">
                <div className="storeMap__title">
                    {stores.length} store{stores.length !== 1 ? "s" : ""} found
                </div>

                <GoogleMap
                    key={stores.length}
                    mapContainerStyle={{ width: "100%", height: "400px" }}
                    center={currentCenter}
                    zoom={config.data.zoom}
                >
                    {stores.map(store => (
                        <Marker
                            key={`${store.lat},${store.lng}`}
                            position={{ lat: store.lat, lng: store.lng }}
                            onClick={() => setSelected(store)}
                        />
                    ))}

                    {selected && (
                        <InfoWindow
                            position={{ lat: selected.lat, lng: selected.lng }}
                            onCloseClick={() => setSelected(null)}
                        >
                            <div>
                                <h4>{selected.name}</h4>
                                <p>{selected.hours}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </div>
        </LoadScript>
    );
}
