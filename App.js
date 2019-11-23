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

  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    console.log('Setting the goal to ', text);
    setGoal(text);
  }

  const addGoalHandler = () => {
    setGoals([...goals, goal]);
    console.log(goals)
  }

  return (
    <View>
      <View style={{padding: 30, display: 'flex', flexDirection: 'row'}}>
        <View style={{flex: 2, padding: 5}}>
          <TextInput
          onChangeText={goalInputHandler}
          placeholder="Enter a goal..."
          value={goal}
          style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 2}}/>
          
        </View>
        <View stlye={{flex: 1}}>
          <Button title="Click me" onPress={addGoalHandler}/>
        </View>
      </View>
      <View>
        {
          goals.map(oneGoal => (
          <Text 
          style={{padding: 10, backgroundColor: 'red', color: 'white'}}
          key={oneGoal}>{oneGoal}</Text>))
        }
      </View>
    </View>
  );
}