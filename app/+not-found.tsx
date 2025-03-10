import { Stack, useRouter } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';

type NotFoundScreenRouteProp = RouteProp<{ params: { missingScreen?: string } }, 'params'>;

export default function NotFoundScreen() {
  const route = useRoute<NotFoundScreenRouteProp>();
  const { missingScreen } = route.params || {};
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/start');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme || 'light', false);
  return (

    <>
      <Stack.Screen options={{ title: 'Oops!', headerShown: false }} />
      <View style={styles.container}>
        <LottieView
          source={require('../assets/Main.json')} // Update the path to your JSON file
          autoPlay
          loop
          style={styles.loader}
        />

        <Text style={styles.text}>Redirecting to the start screen...</Text>
        {missingScreen && (
          <Text style={styles.text}>The screen "{missingScreen}" does not exist.</Text>
        )}
      </View>
    </>
  );
}

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: '400',
      textAlign: 'left',
      marginBottom: 16,
      marginTop: 16,
      color: Colors[theme].textHeading,
    },
    loader: {
      width: 250,
      height: 250,
    },

  });