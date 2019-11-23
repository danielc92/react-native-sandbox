import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import {
  StyleSheet, 
  FlatList,
  Text,
  TextInput,
  View, 
  Button } from 'react-native';
import data from './mock_data';
/*
Notes
- Text can only be placed within <Text> component
- <View> components represents <divs>, <sections> etc
- Scrolling isnt enabled by default, scrolling is explicit
*/

export default function App() {

  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    console.log('Setting the goal to ', text);
    setGoal(text);
  }

  const addGoalHandler = () => {
    const goalItem = {
      id: uuid(),
      goal
    }
    setGoals([...goals, goalItem]);
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
          style={{ 
            borderBottomColor: 'black', 
            borderBottomWidth: 1, 
            marginBottom: 2}}/>
          
        </View>
        <View stlye={{flex: 1}}>
          <Button title="Click me" onPress={addGoalHandler}/>
        </View>
      </View>
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={goals}
      renderItem={({item, index}) => (
        <View 
        style={{
          padding: 20, 
          backgroundColor: '#fafafa', 
          color: 'white',
          borderColor: 'black',
          borderWidth: 1,
          marginBottom: 8
        }}>
          <Text style={{ fontSize: 30, marginBottom: 8}}>Title</Text>
          <Text>{ item.goal }</Text>
        </View>
      )}>
      </FlatList>
    </View>
  );
}