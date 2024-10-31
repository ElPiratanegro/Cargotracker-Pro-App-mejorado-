import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type HistoryScreenProps = {
    route: RouteProp<MainStackParamList, "History">,
    navigation: FrameNavigationProp<MainStackParamList, "History">,
};

export function HistoryScreen({ navigation }: HistoryScreenProps) {
    const trackingHistory = [
        { id: '1', number: 'TRACK123', date: '2024-03-20', status: 'Delivered' },
        { id: '2', number: 'TRACK456', date: '2024-03-15', status: 'In Transit' },
        { id: '3', number: 'TRACK789', date: '2024-03-10', status: 'Delivered' },
    ];

    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <label className="text-2xl font-bold mb-4">Tracking History</label>
                
                {trackingHistory.map((item) => (
                    <gridLayout
                        key={item.id}
                        columns="*, auto"
                        className="bg-white p-4 rounded-lg mb-2"
                        onTap={() => navigation.navigate("TrackingDetail", { trackingNumber: item.number })}
                    >
                        <stackLayout col="0">
                            <label className="font-bold">{item.number}</label>
                            <label className="text-gray-600">{item.date}</label>
                        </stackLayout>
                        <label
                            col="1"
                            className={item.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'}
                        >
                            {item.status}
                        </label>
                    </gridLayout>
                ))}
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