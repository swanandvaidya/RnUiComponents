import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ButtonWithRoundedCorner = () => {
  return (
    <TouchableOpacity style={btnStyle.roundedCorner}>
      <Text style={btnStyle.btnText}>Rounded Corner Button</Text>
    </TouchableOpacity>
  );
};

const btnStyle = StyleSheet.create({
  roundedCorner: {
    backgroundColor: 'hotpink',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ButtonWithRoundedCorner;
