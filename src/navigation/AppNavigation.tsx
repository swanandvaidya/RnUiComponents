import {View, Text, Platform, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TextComponentsScreen from '../screens/TextComponentsScreen';
import ButtonComponentsScreen from '../screens/ButtonComponentsScreen';
import ListComponentScreen from '../screens/ListComponentScreen';
import PlayGroundScreen from '../screens/PlayGroundScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'snow',
          },
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PlaygroundScreen" component={PlayGroundScreen} />
        <Stack.Screen name="TextComponents" component={TextComponentsScreen} />
        <Stack.Screen
          name="ButtonComponentsScreen"
          component={ButtonComponentsScreen}
        />
        <Stack.Screen
          name="ListComponentScreen"
          component={ListComponentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
