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
    padding: 14,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
});

export default ButtonWithRoundedCorner;
