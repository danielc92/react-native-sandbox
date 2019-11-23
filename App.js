import React, { useState } from 'react';
import {
  StyleSheet, 
  Text,
  TextInput,
  View, 
  Button } from 'react-native';
import data from './mock_data';
/*
Notes
- Text can only be placed within <Text> component
- <View> components represents <divs>, <sections> etc

*/

export default function App() {

  return (
    <View style={{padding: 30, display: 'flex', flexDirection: 'row'}}>
      <View style={{flex: 2, padding: 5}}>
        <TextInput
        placeholder="Enter a goal..."
        style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 2}}/>
        
      </View>
      <View stlye={{flex: 1}}>
         <Button title="Click me"/>
      </View>
    </View>
  );
}