import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const TextComponentsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the basic standard text</Text>
      <Text style={styles.italicText}>This is italic basic text</Text>
    </SafeAreaView>
  );
};

export default TextComponentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  italicText: {
    fontStyle: 'italic',
    marginVertical: 16,
  },
});
