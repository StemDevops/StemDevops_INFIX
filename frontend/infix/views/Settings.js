import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { Platform } from 'react-native';

import bg from "../assets/settings_bg.png";
import profile from "../assets/profile.png";
import Ionicons from "@expo/vector-icons/Ionicons";

export default HelpCenter = ({ navigation }) => {
    const [UID, setUID] = useState('123456789ABCD');
    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerBtnContainer}>
                        <TouchableOpacity>
                            <Ionicons name="arrow-back" size={32} color="white"/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.headertextwelcome}>Settings</Text>
                    </View>
                    <View style={styles.headerBtnContainer}>
                        <TouchableOpacity>
                            <Ionicons name="reload" size={28} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Image source={profile} style={styles.profileImg}/>
                    <Text style={styles.profileName}>Universal ID {UID}</Text>
                </View>

                <View style={styles.settingsContainer}>
                    <TouchableOpacity style={styles.settingsContainer2} >
                        <Ionicons name="person-outline" size={20} color="white" style={{ paddingRight: 10 }} />
                        <Text style={styles.settingsContent}>Edit Profile Information </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsContainer2}>
                        <Ionicons name="notifications-outline" size={20} color="white" style={{ paddingRight: 10 }} />
                        <Text style={styles.settingsContent}>Notifications </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsContainer2}>
                        <Ionicons name="language-outline" size={20} color="white" style={{ paddingRight: 10 }} />
                        <Text style={styles.settingsContent}>Language</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.settingsContainer}>
                    <TouchableOpacity style={styles.settingsContainer2} >
                        <Ionicons name="person-outline" size={20} color="white" style={{ paddingRight: 10 }} />
                        <Text style={styles.settingsContent}>Help center </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsContainer2}>
                        <Ionicons name="notifications-outline" size={20} color="white" style={{ paddingRight: 10 }} />
                        <Text style={styles.settingsContent}>Contact us </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsContainer2}>
                        <Ionicons name="language-outline" size={20} color="white" style={{ paddingRight: 10 }} />
                        <Text style={styles.settingsContent}>Privacy policy</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.settingsContainer}>
                    <TouchableOpacity style={styles.settingsContainer2} >
                        <Ionicons name="log-out-outline" size={20} color="white" style={{ paddingRight: 10 }} />
                        <Text style={styles.settingsContent}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </ImageBackground>
    )
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#41729d',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...Platform.select({
            ios: {
                marginTop: 10,
            },
            android: {
                marginTop: 40,
            },
        })
    },
    headertextwelcome: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    headertext: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerBtnContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    profileImg: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#fff',
        marginTop: "25%",
        marginBottom: "1%",
        alignSelf: 'center',
    },
    profileName: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    settingsContainer: {
        width: '85%',
        margin: 12,
        padding: 10,
        backgroundColor: 'rgba(44, 93, 135, 0.8)',
        borderRadius: 8,
        justifyContent: 'space-between',

        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
            },
            android: {
              elevation: 1,
            },
        })
    },
    settingsContainer2: {
        padding: 5,
        flexDirection: 'row',
    },
    settingsContent:{
        color: '#ffffff',
        fontSize: 16,
    },
}
)