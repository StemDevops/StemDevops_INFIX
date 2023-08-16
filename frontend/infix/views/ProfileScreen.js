import {View, Text, TouchableOpacity} from 'react-native';
import React from "react";
import {authContext} from "../context/AuthContext";

const ProfileScreen = ({navigation}) => {

    const {isAuthenticated, logout} = React.useContext(authContext);
    const onLogoutPressed = () => {
        logout();
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={onLogoutPressed}>
                <Text
                style={{fontSize: 26, fontWeight: 'bold'}}>Logout
            </Text></TouchableOpacity>

        </View>
    )
}

export default ProfileScreen;