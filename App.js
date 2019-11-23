import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import data from './mock_data';

export default function App() {

  const [outputText, setOutputText] = useState('Open up App.js to start working on app.')
  return (
    <View style={styles.container}>
      <Text>{ outputText }</Text>
      <Button title="Change text" onPress={()=>setOutputText('This is the new text')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
