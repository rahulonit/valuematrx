import React from 'react';
import { Video, Clock, Smile, LogIn } from "lucide-react-native";
import { StyleSheet, View, Text } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';

const QuickViewCard = ({ title, count, icon: IconComponent, color }: { title: string, count: string, icon: React.ComponentType<any>, color: { light: string, dark: string, text: string, icon: string } }) => {
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'light', false); 
    return (
        <View style={[styles.card, { backgroundColor: color.light, borderColor: color.dark }]}>
            <View style={[styles.titlecont]}>
                <Text style={[styles.title, { color: color.text }]}>{title}</Text>
            </View>
            <View style={styles.bottomRow}>
                <Text style={[styles.count, { color: color.text }]}>{count}</Text>
                <IconComponent style={styles.flotIcon} size={64} color={color.icon} />
            </View>
        </View>
    );
};

const QuickView = () => {
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'light', false);
    return (
        <View style={styles.quicksection}>
            <Text style={styles.sectionTitle}>Quick View</Text>
            <View style={styles.grid}>
                <QuickViewCard 
                    title="Scheduled Interviews" 
                    count="5" 
                    icon={Video} 
                    color={{ light: Colors[colorScheme || 'light'].Green100, dark: Colors[colorScheme || 'light'].Green600, text: Colors[colorScheme || 'light'].GreenColor, icon: Colors[colorScheme || 'light'].Green200 }} 
                />
                <QuickViewCard 
                    title="Pending Invites / Interviews" 
                    count="20" 
                    icon={Clock} 
                    color={{ light: Colors[colorScheme || 'light'].Red100, dark: Colors[colorScheme || 'light'].Red600, text: Colors[colorScheme || 'light'].RedColor, icon: Colors[colorScheme || 'light'].Red200 }} 
                />
                <QuickViewCard 
                    title="Cognitive and Gamified" 
                    count="30" 
                    icon={Smile} 
                    color={{ light: Colors[colorScheme || 'light'].Yellow100, dark: Colors[colorScheme || 'light'].Yellow600, text: Colors[colorScheme || 'light'].YellowColor, icon: Colors[colorScheme || 'light'].Yellow200 }} 
                />
                <QuickViewCard 
                    title="Completed Interviews" 
                    count="120" 
                    icon={LogIn} 
                    color={{ light: Colors[colorScheme || 'light'].Blue100, dark: Colors[colorScheme || 'light'].Blue600, text: Colors[colorScheme || 'light'].BlueColor, icon: Colors[colorScheme || 'light'].Blue200 }} 
                />
            </View>
        </View>
    );
};

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
    StyleSheet.create({
        quicksection: {
            alignItems:"flex-start",
            backgroundColor: Colors[theme].Background1,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: Colors[theme].BorderColor,
            width: "100%",
            
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: "bold",
            color: Colors[theme].textBody,
            borderBottomWidth: 1,
            borderBottomColor: Colors[theme].BorderColor,
            width: "100%",
            padding: 16,
        },
        grid: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 16,
            margin:16,
        },
        card: {
            width: "47%",
            padding: 16,
            borderRadius: 12,
            borderWidth: 0,
            borderLeftWidth: 3,
        },
        titlecont: {
            width: "100%",
        },
        title: {
            fontSize: 16,
            fontWeight: "600",
        },
        bottomRow: {
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
        },
        count: {
            fontSize: 24,
            fontWeight: "bold",
            paddingTop: 24,
        },
        flotIcon: { 
            position: "absolute",
            right: -10,
            bottom: -10,
        },
    });

export default QuickView;