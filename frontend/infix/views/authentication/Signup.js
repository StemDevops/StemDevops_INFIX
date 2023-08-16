import React from "react";
import {StatusBar} from "expo-status-bar";
import {View, StyleSheet, Text} from "react-native";

const Signup = () => {
    return (
        <View style={styles.container}>
            <Text>SignUp</Text>
        </View>)


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
});

export default Signup;