import React from "react";
import {View, TouchableOpacity, StyleSheet,Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SocialButton = ({text, action, bgcolor, logo, color}) => {
    return (
            <TouchableOpacity style={[styles.button, {backgroundColor: bgcolor}]} onPress={action}>
                <Ionicons name={logo} size={20} color={color} style={styles.icon}/>
                <Text style={[styles.text, {color: color,}]}>{text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        flexDirection: 'row',
        borderRadius: 50,
        alignItems: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        justifyContent: 'center',
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon:{
        marginRight: 10,
    }
});

export default SocialButton;