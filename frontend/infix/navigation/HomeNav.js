import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "../views/main/Home";
import TicketsScreen from '../views/Tickets';


const Stack = createStackNavigator();
export default function HomeNav() {


    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false,}}/>
            <Stack.Screen name="Tickets" component={TicketsScreen} options={{headerShown: false,}}/>
        </Stack.Navigator>
    );
}

