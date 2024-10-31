import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const [trackingNumber, setTrackingNumber] = React.useState("");

    const handleTrack = () => {
        if (trackingNumber.trim()) {
            navigation.navigate("TrackingDetail", { trackingNumber });
        } else {
            Dialogs.alert("Please enter a tracking number");
        }
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-3xl font-bold text-center mb-8">
                Track Your Cargo
            </label>
            
            <textField
                hint="Enter tracking number"
                text={trackingNumber}
                onTextChange={(e) => setTrackingNumber(e.value)}
                className="w-3/4 p-4 mb-4 bg-white rounded-lg border border-gray-300"
            />
            
            <button
                className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg mb-4"
                onTap={handleTrack}
            >
                Track Shipment
            </button>
            
            <gridLayout columns="*, *" rows="auto" className="w-3/4">
                <button
                    col="0"
                    className="bg-gray-200 m-2 p-4 rounded-lg"
                    onTap={() => navigation.navigate("History")}
                >
                    History
                </button>
                <button
                    col="1"
                    className="bg-gray-200 m-2 p-4 rounded-lg"
                    onTap={() => navigation.navigate("Profile")}
                >
                    Profile
                </button>
            </gridLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
    },
});