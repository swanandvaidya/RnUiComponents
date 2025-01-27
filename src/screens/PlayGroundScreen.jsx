import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const PlayGroundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>
        Just if you want to play with components
      </Text>
    </View>
  );
};

export default PlayGroundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Parent container fills the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
});
