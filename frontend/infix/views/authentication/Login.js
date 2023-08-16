import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {authContext} from "../../context/AuthContext";
import bg from "../../assets/auth_bg.png";
import Globe from "../../assets/Globe.png";
import Logo from "../../assets/Logo.png";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {isAuthenticated, login} = React.useContext(authContext);

    const handleLogin = () => {
        login({username: email, password: password});
        console.log("email: " + email + " password: " + password);

    };

    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.globe} source={Globe}/>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Login</Text>
                </View>
                <KeyboardAvoidingView style={styles.container}>
                    <View style={styles.inputContainer}>
                        <AuthInput placeholder="Email" action={setEmail} value={email} secureTextEntry={false}/>
                        <AuthInput placeholder="Password" action={setPassword} value={password} secureTextEntry={true}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <AuthButton text="Login" action={handleLogin}/>
                    </View>
                </KeyboardAvoidingView>
                <Image style={styles.Logo} source={Logo}/>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    globe: {
        width: 100,
        height: 100,
        marginBottom: 30,
        marginTop: 100,
    },
    headerContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
    Logo: {
        width: 120,
        height: 120,
        marginTop: 30,

    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginBottom: 30,

    },
    buttonContainer: {
        width: '80%',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginBottom: 30,
    },
});

export default Login;
