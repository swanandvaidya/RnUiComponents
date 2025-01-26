import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextComponentsScreen from './TextComponentsScreen';
import ButtonComponentsScreen from './ButtonComponentsScreen';
import ListComponentScreen from './ListComponentScreen';

const HomeScreen = ({navigation}) => {
  const goToButtonComponentScreen = () => {
    navigation.navigate(ButtonComponentsScreen);
  };
  const goToTextComponentScreen = () => {
    navigation.navigate('TextComponents');
  };

  const goToListComponentScreen = () => {
    navigation.navigate(ListComponentScreen);
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.textHeader}>
        Welcome to React Native UI Component{' '}
      </Text>
      <Text style={styles.textSubTitle}>
        Please go through Below UI component list
      </Text>
      <TouchableOpacity
        style={styles.components}
        onPress={goToTextComponentScreen}>
        <Text style={styles.componentText}>Text Components</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.components}
        onPress={goToButtonComponentScreen}>
        <Text style={styles.componentText}>Button Components</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.components}
        onPress={goToListComponentScreen}>
        <Text style={styles.componentText}>List Components</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    alignItems: 'flex-start',
  },
  textHeader: {
    fontSize: 24,
  },
  textSubTitle: {
    fontSize: 18,
    marginVertical: 16,
  },
  components: {
    backgroundColor: 'lightcoral',
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
    borderRadius: 8,
    width: '100%',
  },
  componentText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  },
});
