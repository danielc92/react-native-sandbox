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

  const removeGoalHandler = (id) => {
    console.log(id);
    setGoals(currentGoals => {
      return currentGoals.filter(g => g.id !== id)
    })
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
          borderColor: '#EFEFEF',
          borderRadius: 3,
          borderWidth: 1,
          marginBottom: 8
        }}>
          <Text style={{ fontSize: 30, marginBottom: 8, color: '#2F2F2F'}}>Title</Text>
          <Text style={{ color: '#696969', marginBottom: 8 }}>{ item.goal }</Text>
          <Button style={{ backgroundColor: '#C33434'}} title="Remove" onPress={removeGoalHandler.bind(this, item.id)}></Button>
        </View>
      )}>
      </FlatList>
    </View>
  );
}