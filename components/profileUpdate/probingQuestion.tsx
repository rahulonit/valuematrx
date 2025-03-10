import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import Button from "../ui/button";


const ProbingQuestions = () => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme || 'light');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Probing Questions</Text>

      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.description}>
          To help us understand your professional experience and preferences better, we've created a set of probing questions. Each section will take approximately 90 seconds to complete.
        </Text>

        {/* Active Section */}
        <View style={styles.activeCard}>
          <Text style={styles.cardTitle}>Casually looking for job</Text>
          <View style={styles.row}>
            <Ionicons name="time-outline" size={20} color={Colors[colorScheme || 'light'].GreenColor} />
            <Text style={styles.cardText}>Approximately 90 seconds</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="document-text-outline" size={20} color={Colors[colorScheme || 'light'].GreenColor} />
            <Text style={styles.cardText}>Free mini report</Text>
          </View>
          <Button icon={true} iconName="arrow-forward" size="medium" color="green" title="Start" variant="primary" onPress={() => {}}/>

        </View>

        {/* Locked Sections */}
        {[
          { title: "Looking for a job", level: "1" },
          { title: "Actively looking for jobs", level: "2" },
        ].map((item, index) => (
          <View key={index} style={styles.lockedCard}>
            <Text style={styles.cardTitle}>{item.title}</Text>

            <View style={styles.lockedRow}>
              <Ionicons name="lock-closed-outline" size={18} color={Colors[colorScheme || 'light'].textBody} />
              <Text style={styles.lockedText}>
                Unlock this level by finishing level {item.level}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const createStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors[theme].Background1,
      flex: 1,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: Colors[theme].BorderColor,
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: Colors[theme].BorderColor,
      width: "100%",
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors[theme].textHeading,
      width: "100%"
    },
    detailContainer: {
      padding: 16,
      gap: 16,
    },
    description: {
      fontSize: 14,
      color: Colors[theme].textBody,
    },
    activeCard: {
      backgroundColor: Colors[theme].Green100,
      borderColor: Colors[theme].GreenColor,
      borderWidth: 1,
      padding: 15,
      borderRadius: 10,
    },
    cardTitle: {
      fontWeight: "bold",
      fontSize: 16,
      color: Colors[theme].textHeading,
      marginBottom: 8,
    },
    cardText: {
      fontSize: 14,
      color: Colors[theme].GreenColor,
      marginLeft: 5,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    },
    startButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors[theme].primary,
      padding: 10,
      borderRadius: 8,
      marginTop: 10,
      justifyContent: "center",
    },
    startText: {
      color: "#fff",
      fontWeight: "bold",
      marginLeft: 5,
    },
    lockedCard: {
      backgroundColor: Colors[theme].Grey100,
      padding: 15,
      borderRadius: 10,
    },
    lockedRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
    },
    lockedText: {
      fontSize: 14,
      color: Colors[theme].textBody,
      marginLeft: 5,
    },
  });

export default ProbingQuestions;
