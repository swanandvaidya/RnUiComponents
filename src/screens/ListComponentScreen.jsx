import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const ListComponentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ListComponentScreen</Text>
    </View>
  );
};

export default ListComponentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
