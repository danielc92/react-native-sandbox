import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Text, TextInput } from 'react-native';

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
        Alert.alert('Success', 'number has been set!')
    }

    const handleResetNumber = () => {
        setNumber(null);
        Alert.alert('Success', 'number has been reset!')
    }

    return (
        <View style={styles.screen}>
            <Text>The Game Screen!</Text>
            {
                number ? 
                <Text style={styles.chosenText}>You have chosen {number}</Text>
                :<Text style={styles.chosenText}>You haven't chosen a number yet!</Text>
            }
            <View style={styles.container}>
                <Text style={styles.numberText}>Select a number</Text>
                <TextInput 
                    onChange={handleChangeNumber}
                    keyboardType="numeric"
                    style={{ marginBottom: 16, borderColor: '#f2f2f2', borderWidth: 1}}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={handleResetNumber} 
                        color="#f7287b" title="Reset"
                    />
                    <Button
                        onPress={handleSetNumber} 
                        title="Confirm"
                    />
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
    },
    numberText: {
        textAlign: 'center', 
        marginBottom: 16
    },
    chosenText: { 
        textAlign: 'center', 
        fontSize: 26, 
        fontWeight: 'bold'
    }
    
})
export default StartGameScreen;