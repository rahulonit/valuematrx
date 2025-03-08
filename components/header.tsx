import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import SideNav from '@/components/sidenav';

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
    StyleSheet.create({
        headerContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 40,
            height: 90,
            width: "100%",
        },
        hamburger: {
            padding: 8,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors[theme].BorderColor,
            color: Colors[theme].textBody,
        },
        profileSection: {
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            marginLeft: 15,
        },
        profileImage: {
            width: 40,
            height: 40,
            borderRadius: 20,
        },
        onlineIndicator: {
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: Colors[theme].LightGreenBase,
            position: "absolute",
            left: 30,
            bottom: 0,
            borderWidth: 2,
            borderColor: Colors[theme].Background2,
        },
        userName: {
            marginLeft: 10,
            fontSize: 16,
            fontWeight: "600",
            color: Colors[theme].textBody,
        },




        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: Colors[theme].Background1,
            padding: 15,
            gap: 15,
        },
        link: {
            marginTop: 15,
            paddingVertical: 15,
            color: Colors[theme].primary,
        },

        rightSection: {
            flexDirection: "row",
            alignItems: "center",
        },
        notificationIcon: {
            position: "relative",
            marginRight: 10,
        },
        badgeStyle: {
            position: "absolute",
            top: -5,
            right: -5,
        },
        divider: {
            height: 20,
            width: 1,
            backgroundColor: Colors[theme].BorderColor,
            marginHorizontal: 10,
        },

    });

const Header = ({ toggleNav }: { toggleNav: () => void }) => {
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'light', false);

    return (
        <View style={styles.headerContainer}>
            {/* Hamburger Menu */}
            <TouchableOpacity style={styles.hamburger} onPress={toggleNav}>
                <Icon name="menu" color={Colors[colorScheme || 'light'].textBody} size={28} />
            </TouchableOpacity>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: "https://webmention.io/avatar/pbs.twimg.com/32e1559ae9931b4fabd62c254cf2c2d9aa44ff5c248a77fb448898f6383968d4.jpg" }} // Replace with actual profile image
                    style={styles.profileImage}
                />
                <View style={styles.onlineIndicator} />
                <Text style={styles.userName}>Aliya Doherty</Text>
            </View>

            {/* Notification & Search */}
            <View style={styles.rightSection}>
                <TouchableOpacity style={styles.notificationIcon}>
                    <Icon name="bell" type="feather" color="gray" size={24} />
                    <Badge
                        value="4"
                        containerStyle={styles.badgeStyle}
                        badgeStyle={{ backgroundColor: Colors[colorScheme || 'light'].GreenColor }}
                    />
                </TouchableOpacity>
                <View style={styles.divider} />
                <TouchableOpacity>
                    <Icon name="search" type="feather" color="gray" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default function HeaderComponent() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'light', false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <View style={styles.container}>
            <Header toggleNav={toggleNav} />
            <SideNav user={{ photo: "https://webmention.io/avatar/pbs.twimg.com/32e1559ae9931b4fabd62c254cf2c2d9aa44ff5c248a77fb448898f6383968d4.jpg", name: "Aliya Doherty" }} isOpen={isNavOpen} toggleNav={toggleNav} />
        </View>
    );
}