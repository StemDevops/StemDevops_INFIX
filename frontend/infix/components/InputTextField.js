import {
    Text,
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";
import {useEffect, useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputTextField = ({placeholder, icon, action, value, secureTextEntry,style}) => {

    return (
        <View style={[styles.inputContainer, style? style: null]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={action}
                value={value}
                placeholderTextColor="#FFFFFFD3"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        paddingLeft: 20,
        marginVertical: 5,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        backgroundColor: "rgb(131,163,190)",
        borderRadius: 50,
        height: 50,
        borderColor: "#2C5D87",
        borderWidth: 1,
    },
    input: {
        flex: 8,
        width: "100%",
        height: "100%",
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 10,
        color: "rgb(255,255,255)",
    },
    toggleIcon: {
        flex: 1,
        marginRight: 10,
    },
});

export default InputTextField;
