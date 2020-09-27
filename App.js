import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Trippin</Text>
        </View>
        <View style={styles.body}>
        <Text style={styles.boldText}>Write a review for<Text> test </Text>wherever you visit</Text>
        <Text>Write a review for wherever you visit</Text>
        <Text>Write a review for wherever you visit</Text>
        <Text>Write a review for wherever you visit</Text>
        </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});
