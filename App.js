import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
      <Text>Open up App.js to start working on your app!</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
