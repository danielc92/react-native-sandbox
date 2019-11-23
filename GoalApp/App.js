import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import {
  StyleSheet, 
  FlatList,
  Text,
  TextInput,
  View, 
  Button } from 'react-native';
import data from '../mock_data';
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
    setGoal(text);
  }

  const addGoalHandler = () => {
    const goalItem = {
      id: uuid(),
      timestamp: new Date().toUTCString(),
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
    <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 30}}>
      
      <View>
          <TextInput
          onChangeText={goalInputHandler}
          placeholder="Enter a goal..."
          value={goal}
          style={{ 
            borderBottomColor: '#696969', 
            padding: 5,
            borderWidth: 1, 
            marginBottom: 10
          }}/>
          <Button title="Add New Goal" onPress={addGoalHandler}/>
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
          <Text style={{ fontSize: 28, marginBottom: 10, color: '#2F2F2F'}}>{ item.goal }</Text>
          <Text style={{ color: '#696969', marginBottom: 10 }}>{ item.timestamp }</Text>
          <Button color= '#C33434' title="Remove" onPress={removeGoalHandler.bind(this, item.id)}></Button>
        </View>
      )}>
      </FlatList>
    </View>
  );
}
