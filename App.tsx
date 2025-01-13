import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import StandardButtonComponent from './src/components/Buttons/StandardButtonComponent';
import ButtonWithRoundedCorner from './src/components/Buttons/ButtonWithRoundedCorner';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 24, textAlign: 'center', marginVertical: 20}}>
        UI Components
      </Text>
      <StandardButtonComponent />
      <ButtonWithRoundedCorner />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    paddingHorizontal: 30,
  },
});

export default App;
