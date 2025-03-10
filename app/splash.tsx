import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/loader.json')} // Update the path to your JSON file
        autoPlay
        loop
        style={styles.loader}
      />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loader: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});