import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Login from "../views/authentication/Login";
import Signup from "../views/authentication/Signup";
import AuthSelection from "../views/authentication/AuthSelection";


const Stack = createStackNavigator();
export default function AuthNav({ navigation}) {

    const onLoginPressed = () => {
        navigation.navigate('MainNav')
    }

    return (
            <Stack.Navigator initialRouteName="AuthSelection">
                <Stack.Screen name="AuthSelection" component={AuthSelection} options={{headerShown: false,}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
                <Stack.Screen name="Signup" component={Signup} options={{headerShown: false,}}/>
            </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },

    loginButton: {
      borderRadius: 45,
      backgroundColor: '#5880A2',
      height: 45,
      width: 280,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      //marginBottom: 25,
    },
    loginText: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold',
      //fontFamily: 'Ubuntu',
    },
  })