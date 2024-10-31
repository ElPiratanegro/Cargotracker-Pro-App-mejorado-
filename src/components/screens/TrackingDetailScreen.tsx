import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { MapView } from "../MapView";
import { getTrackingInfo } from "../../services/tracking";

type TrackingDetailProps = {
    route: RouteProp<MainStackParamList, "TrackingDetail">,
    navigation: FrameNavigationProp<MainStackParamList, "TrackingDetail">,
};

export function TrackingDetailScreen({ route }: TrackingDetailProps) {
    const { trackingNumber } = route.params;
    const [trackingInfo, setTrackingInfo] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchTrackingInfo = async () => {
            try {
                const info = await getTrackingInfo(trackingNumber);
                setTrackingInfo(info);
            } catch (error) {
                console.error("Error fetching tracking info:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrackingInfo();
        
        // Refresh tracking info every 5 minutes
        const interval = setInterval(fetchTrackingInfo, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, [trackingNumber]);

    if (loading) {
        return (
            <flexboxLayout style={styles.container}>
                <activityIndicator busy={true} />
            </flexboxLayout>
        );
    }

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl font-bold mb-4">
                    Tracking Number: {trackingNumber}
                </label>

                {trackingInfo?.location && (
                    <MapView
                        latitude={trackingInfo.location.latitude}
                        longitude={trackingInfo.location.longitude}
                        vesselName={trackingInfo.vessel.name}
                    />
                )}
                
                <stackLayout className="w-full p-4 bg-white rounded-lg mb-4">
                    <label className="font-bold mb-2">Vessel Information</label>
                    <label>Vessel: {trackingInfo?.vessel.name}</label>
                    <label>Current Port: {trackingInfo?.vessel.currentPort}</label>
                    <label>Status: {trackingInfo?.vessel.status}</label>
                    {trackingInfo?.location && (
                        <>
                            <label>Speed: {trackingInfo.location.speed} knots</label>
                            <label>Last Update: {new Date(trackingInfo.location.lastUpdate).toLocaleString()}</label>
                        </>
                    )}
                </stackLayout>
                
                <stackLayout className="w-full p-4 bg-white rounded-lg mb-4">
                    <label className="font-bold mb-2">Route Details</label>
                    <label>Origin: {trackingInfo?.route.origin}</label>
                    <label>Destination: {trackingInfo?.route.destination}</label>
                    <label>ETA: {trackingInfo?.route.eta}</label>
                </stackLayout>
                
                <stackLayout className="w-full p-4 bg-white rounded-lg">
                    <label className="font-bold mb-2">Tracking Events</label>
                    {trackingInfo?.events.map((event: any, index: number) => (
                        <label key={index}>{event.date}: {event.description}</label>
                    ))}
                </stackLayout>
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 16,
        backgroundColor: "#f3f4f6",
    },
});