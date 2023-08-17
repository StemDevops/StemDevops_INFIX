import React from 'react'
import {View, Text, StyleSheet, ImageBackground, SafeAreaView, Image} from 'react-native'
import bg from "../../assets/auth_bg.png";
import AuthButton from "../../components/AuthButton";
import SocialButton from "../../components/SocialButton";
import Globe from "../../assets/Globe.png";
import Logo from "../../assets/Logo.png";
const AuthSelection = ({navigation}) => {

    const goToLogin = () => {
        navigation.navigate('Login');``
    }

    const goToSignup = () => {
        navigation.navigate('Signup');
    }

    const loginWithFacebook = () => {
        console.log('facebook')
    }

    const loginWithGoogle = () => {
        console.log('google')
    }

    const loginWithApple = () => {
        console.log('apple')
    }

    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.globe} source={Globe}/>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>All the Stars.</Text>
                    <Text style={styles.header}>Just at your Fingertips.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <AuthButton text="Login" action={goToLogin} />
                    <AuthButton text="Signup" action={goToSignup}/>
                </View>
                <View style={styles.buttonContainer}>
                    <SocialButton text="Continue with Faceook" action={loginWithFacebook} bgcolor="#1877F2" logo="logo-facebook" color="#fff"/>
                    <SocialButton text="Continue with Google" action={loginWithGoogle} bgcolor="#fff" logo="logo-google" color="#000"/>
                    <SocialButton text="Continue with Apple ID" action={loginWithApple} bgcolor="#000" logo="logo-apple" color="#fff"/>
                </View>
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
    buttonContainer: {
        width: '80%',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginBottom: 30,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#41729d',
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

    }
});

export default AuthSelection;