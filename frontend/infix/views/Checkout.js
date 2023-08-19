import React, {useState} from "react";
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import bg from "../assets/Checkout_bg.png";
import Card from "../components/CheckoutCard";
import Crypto from "../components/CheckoutCrypto";

const CheckoutScreen = ({navigation}) => {
    const [buttonClicked, setButtonClicked] = useState("Crypto");

    const handleButtonClickCrypto = () => {
        setButtonClicked("Crypto");
    };

    const handleButtonClickCard = () => {
        setButtonClicked("Card");
    };

    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerBtnContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={32} color="white"/>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <Text style={styles.headertext}>Notifications</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button]} onPress={handleButtonClickCrypto}>
                            <Text style={styles.buttonText}>Crypto</Text>
                            {buttonClicked === "Crypto" && <View style={styles.underline}/>}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleButtonClickCard}>
                            <Text style={styles.buttonText}>Card</Text>
                            {buttonClicked === "Card" && <View style={styles.underline}/>}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.bodyContainer}>
                    {buttonClicked === "Crypto" && (
                        <Crypto/>
                    )}
                    {buttonClicked === "Card" && (
                        <Card/>
                    )}
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        backgroundColor: "#41729d",
    },
    header: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                marginTop: 10,
            },
            android: {
                marginTop: 40,
            },
        })
    },
    headertext: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    headerBtnContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 40,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 5,
    },
    button: {
        flex: 1,
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "#DBE9F5",
        fontWeight: "bold",
    },

    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#dbe9f5",
        shadowColor: "#dbe9f5",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 10,
        marginTop: 0,
    },
    underline:{
        width: "60%",
        height: 2,
        backgroundColor: "#dbe9f5",
        shadowColor: "#dbe9f5",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 10,
        marginTop: 2,
    },
    bodyContainer: {
        width: "100%",
        height: "100%",
    },
});

export default CheckoutScreen;