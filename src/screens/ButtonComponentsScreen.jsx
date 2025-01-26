import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StandardButtonComponent from '../components/Buttons/StandardButtonComponent';
import ButtonWithRoundedCorner from '../components/Buttons/ButtonWithRoundedCorner';

const ButtonComponentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ButtonComponentsScreen</Text>
      <StandardButtonComponent />
      <ButtonWithRoundedCorner />
    </View>
  );
};

export default ButtonComponentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 18,
    marginVertical: 12,
  },
});
