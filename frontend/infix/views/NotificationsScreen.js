import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground, Image, ScrollView, Platform} from 'react-native';
import React, {useState} from 'react';

import bg from "../assets/Notifications_bg.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import Notification from "../components/Notification";

export default NotificationsScreen = ({ navigation }) => {
  
  const gotoBack = () => {
    navigation.navigate('Home');
  }

  const [your_notifications, set_your_notifications] = useState([
    {id: 1, profile: require('../assets/profile2.jpeg'), notiHeader:'Susan Robert', notiContent: 'Susan Robert likes your memory on Moon001',},
    {id: 2, profile: require('../assets/card13.png'), notiHeader:'Offer', notiContent: '20% offer to Moon 2069',},
    {id: 3, profile: require('../assets/card3.png'), notiHeader:'Offer', notiContent: '20% offer to ZL 0043',},
  ])
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

          <ScrollView style={styles.scrollContainer}>
              {your_notifications.map((notifi) => (
                <Notification
                  key={notifi.id}
                  profile={notifi.profile}
                  notiHeader={notifi.notiHeader}
                  notiContent={notifi.notiContent}
                />
              ))}
            </ScrollView>

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
              elevation: 10,
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
    scrollContainer: {
      width: "100%",
      marginTop: 10,
    },
}
)