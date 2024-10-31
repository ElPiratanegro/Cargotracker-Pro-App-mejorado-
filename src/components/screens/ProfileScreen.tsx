import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type ProfileScreenProps = {
    route: RouteProp<MainStackParamList, "Profile">,
    navigation: FrameNavigationProp<MainStackParamList, "Profile">,
};

export function ProfileScreen({ navigation }: ProfileScreenProps) {
    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <image
                    src="res://profile_placeholder"
                    className="h-24 w-24 rounded-full mb-4 self-center"
                />
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4">
                    <label className="font-bold mb-2">Personal Information</label>
                    <gridLayout columns="auto, *" rows="auto, auto, auto" className="gap-2">
                        <label row="0" col="0" className="text-gray-600">Name:</label>
                        <label row="0" col="1">John Doe</label>
                        
                        <label row="1" col="0" className="text-gray-600">Email:</label>
                        <label row="1" col="1">john.doe@example.com</label>
                        
                        <label row="2" col="0" className="text-gray-600">Company:</label>
                        <label row="2" col="1">Logistics Corp</label>
                    </gridLayout>
                </stackLayout>
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4">
                    <label className="font-bold mb-2">Account Statistics</label>
                    <gridLayout columns="*, *" rows="auto, auto" className="gap-2">
                        <stackLayout row="0" col="0" className="text-center">
                            <label className="text-2xl font-bold">24</label>
                            <label className="text-gray-600">Active Shipments</label>
                        </stackLayout>
                        <stackLayout row="0" col="1" className="text-center">
                            <label className="text-2xl font-bold">156</label>
                            <label className="text-gray-600">Total Tracked</label>
                        </stackLayout>
                    </gridLayout>
                </stackLayout>
                
                <button
                    className="bg-blue-600 text-white font-bold p-4 rounded-lg"
                    onTap={() => navigation.navigate("Settings")}
                >
                    Settings
                </button>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#f3f4f6",
    },
});