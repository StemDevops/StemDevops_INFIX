import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native"
import InputTextField from "./InputTextField"
import React, { useEffect, useState } from "react"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { TextInput } from "react-native-gesture-handler"
import ModalSelector from "react-native-modal-selector"
import Axios from "axios"

import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Button} from "react-native";
import InputTextField from "./InputTextField";
import React, {useState} from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInput } from "react-native-gesture-handler";
import ModalSelector from 'react-native-modal-selector'

const SingleTrip = ({navigation}) => {

    const [departure, setDeparture] = useState(null);
    const [destination, setDestination] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const [travelMode, setTravelMode] = useState(null);
    const [ticketCount, setTicketCount] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [travelModes, setTravelModes] = useState([
        {key: 0,label: 'Space Bus',},
        {key: 1,label: 'Helicarrier',},
        {key: 2,label: 'Hyper Drive',},

        ]);
    const [tickets, setTickets] = useState([
        {key: 0,label: 1,},
        {key: 1,label: 2,},
        {key: 2,label: 3,},
        {key: 3,label: 4,},
        {key: 4,label: 5,},
        {key: 5,label: 6,},

        ]);


    const gotoCheckout =()=>{
        if(departureDate==null || departure==null || destination==null || travelMode==null || ticketCount==null){
            alert("Please fill all the fields");
            return;
        }

        // navigation.navigate('Checkout');
        console.log({date: departureDate, departure: departure, destination: destination, travelMode: travelMode, ticketCount: ticketCount});

    }

    // navigation.navigate('Checkout');
    console.log({
      date: departureDate,
      departure: departure,
      destination: destination,
      travelMode: travelMode,
      ticketCount: ticketCount,
    })
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date)

    setDepartureDate(date.toLocaleDateString())
    hideDatePicker()
  }

  const hideArrDatePicker = () => {
    setArrDatePickerVisibility(false)
  }

  const handleArrConfirm = (date) => {
    console.log("A date has been picked: ", date)
    setArrivalDate(date.toLocaleDateString())
    hideArrDatePicker()
  }

  useEffect(() => {
    const bookingData = { departure, destination, departureDate }

    if (departure !== null && destination !== null && departureDate !== null) {
      Axios.post("http://192.168.8.165:3002/book/booking", bookingData)
        .then((response) => {
          // Handle the response from the backend if needed
          if (response.data.approved === true) {
            console.log("Data fetched:")
            login(response.data.username)
          } else {
            console.log("Data did not fetch")
          }
        })
        .catch((error) => {
          // Handle errors if the login fails
          console.error("Login error:", error)
        })
    }
    //Runs only on the first render
  }, [departure, destination])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 200 }}
    >
      <View style={styles.inputContainer}>
        <InputTextField
          placeholder="Departure"
          action={setDeparture}
          value={departure}
        />
        <InputTextField
          placeholder="Destination"
          action={setDestination}
          value={destination}
        />
        <TouchableOpacity
          style={styles.inputContainer2}
          onPress={showDatePicker}
        >
          <TextInput
            placeholderTextColor={"#fff"}
            pointerEvents="none"
            style={styles.input}
            selectTextOnFocus={false}
            editable={false}
            placeholder="Departure Date"
            value={departureDate}
          />
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          isDarkModeEnabled={true}
          minimumDate={new Date()}
        />

        {/* <DateTimePickerModal
          isVisible={isArrDatePickerVisible}
          mode="date"
          onConfirm={handleArrConfirm}
          onCancel={hideArrDatePicker}
          isDarkModeEnabled={true}
          minimumDate={new Date()}
        /> */}
        {/* <InputTextField placeholder="Travel mode"/>
                <InputTextField placeholder="Ticket count"/> */}
        <ModalSelector
          style={styles.inputContainer2}
          data={travelModes}
          initValue="Travel Mode"
          initValueTextStyle={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
          }}
          selectStyle={{ borderColor: "transparent" }}
          selectTextStyle={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}
          onChange={(option) => {
            setTravelMode(option.label)
          }}
        />
        <ModalSelector
          style={styles.inputContainer2}
          data={tickets}
          initValue="Number of tickets"
          initValueTextStyle={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
          }}
          selectStyle={{ borderColor: "transparent" }}
          selectTextStyle={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}
          onChange={(option) => {
            setTicketCount(option.label)
          }}
        />
      </View>
      <TouchableOpacity style={styles.checkoutContainer} onPress={gotoCheckout}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
      <View style={styles.divider}></View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
          Lunar days can be scorching hot, while nights are freezing cold.
          Radiation from the Sun and cosmic rays is a constant concern. To
          combat these challenges, colony habitats would be equipped with
          advanced climate control systems, insulation, and radiation shielding.
          Renewable energy sources such as solar panels and possibly even
          harnessing lunar resources for energy generation would be crucial. The
          thin lunar atmosphere might be harnessed for limited agricultural
          purposes, using controlled hydroponic or aeroponic systems.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',

    },
    inputContainer: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,

    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(219,233,245,0.7)',
        marginTop: 30
    },
    detailsContainer: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'rgba(137,169,192,0.7)',
        borderRadius: 10,
        padding: 20,
        borderWidth: 2,
        borderColor: 'rgba(0,43,72,0.7)',
        minHeight: 200,
        overflow: 'scroll'
    },
    detailsText: {
        color: '#fff',
        fontSize: 15,
    },
    checkoutContainer: {
        width: '60%',
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 10,
        backgroundColor: '#003A6B',
        alignItems: "center",
        justifyContent: "center"
    },
    checkoutText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",

  },
})
export default SingleTrip
