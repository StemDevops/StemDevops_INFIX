import React, {useContext} from "react";
import {View} from "react-native";
import {authContext} from "../context/AuthContext";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import AuthNav from "./AuthNav";
import MainNav from "./MainNav";


const Stack = createStackNavigator();

const AppNav = () => {

    const {isAuthenticated} = useContext(authContext);

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="AuthNav">
                {!isAuthenticated ?
                    <Stack.Screen name="AuthNav" component={AuthNav} options={{headerShown: false,}}/> :
                    <Stack.Screen name="MainNav" component={MainNav} options={{headerShown: false,}}/>}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNav;