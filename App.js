import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGame';

function App() {
    return (
        <View style={styles.screen}>
            <Header title="Daniels Cool Beans App"/>
            <StartGameScreen/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default App;