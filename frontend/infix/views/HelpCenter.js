import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { Platform } from 'react-native';

import bg from "../assets/HelpCenter_bg.png";
import Ionicons from "@expo/vector-icons/Ionicons";

export default HelpCenterScreen = ({ navigation }) => {
  
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
            
            <Text style={styles.headertext}>Help Center</Text>

          </View>
        
        <TouchableOpacity style={styles.itemContainer} >
            <View style={styles.itemContainer2}>
                <Ionicons name="help-circle-outline" size={40} color="white" style={{ paddingRight: 15 }} />
                <Text style={styles.itemContent}>FAQ </Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={40} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer} >
            <View style={styles.itemContainer2}>
                <Ionicons name="chatbubble-ellipses-outline" size={40} color="white" style={{ paddingRight: 15 }} />
                <Text style={styles.itemContent}>Live chat </Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={40} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer} >
            <View style={styles.itemContainer2}>
                <Ionicons name="mail-outline" size={40} color="white" style={{ paddingRight: 15 }} />
                <Text style={styles.itemContent}>E mail </Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={40} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer} >
            <View style={styles.itemContainer2}>
                <Ionicons name="call-outline" size={40} color="white" style={{ paddingRight: 15 }} />
                <Text style={styles.itemContent}>Call us </Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={40} color="white" />
        </TouchableOpacity>

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
    },
    header: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 50,
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
        marginRight: 50,
    },

    itemContainer: {
        width: '90%',
        margin: 12,
        padding: 20,
        backgroundColor: 'rgba(219, 233, 245, 0.5)',
        borderRadius: 25,
        flexDirection: 'row',
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
    itemContainer2:{
        flexDirection: 'row',
    },
    itemContent:{
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
}
)