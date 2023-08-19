import React, { useState } from "react"
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import bg from "../assets/Search_bg.png"
import Axios from "axios"

export default WorldSearchScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState("")
  const placeholderText = "Search"
  const [searchResults, setSearchResults] = useState([])

  const handleTextChange = (text) => {
    Axios.get("http://192.168.8.165:3002/destination/search", {
      params: {
        searchEntry: text, // assuming "searchTerm" is the query parameter name expected by the backend
      },
    })
      .then((response) => {
        console.log(response.data.destinations)
        // Handle the response from the backend if needed
        setSearchResults(response.data.destinations)
      })
      .catch((error) => {
        // Handle errors if the login fails
        console.error("Login error:", error)
      })
  }

  const gotoBack = () => {
    navigation.navigate("Home")
  }
  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBtnContainer}>
            <TouchableOpacity onPress={gotoBack}>
              <Ionicons name="arrow-back" size={32} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.headertext}>Search</Text>
          </View>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.select}>
          <Ionicons name="search" size={20} color="white" />
          <TextInput
            style={styles.Text2}
            value={inputText}
            placeholder={placeholderText}
            onChangeText={(text) => setInputText(text)} // Update inputText state
            onSubmitEditing={() => handleTextChange(inputText)} // Handle text submission
          />
        </View>

        {inputText !== "" && (
          <View style={styles.listItems}>
            {searchResults.map((result, index) => (
              <TouchableOpacity key={index} style={styles.listItem}>
                <Ionicons name="location" size={20} color="white" />
                <Text style={styles.Text3}>{result.name}</Text>
                {/* Display the 'name' property */}
              </TouchableOpacity>
            ))}
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#41729d",
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    ...Platform.select({
      ios: {
        marginTop: 10,
      },
      android: {
        marginTop: 40,
      },
    }),
  },
  headertext: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  headerBtnContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginRight: 40,
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
    margin: 20,
  },

  box2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  Text2: {
    width: "90%",
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 10,
  },
  Text3: {
    color: "#FFFFFF",
    fontSize: 16,
    padding: 10,
    alignSelf: "flex-start",
  },
  listItems: {
    width: "90%",
    padding: 15,
    backgroundColor: "rgba(131, 163, 190, 0.8)",
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        //elevation: 10,
      },
    }),
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  select: {
    width: "90%",
    margin: 20,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(131, 163, 190, 0.8)",
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        //elevation: 10,
      },
    }),
  },
})
