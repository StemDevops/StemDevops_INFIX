import React from "react";
import {View, TouchableOpacity, StyleSheet,Text} from "react-native";

const AuthButton = ({text, action}) => {
    return (
            <TouchableOpacity style={styles.button} onPress={action}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#5880A2',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#fff',

    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default AuthButton;