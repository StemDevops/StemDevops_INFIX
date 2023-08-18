import React, {useContext} from "react";
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthContextProvider, {authContext} from "./context/AuthContext";

import AppNav from "./navigation/AppNav";

const Stack = createStackNavigator();

export default function App() {
    return (
        <AuthContextProvider>
            <AppNav/>
        </AuthContextProvider>
    );
}

