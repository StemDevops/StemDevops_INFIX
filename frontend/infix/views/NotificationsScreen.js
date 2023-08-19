import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { Platform } from 'react-native';

import bg from "../assets/Notifications_bg.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import profile from "../assets/profile.png";

export default NotificationsScreen = ({ navigation }) => {
  const [notiHeader, setNotiHeader] = useState('Susan Robert');
  const [noti, setNoti] = useState('Susan Robert likes your memory on Moon001');
  
  const gotoBack = () => {
    navigation.navigate('Home');
  }
    return (
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.container}>

          <View style={styles.header}>
            <View style={styles.headerBtnContainer}>
              <TouchableOpacity onPress={gotoBack}>
                <Ionicons name="arrow-back" size={32} color="white"/>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.headertext}>Notifications</Text>
            </View>
          </View>
          
          <Text style={styles.notiCategory}>Today</Text>

          <View style={styles.notificationContainer}>
            <Image source={profile} style={styles.profileImg}/>
            <View style={styles.notificationContainer2} >
              <Text style={styles.notiHeader}>{notiHeader}</Text>
              <Text style={styles.noti}>{noti}</Text>
            </View>
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
        ...Platform.select({
            ios: {
                marginTop: 10,
            },
            android: {
                marginTop: 40,
            },
        })
    },
    headertext: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    headerBtnContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 40,
    },
    profileImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
  },
    
    
    notificationContainer: {
        width: '90%',
        margin: 12,
        padding: 10,
        backgroundColor: 'rgba(44, 93, 135, 0.6)',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
    notificationContainer2: {
        padding: 5,
        justifyContent: 'flex-start',
    },
    notiHeader:{
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    noti:{
        color: '#ffffff',
        fontSize: 12,
    },
    notiCategory:{
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginLeft: '15%',
      marginTop: 20,
    },
}
)