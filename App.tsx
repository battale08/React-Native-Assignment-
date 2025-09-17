import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MatchFeed from './src/components/dynamicMatchFeed';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MatchFeed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
});
