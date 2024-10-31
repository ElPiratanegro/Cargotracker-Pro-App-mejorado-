import * as React from "react";
import { StyleSheet } from "react-nativescript";

type MapViewProps = {
    latitude: number;
    longitude: number;
    vesselName: string;
};

export function MapView({ latitude, longitude, vesselName }: MapViewProps) {
    return (
        <mapView
            style={styles.map}
            latitude={latitude}
            longitude={longitude}
            zoom={8}
            bearing={0}
            tilt={0}
            padding={[40, 40, 40, 40]}
        >
            <marker
                latitude={latitude}
                longitude={longitude}
                title={vesselName}
                snippet="Current vessel location"
            />
        </mapView>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 300,
        marginBottom: 16,
    },
});