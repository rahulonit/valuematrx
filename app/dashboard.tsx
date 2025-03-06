import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Video, Clock, Smile, LogIn } from "lucide-react-native";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { CheckCircle, AlertCircle } from "lucide-react-native";
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import SideNav from '../components/sidenav';
import Button from '../components/button';

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: Colors[theme].background,
    },
    link: {
      marginTop: 15,
      paddingVertical: 15,
      color: Colors[theme].primary,
    },
    hamburger: {
      padding: 8,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors[theme].backgroundAndBorderBorderColor,
      color: Colors[theme].text,
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 15,
      paddingVertical: 10,
      paddingTop: 54,borderBottomWidth: 2,
      borderBottomColor: Colors[theme].backgroundAndBorderBorderColor,
      backgroundColor: Colors[theme].backgroundAndBorderBackground1,
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
      backgroundColor: Colors[theme].lightGreenLightGreenBase,
      position: "absolute",
      left: 30,
      bottom: 0,
      borderWidth: 2,
      borderColor: Colors[theme].backgroundAndBorderBackground2,
    },
    userName: {
      marginLeft: 10,
      fontSize: 16,
      fontWeight: "600",
      color: Colors[theme].text,
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
      backgroundColor: Colors[theme].backgroundAndBorderBorderColor,
      marginHorizontal: 10,
    },

    profileStatus: {
      fontSize: 12,
      color: "#6b7280",
      marginTop: 4,
    },
    section: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      backgroundColor: Colors[theme].backgroundAndBorderBackground1,
      padding: 6,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: Colors[theme].backgroundAndBorderBorderColor,
    },

    Sectionscontainer: {
      margin: 16,
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
      backgroundColor: Colors[theme].backgroundAndBorderBackground2,
      borderRadius: 12,
      padding: 12,
      paddingTop: 4,
      borderColor: Colors[theme].backgroundAndBorderBorderColor,
      borderWidth: 1,
    },
    cardHeader: {
      flexDirection: "row",
      alignItems: 'center',
      gap: 8,
      width: "100%",
      justifyContent: "space-between",
    },
    cardHeaderTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: Colors[theme].text,
    },
    barcontainer: {
      width: "100%",
    },

    statusBar: {
      width: "100%",
      height: 8,

      backgroundColor: Colors[theme].backgroundAndBorderBackground2,
      borderRadius: 5,
      overflow: "hidden",
    },
    progressBar: {
      height: "100%",
      backgroundColor: Colors[theme].greenGreenColor,
    },
    percentage: {
      fontSize: 14,
      color: Colors[theme].textTextColor,
      marginBottom: 8,
    },

    quicksection: {
      margin: 16,
      alignItems: "center",
      gap: 8,
      backgroundColor: Colors[theme].backgroundAndBorderBackground1,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: Colors[theme].backgroundAndBorderBorderColor,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: Colors[theme].text,
      borderBottomWidth: 1,
      borderBottomColor: Colors[theme].backgroundAndBorderBorderColor,
      width: "100%",
      padding: 16,
    },
    grid: {
      padding: 16,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 8,
    },
    card: {
      width: "48%",
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

const Header = ({ toggleNav }: { toggleNav: () => void }) => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme || 'light', false);

  return (
    <View style={styles.headerContainer}>
      {/* Hamburger Menu */}
      <TouchableOpacity style={styles.hamburger} onPress={toggleNav}>
        <Icon name="menu" color={Colors[colorScheme || 'light'].textBodyTextColor} size={28} />
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
            badgeStyle={{ backgroundColor: Colors[colorScheme || 'light'].greenGreenColor }}
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

export default function Dashboard() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme || 'light', false);
  const profileSections = [
    { name: "Resume", completed: true },
    { name: "Probing Questions", completed: false },
    { name: "Resume headline", completed: true },
    { name: "Key skills", completed: true },
    { name: "IT skills", completed: false },
    { name: "Experience", completed: true },
    { name: "Projects", completed: false },
    { name: "Education and certification", completed: true },
    { name: "Career profile", completed: false },
    { name: "Profile summary", completed: true },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const QuickViewCard = ({ title, count, icon: IconComponent, color }: { title: string, count: string, icon: React.ComponentType<any>, color: { light: string, dark: string, text: string, icon: string } }) => {
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
    return (
      <View style={styles.quicksection}>
        <Text style={styles.sectionTitle}>Quick View</Text>
        <View style={styles.grid}>
          <QuickViewCard 
            title="Scheduled Interviews" 
            count="5" 
            icon={Video} 
            color={{ light: Colors[colorScheme || 'light'].greenGreen100, dark: Colors[colorScheme || 'light'].greenGreen600, text: Colors[colorScheme || 'light'].greenGreenColor, icon: Colors[colorScheme || 'light'].greenGreen200 }} 
          />
          <QuickViewCard 
            title="Pending Invites / Interviews" 
            count="20" 
            icon={Clock} 
            color={{ light: Colors[colorScheme || 'light'].redRed100, dark: Colors[colorScheme || 'light'].redRed600, text: Colors[colorScheme || 'light'].redRedColor, icon: Colors[colorScheme || 'light'].redRed200 }} 
          
          />
          <QuickViewCard 
            title="Cognitive and Gamified" 
            count="30" 
            icon={Smile} 
            color={{ light: Colors[colorScheme || 'light'].yellowYellow100, dark: Colors[colorScheme || 'light'].yellowYellow600, text: Colors[colorScheme || 'light'].yellowYellowColor, icon: Colors[colorScheme || 'light'].yellowYellow200 }} 
          
          />
          <QuickViewCard 
            title="Completed Interviews" 
            count="120" 
            icon={LogIn} 
            color={{ light: Colors[colorScheme || 'light'].blueBlue100, dark: Colors[colorScheme || 'light'].blueBlue600, text: Colors[colorScheme || 'light'].blueBlueColor, icon: Colors[colorScheme || 'light'].blueBlue200 }} 
          
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Stack.Screen options={{ title: 'Dashboard' }} />
      <Header toggleNav={toggleNav} />
      <SideNav user={{ photo: "https://webmention.io/avatar/pbs.twimg.com/32e1559ae9931b4fabd62c254cf2c2d9aa44ff5c248a77fb448898f6383968d4.jpg", name: "Aliya Doherty" }} isOpen={isNavOpen} toggleNav={toggleNav} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <View style={styles.Sectionscontainer}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderTitle}>Suggested for you</Text>
              <Button style={{ width: 140, }} title="Update Profile" size='small' color={Colors[colorScheme || 'light'].greenGreenColor} onPress={() => { /* Add your onPress logic here */ }} />
            </View>
            <Text style={styles.profileStatus}>Profile last updated: <Text style={{ fontWeight: "bold" }}>14 June 2024</Text></Text>
            <View style={styles.barcontainer}>
              <Text style={styles.percentage}>Profile status (75%)</Text>
              <View style={styles.statusBar}>
                <View style={[styles.progressBar, { width: `100%` }]} />
              </View>

            </View>
            {profileSections.map((section, index) => (
              <View key={index} style={styles.section}>
                {section.completed ? (
                  <CheckCircle color={Colors[colorScheme || 'light'].greenGreenColor} size={20} />
                ) : (
                  <AlertCircle color={Colors[colorScheme || 'light'].redRedColor} size={20} />
                )}
                <Text style={{ fontSize: 14, color: Colors[colorScheme || "light"].text }}>{section.name}</Text>
              </View>
            ))}
          </View>

          {/* Quick View Section */}
          <QuickView />


        </View>
      </ScrollView >

    </View >

  );
}
