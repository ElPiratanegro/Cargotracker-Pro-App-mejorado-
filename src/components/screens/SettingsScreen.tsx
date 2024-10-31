import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type SettingsScreenProps = {
    route: RouteProp<MainStackParamList, "Settings">,
    navigation: FrameNavigationProp<MainStackParamList, "Settings">,
};

export function SettingsScreen({ navigation }: SettingsScreenProps) {
    const [notifications, setNotifications] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <label className="text-2xl font-bold mb-4">Settings</label>
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4">
                    <label className="font-bold mb-2">Preferences</label>
                    
                    <gridLayout columns="*, auto" className="mb-4">
                        <label col="0">Push Notifications</label>
                        <switch
                            col="1"
                            checked={notifications}
                            onCheckedChange={(args) => setNotifications(args.value)}
                        />
                    </gridLayout>
                    
                    <gridLayout columns="*, auto">
                        <label col="0">Dark Mode</label>
                        <switch
                            col="1"
                            checked={darkMode}
                            onCheckedChange={(args) => setDarkMode(args.value)}
                        />
                    </gridLayout>
                </stackLayout>
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4">
                    <label className="font-bold mb-2">Account</label>
                    <button className="text-left text-blue-600 p-2">Change Password</button>
                    <button className="text-left text-blue-600 p-2">Export Data</button>
                    <button className="text-left text-blue-600 p-2">Privacy Settings</button>
                </stackLayout>
                
                <stackLayout className="bg-white p-4 rounded-lg mb-4">
                    <label className="font-bold mb-2">About</label>
                    <label>Version 1.0.0</label>
                    <button className="text-left text-blue-600 p-2">Terms of Service</button>
                    <button className="text-left text-blue-600 p-2">Privacy Policy</button>
                </stackLayout>
                
                <button className="text-red-600 font-bold p-4">
                    Sign Out
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