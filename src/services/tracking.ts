type VesselLocation = {
    latitude: number;
    longitude: number;
    vesselName: string;
    speed: number;
    heading: number;
    lastUpdate: string;
};

type TrackingInfo = {
    trackingNumber: string;
    vessel: {
        name: string;
        currentPort: string;
        status: string;
    };
    route: {
        origin: string;
        destination: string;
        eta: string;
    };
    events: Array<{
        date: string;
        description: string;
    }>;
    location: VesselLocation;
};

export async function getTrackingInfo(trackingNumber: string): Promise<TrackingInfo> {
    // Simulated API response
    return {
        trackingNumber,
        vessel: {
            name: "Sample Vessel",
            currentPort: "Port of Shanghai",
            status: "In Transit"
        },
        route: {
            origin: "Port of Los Angeles",
            destination: "Port of Rotterdam",
            eta: "2024-04-15"
        },
        events: [
            { date: "2024-03-20", description: "Departed Port of Los Angeles" },
            { date: "2024-03-25", description: "Crossed Panama Canal" },
            { date: "2024-04-01", description: "Approaching European Waters" }
        ],
        location: {
            latitude: 35.4698,
            longitude: 139.6922,
            vesselName: "Sample Vessel",
            speed: 14.5,
            heading: 90,
            lastUpdate: "2024-03-26T10:30:00Z"
        }
    };
}