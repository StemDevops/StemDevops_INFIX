import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import ProfileScreen from "../views/ProfileScreen";
import MemoryView from "../views/MemoryView";


const Stack = createStackNavigator();
export default function ProfileNav() {


    return (
        <Stack.Navigator initialRouteName="ProfileScreen">
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false,}}/>
            <Stack.Screen name="MemoryView" component={MemoryView} options={{headerShown: false,}}/>
        </Stack.Navigator>
    );
}

