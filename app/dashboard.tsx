import React from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import QuickView from '@/components/quickView';
import SuggestionUpdate from '@/components/suggestionUpdate';
import TodayInterview from '@/components/todayCard';
import PendingInvites from '@/components/penddingCard';
import HeaderComponent from '@/components/ui/header';
import CognitiveInvites from '@/components/cognitiveInvites';
import ScheduleInterview from '@/components/scheduleInterview';




const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 16,
      paddingBottom: 40,
      gap: 16,
      marginTop: 120,
    },
    dashContainer: {
      width: '100%',
      zIndex: 100,
      position: 'absolute',
      borderBottomWidth: 1,
      borderColor: Colors[theme].BorderColor,
    },
  });

export default function Dashboard() {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme || 'light', false);

  return (
    <View >
      <Stack.Screen options={{ title: 'Dashboard' }} />
      <View style={styles.dashContainer}>
        <HeaderComponent  title='Dashboard'/>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View style={styles.container}>
          <SuggestionUpdate />
          <QuickView />
          <TodayInterview />
          <PendingInvites />
          <CognitiveInvites />
          <ScheduleInterview />
        </View>
      </ScrollView>
    </View>
  );
}
