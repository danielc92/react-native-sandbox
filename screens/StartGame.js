import React from 'react';
import { View, StyleSheet, Button, Text, TextInput } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game Screen!</Text>
            <View style={styles.container}>
                <Text style={{textAlign: 'center'}}>Select a number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset"/>
                    <Button title="Confirm"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    }
})
export default StartGameScreen;