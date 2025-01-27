import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Button,
  View,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenStack} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtonWithRoundedCorner from './src/components/Buttons/ButtonWithRoundedCorner';
import HomeScreen from './src/screens/HomeScreen';
import TextComponentsScreen from './src/screens/TextComponentsScreen';
import ButtonComponentsScreen from './src/screens/ButtonComponentsScreen';
import ListComponentScreen from './src/screens/ListComponentScreen';
import AppNavigation from './src/navigation/AppNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return <AppNavigation />;
};

export default App;
