import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { Platform } from 'react-native';

import bg from "../assets/Notifications_bg.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import planetPic from "../assets/card2.jpg";

export default Tickets = ({ navigation }) => {
  const [travelTo, settravelTo] = useState('Moon 001');
  const [details, setdetails] = useState('Susan Robert likes your memory on Moon001');
  
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
              <Text style={styles.headertext}>Your Tickets</Text>
            </View>
          </View>
          
            <ScrollView style={styles.scrollContainer}>

                <View style={styles.ticketContainer}>

                    <Image source={planetPic} style={styles.planetPic}/>
                    <View style={styles.notificationContainer2} >
                        <Text style={styles.travelTo}>{travelTo}</Text>
                        <Text style={styles.noti}>{details}</Text>
                    </View>

                </View>

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
    scrollContainer: {
        width: "100%",
        marginTop: 10,
      },
      ticketContainer:{
        alignSelf: 'center',
        width: '90%',
        margin: 12,
        padding: 10,
        backgroundColor: 'rgba(44, 93, 135, 1)',
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
      planetPic:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
      },
      notificationContainer2: {
        padding: 5,
        marginRight: 10,
        justifyContent: 'flex-start',
    },
    
    travelTo:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      noti:{
          color: '#ffffff',
          fontSize: 12,
      },
      
}
)