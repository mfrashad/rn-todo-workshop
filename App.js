import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
      <Text style={styles.appTitle}>Minimalist Todo App</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  }
});
