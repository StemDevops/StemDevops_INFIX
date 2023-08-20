import React from "react"
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native"
import bg from "../../assets/auth_bg.png"
import Globe from "../../assets/Globe.png"
import AuthInput from "../../components/AuthInput"
import AuthButton from "../../components/AuthButton"
import Logo from "../../assets/Logo.png"
import Axios from "axios" // Import the axios library for making HTTP requests
import Ionicons from "@expo/vector-icons/Ionicons";

const Signup = ({ navigation }) => {
  const [universalId, setUniversalId] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [name, setName] = React.useState("")

  const handleSignup = () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match")
      return
    }

    const registerData = {
      universal_id: universalId,
      username: name,
      password: password,
      userType: "customer",
    }

    Axios.post("http://192.168.8.165:3002/user/register", registerData)
      .then((response) => {
        // Handle the response from the backend if needed
        if (response.data.approved === true) {
          console.log("Registration:", response.data.approved)
          navigation.navigate("Login")
        } else {
          console.log("Registration unsuccessful:", response.data.approved)
        }
      })
      .catch((error) => {
        // Handle errors if the login fails
        console.error("Registration error:", error)
      })
  }

  const gotoLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "null" : "null"}
      >
      <SafeAreaView style={styles.container}>
        <View style={styles.BtnContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={32} color="white"/>
          </TouchableOpacity>
        </View>
        <Image style={styles.globe} source={Globe} />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Signup</Text>
        </View>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.signup}>Already Have An Account?</Text>
          <TouchableOpacity onPress={gotoLogin}>
            <Text style={styles.signupLink}> Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <AuthInput
              placeholder="Universal ID"
              action={setUniversalId}
              value={universalId}
              secureTextEntry={false}
            />
            <AuthInput
              placeholder="User Name"
              action={setName}
              value={name}
              secureTextEntry={false}
            />
            <AuthInput
              placeholder="Password"
              action={setPassword}
              value={password}
              secureTextEntry={true}
            />
            <AuthInput
              placeholder="Confirm Password"
              action={setConfirmPassword}
              value={confirmPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <AuthButton text="Sign Up" action={handleSignup} />
          </View>
        </View>
        <Image style={styles.Logo} source={Logo} />
      </SafeAreaView></KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  BtnContainer: {
    alignSelf: 'flex-start',
    margin: 30,
    marginBottom: 0,
},
  globe: {
    width: 100,
    height: 100,
    marginVertical: 15,
  },
  headerContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  Logo: {
    width: 120,
    height: 120,
    marginTop: 30,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginBottom: 30,
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginBottom: 30,
  },
  signup: {
    color: "#fff",
    fontSize: 15,
  },
  subHeaderContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  signupLink: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
})

export default Signup
