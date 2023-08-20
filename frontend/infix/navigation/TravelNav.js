import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Checkout from "../views/Checkout";
import TravelScreen from '../views/TravelScreen';


const Stack = createStackNavigator();
export default function TravelNav() {


    return (
        <Stack.Navigator initialRouteName="TravelScreen">
            <Stack.Screen name="TravelScreen" component={TravelScreen} options={{headerShown: false,}}/>
            <Stack.Screen name="Checkout" component={Checkout} options={{headerShown: false,}}/>
        </Stack.Navigator>
    );
}

