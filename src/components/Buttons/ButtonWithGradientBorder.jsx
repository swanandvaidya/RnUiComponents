import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ButtonWithGradientBorder = () => {
  return (
    <LinearGradient
      colors={['#8888b9', '#7fc3d1']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={styles.gradient}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Button With Gradient Border</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ButtonWithGradientBorder;

const styles = StyleSheet.create({
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonContainer: {
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '99%',
    margin: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    alignSelf: 'center',
    fontSize: 18,
    padding: 10,
  },
});
