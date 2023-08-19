import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { Platform } from 'react-native';

import Ionicons from "@expo/vector-icons/Ionicons";

export default CheckoutCard = ({ navigation }) => {
  const [total, setTotal] = useState('353');
  const [cardName, setCardName] = useState('-----');

    return (
      <View>
        <TouchableOpacity style={styles.itemContainer} >
              <Ionicons name="add-circle-outline" size={30} color="white" style={{ paddingRight: 10 }} />
              <Text style={styles.itemContent}>Add new card </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.select}>
                <Text style={[styles.Text2, { marginLeft: 10 }]}>Select your card</Text>
                <View style={styles.box2}>
                    <Text style={styles.Text2}>{cardName+'  '} </Text>
                    <Ionicons name="chevron-down" size={20} color="white" />
                </View>
            </TouchableOpacity>

        <View style={styles.box1}>                
                <View style={styles.box2}>
                    <Text style={styles.Text1}>Total </Text>
                    <Text style={styles.Text1}>{'$ '+total} </Text>
                </View>

                <TouchableOpacity style={styles.box3}>
                    <Text style={styles.Text2}>Pay Now</Text>
                </TouchableOpacity>
        </View>
          
      </View>
      
    )
  }

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginLeft: 20,
    flexDirection: 'row',
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
  itemContent:{
      color: '#ffffff',
      fontSize: 16,
      alignSelf: 'center',
  },
  
    box1: {
  width: '90%',
  margin: 20,
  marginTop: '90%',
  padding: 20,
  backgroundColor: 'rgba(44, 93, 135, 0.8)',
  borderRadius: 10,
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    android: {
      //elevation: 10,
    },
  }),
},

box2:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
    box3:{
        backgroundColor: 'rgba(0, 58, 107, 0.8)',
        width: '80%',
        marginTop: 20,
        padding: 20,
        borderRadius: 45,
        alignSelf: 'center',
        alignItems: 'center',
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
    Text1:{
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    Text2:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

    select:{
      width: '80%',
      margin: 20,
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      backgroundColor: 'rgba(131, 163, 190, 0.8)',
      borderRadius: 10,
      ...Platform.select({
          ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          },
          android: {
          //elevation: 10,
          },
      }),
  },
    box1: {
      width: '90%',
      margin: 20,
    marginTop: '75%',
      padding: 20,
      backgroundColor: 'rgba(44, 93, 135, 0.8)',
      borderRadius: 10,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        },
        android: {
          //elevation: 10,
        },
      }),
    },
    
        box2:{
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        box3:{
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 58, 107, 0.8)',
            width: '80%',
            marginTop: 20,
            padding: 20,
            borderRadius: 45,
            alignSelf: 'center',
            alignItems: 'center',
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
        Text1:{
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 'bold',
            marginVertical: 5,
        },
        Text2:{
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 'bold',
        },
}
)