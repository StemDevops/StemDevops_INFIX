import {Text, StyleSheet, TextInput, View, TouchableOpacity} from "react-native";
import {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const AuthInput = ({placeholder, icon, action, value, secureTextEntry}) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={action} value={value}
                       secureTextEntry={secureTextEntry && !isPasswordVisible} placeholderTextColor="#FFFFFFD3"/>
            {secureTextEntry && (
                <TouchableOpacity style={styles.toggleIcon} onPress={togglePasswordVisibility}>
                    <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} color="#FFFFFFD3"/>
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
        inputContainer: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            paddingLeft: 20,
            marginVertical: 5,
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            backgroundColor: 'rgb(131,163,190)',
            borderRadius: 50,
            height: 50,
            borderColor: '#2C5D87',
            borderWidth: 1,
        },
        input: {
            flex: 8,
            width: '100%',
            height: '100%',
            fontSize: 16,
            fontWeight: 'bold',
            paddingHorizontal: 10,
            color: 'rgb(255,255,255)',
        },
        toggleIcon: {
            flex: 1,
            marginRight: 10,
        },
    }
);

export default AuthInput;