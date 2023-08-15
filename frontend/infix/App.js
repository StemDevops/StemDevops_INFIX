import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNav from ".//navigation/AuthNav";
import MainNav from "./navigation/MainNav";

const Stack = createStackNavigator();

export default function App() {
  return (
    //<MainNav/>

    <NavigationContainer independent={true}>

    <Stack.Navigator initialRouteName="AuthNav">

      <Stack.Screen
        name="AuthNav"
        component={AuthNav}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MainNav"
        component={MainNav}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

