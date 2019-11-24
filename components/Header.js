import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 90,
        paddingTop: 30,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24, 
        color: '#fff',
    }
})

export default Header;