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

const Stack = createNativeStackNavigator();

const App = () => {
  const getDefaultScreenOptions = navigation => ({
    headerLeft:
      Platform.OS === 'ios' ? (
        <Button title="Back" onPress={() => navigation.goBack()} />
      ) : null,
  });

  const customHeader = () => {
    return (
      <View style={styles.customHeader}>
        <Text style={styles.headerTitle}>Custom Header</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'snow',
          },
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
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

const styles = StyleSheet.create({
  customHeader: {
    height: 60, // Set custom header height
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
  },
});

export default App;
