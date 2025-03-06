import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video, Clock, Smile, LogIn } from "lucide-react-native";

interface QuickViewCardProps {
  title: string;
  count: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  color: {
    light: string;
    dark: string;
    text: string;
    icon: string;
  };
}

const QuickViewCard: React.FC<QuickViewCardProps> = ({ title, count, icon: IconComponent, color }) => {
  return (
    <View style={[styles.card, { backgroundColor: color.light, borderColor: color.dark }]}>
      <Text style={[styles.title, { color: color.text }]}>{title}</Text>
      <View style={styles.bottomRow}>
        <Text style={[styles.count, { color: color.text }]}>{count}</Text>
        <IconComponent size={40} color={color.icon} />
      </View>
    </View>
  );
};

export default function QuickView() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quick View</Text>
      <View style={styles.grid}>
        <QuickViewCard 
          title="Scheduled Interviews" 
          count="5" 
          icon={Video} 
          color={{ light: "#E0F2F1", dark: "#00695C", text: "#00695C", icon: "#80CBC4" }} 
        />
        <QuickViewCard 
          title="Pending Invites" 
          count="20" 
          icon={Clock} 
          color={{ light: "#FFEBEE", dark: "#C62828", text: "#C62828", icon: "#EF9A9A" }} 
        />
        <QuickViewCard 
          title="Cognitive and Gamified" 
          count="30" 
          icon={Smile} 
          color={{ light: "#FFF3E0", dark: "#E65100", text: "#E65100", icon: "#FFB74D" }} 
        />
        <QuickViewCard 
          title="Completed Interviews" 
          count="120" 
          icon={LogIn} 
          color={{ light: "#EDE7F6", dark: "#4527A0", text: "#4527A0", icon: "#B39DDB" }} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  count: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
