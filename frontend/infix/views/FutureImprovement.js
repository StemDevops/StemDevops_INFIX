import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import bg from "../assets/settings_bg.png";
import logo from "../assets/Logo.png";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FutureImprovement = ({ navigation }) => {
  const gotoBack = () => {
    navigation.navigate("Home");
  };
  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View style={styles.headerBtnContainer}>
        <TouchableOpacity onPress={gotoBack} style={styles.backButtonBody}>
          <Ionicons name="arrow-back" size={32} color="white" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.bodyDiv1}>
          <Text style={styles.messageHead}>FUTURE IMPROVEMENT</Text>
          <Text style={styles.message}>To be Developed Later !</Text>
        </View>
        <View style={styles.bodyDiv2}>
          <Image style={styles.logo} source={logo} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "#41729d",
  },
  messageHead: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  message: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F2F3F2",
    marginTop: 10,
  },
  logo: {
    marginTop: 50,
  },
  bodyDiv1: {
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 200,
    marginHorizontal: 5,
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: 20,
    marginTop: "40%",
    overflow: "hidden",
  },
  bodyDiv2: {
    marginTop: "35%",
    justifyContent: "center",
    alignItems: "center",
  },

  headerBtnContainer: {
    marginRight: 40,
    paddingTop: 30,
    marginHorizontal: 15,
  },

  backButtonBody: {
    flexDirection: "row",
  },

  backText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingLeft: 10,
  },
});

export default FutureImprovement;
