import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ButtonWithGradient = () => {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['#f55c7d', '#6a82fb']}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={styles.btnText}>Button with Gradient</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonWithGradient;

const styles = StyleSheet.create({
  btnText: {
    color: '#F0F0F0',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
  },
  gradient: {
    borderRadius: 10,
    marginVertical: 20,
  },
});
