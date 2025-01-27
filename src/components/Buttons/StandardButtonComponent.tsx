import {Button, StyleSheet, View} from 'react-native';
import React from 'react';

const StandardButtonComponent = () => {
  return (
    <View style={styles.container}>
      <Button title="Standard Button"></Button>;
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default StandardButtonComponent;
