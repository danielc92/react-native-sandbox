import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput } from 'react-native';

const StartGameScreen = props => {

    const [number, setNumber] = useState(null);
    const [input, setInput] = useState(null);
    
    const handleChangeNumber = (e) => {
        setInput(e.nativeEvent.text)
    }

    const handleSetNumber = () => {
        const parsedNumber = parseFloat(input);
        if (parsedNumber !== NaN) {
            setNumber(parsedNumber);
        }
    }

    return (
        <View style={styles.screen}>
            <Text>The Game Screen!</Text>
            {
                number ? 
                <Text style={{ fontSize: 26, fontWeight: 'bold'}}>You have chosen {number}</Text>
                :<Text style={{ textAlign: 'center', fontSize: 26, fontWeight: 'bold'}}>You haven't chosen a number yet!</Text>
            }
            <View style={styles.container}>
                <Text style={{
                    textAlign: 'center', 
                    marginBottom: 16}}>Select a number</Text>
                <TextInput 
                onChange={handleChangeNumber}
                keyboardType="numeric"
                style={{ marginBottom: 16, borderColor: '#f2f2f2', borderWidth: 1}}/>
                <View style={styles.buttonContainer}>
                    <Button color="#f7287b" title="Reset"/>
                    <Button onPress={handleSetNumber} title="Confirm"/>
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
        borderColor: '#f2f2f2',
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