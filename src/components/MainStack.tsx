import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { TrackingDetailScreen } from "./screens/TrackingDetailScreen";
import { HistoryScreen } from "./screens/HistoryScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { SettingsScreen } from "./screens/SettingsScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#2563eb",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "CargoTracker Pro" }}
            />
            <StackNavigator.Screen
                name="TrackingDetail"
                component={TrackingDetailScreen}
                options={{ title: "Tracking Details" }}
            />
            <StackNavigator.Screen
                name="History"
                component={HistoryScreen}
                options={{ title: "History" }}
            />
            <StackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: "Profile" }}
            />
            <StackNavigator.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: "Settings" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);