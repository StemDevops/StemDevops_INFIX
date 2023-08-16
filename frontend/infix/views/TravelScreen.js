import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import bg from "../assets/home_bg.png";

const TravelScreen = ({ navigation }) => {
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
        {/* Start of the Header */}
        <View style={styles.header}>
          {/* Back button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back-outline" size={40} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.pageTitleContainer}>
            <Text style={styles.headertextpagename}>Spaceship Search</Text>
          </View>
          <View style={{ width: 40 }} />
        </View>

        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={handleButtonClickSingle}>
                ONE-WAY
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleButtonClickRound}
            >
              <Text style={styles.buttonText}>ROUND-TRIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={handleButtonClickMulti}>
                MULTI-PLANET
              </Text>
            </TouchableOpacity>
            <View style={{ width: 10 }} />
          </View>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.bodyContainer}>
          {buttonClicked === "Single" && (
            <View style={styles.bodyContainerStyle}>
              <Text>This is single trip</Text>
            </View>
          )}
          {buttonClicked === "Round" && (
            <View style={styles.bodyContainerStyle}>
              <Text>This is Round trip</Text>
            </View>
          )}
          {buttonClicked === "Multi" && (
            <View style={styles.bodyContainerStyle}>
              <Text>This is Multi trip</Text>
            </View>
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
    shadowOffset: { width: 0, height: 2 },
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
});

export default TravelScreen;
