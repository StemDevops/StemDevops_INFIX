import React from "react";
import {StatusBar} from "expo-status-bar";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    ImageBackground
} from "react-native";
import bg from "../../assets/auth_bg.png";
import Globe from "../../assets/Globe.png";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";
import Logo from "../../assets/Logo.png";

const Signup = ({navigation}) => {

    const [universalId, setUniversalId] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [name, setName] = React.useState('');

    const handleSignup = () => {
        console.log("universalId: " + universalId + " email: " + email + " password: " + password + " name: " + name);
    }

    const gotoLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.globe} source={Globe}/>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Signup</Text>
                </View>
                <View style={styles.subHeaderContainer}>
                    <Text style={styles.signup}>Already Have An Account?</Text>
                    <TouchableOpacity onPress={gotoLogin}>
                        <Text style={styles.signupLink}> Login</Text>
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView style={styles.container}>
                    <View style={styles.inputContainer}>
                        <AuthInput placeholder="Universal ID" action={setUniversalId} value={universalId} secureTextEntry={false}/>
                        <AuthInput placeholder="Email" action={setEmail} value={email} secureTextEntry={false}/>
                        <AuthInput placeholder="Full Name" action={setName} value={name} secureTextEntry={false}/>
                        <AuthInput placeholder="Password" action={setPassword} value={password} secureTextEntry={true}/>
                        <AuthInput placeholder="Confirm Password" action={setConfirmPassword} value={confirmPassword} secureTextEntry={true}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <AuthButton text="Login" action={handleSignup}/>
                    </View>
                </KeyboardAvoidingView>
                <Image style={styles.Logo} source={Logo}/>
            </SafeAreaView>
        </ImageBackground>
    )


}

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
        marginBottom: 20,
        marginTop: 50,
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
    signup: {
        color: '#fff',
        fontSize: 15,

    },
    subHeaderContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,

    },
    signupLink:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default Signup;