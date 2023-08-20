import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../views/main/Home';
import WorldSearchScreen from '../views/WorldSearchScreen';
import TravelScreen from '../views/TravelScreen';
import NotificationsScreen from '../views/NotificationsScreen';
import ProfileNav from './ProfileNav';
//Screen names
const homeName = "Home";
const worldsearchName = "World Search";
const travelName = "Travel";
const notificationName = "Notifications";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainNav() {

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator

                initialRouteName={homeName}

                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === worldsearchName) {
                            iconName = focused ? 'search' : 'search-outline';

                        } else if (rn === travelName) {
                            iconName = focused ? 'rocket' : 'rocket-outline';

                        } else if (rn === notificationName) {
                            iconName = focused ? 'heart' : 'heart-outline';

                        } else if (rn === profileName) {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }

                        return <Ionicons name={iconName} size={28} color={color}/>;
                    },

                    tabBarActiveTintColor: '#FFFFFF',
                    tabBarInactiveTintColor: '#FFFFFF',
                    tabBarLabelStyle: {paddingBottom: 0, fontSize: 1, color: 'rgba(0, 58, 107, 0.7)'},
                    tabBarStyle: {
                        marginTop: 0,
                        padding: 10,
                        height: 75,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        backgroundColor: 'rgb(0,58,107)',
                        overflow: 'hidden',
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        position: 'absolute',
                        zIndex: 1,
                    },
                    headerShown: false,
                })}
                /* Navigation Bar */
            >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={worldsearchName} component={WorldSearchScreen}/>
                <Tab.Screen name={travelName} component={TravelScreen}/>
                <Tab.Screen name={notificationName} component={NotificationsScreen}/>
                <Tab.Screen name={profileName} component={ProfileNav}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainNav;