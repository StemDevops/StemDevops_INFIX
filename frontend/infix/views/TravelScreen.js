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
import bg from "../assets/home_bg.png";
import InputTextField from "../components/InputTextField";
import SingleTrip from "../components/SingleTrip";
import RoundTrip from "../components/RoundTrip";
import MultiTrip from "../components/MultiTrip";

const TravelScreen = ({navigation}) => {
    const [buttonClicked, setButtonClicked] = useState("Single");

    const handleButtonClickSingle = () => {
        setButtonClicked("Single");
    };

    const handleButtonClickRound = () => {
        setButtonClicked("Round");
    };

    const handleButtonClickMulti = () => {
        setButtonClicked("Multi");
    };

    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back-outline" size={40} color="#FFFFFF"/>
                    </TouchableOpacity>
                    <View style={styles.pageTitleContainer}>
                        <Text style={styles.headertextpagename}>Spaceship Search</Text>
                    </View>
                    <View style={{width: 40}}/>
                </View>

                <View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleButtonClickSingle}>
                            <Text style={styles.buttonText}>ONE-WAY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleButtonClickRound}>
                            <Text style={styles.buttonText}>ROUND-TRIP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleButtonClickMulti}>
                            <Text style={styles.buttonText}>MULTI-PLANET</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.bodyContainer}>
                    {buttonClicked === "Single" && (

                        <SingleTrip navigation={navigation}/>
                    )}
                    {buttonClicked === "Round" && (
                        <RoundTrip navigation={navigation}/>
                    )}
                    {buttonClicked === "Multi" && (
                        <MultiTrip navigation={navigation}/>

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
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    backButton: {
        paddingHorizontal: 0,
        marginTop: 30,
    },
    pageTitleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    headertextpagename: {
        fontSize: 20,
        color: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,
        width: "100%",
        marginTop: 20,
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
        fontWeight: "bold",
        color: "#DBE9F5",
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
    bodyContainer: {
        width: "100%",
        height: "100%",
    },

    bodyContainerStyle: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        opacity: 0.9,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    selectedValue: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default TravelScreen;
