import {View, Text, TouchableOpacity,LayoutAnimation, SafeAreaView, StyleSheet, ImageBackground, Image, ScrollView, TouchableWithoutFeedback, Animated, Platform} from 'react-native';
import React, {useState} from 'react';

import bg from "../assets/Notifications_bg.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import planetPic from "../assets/card2.jpg";
import TicketCard from '../components/TicketCard';

const Tickets = ({ navigation }) => {

  const [your_tickets, set_your_tickets] = useState([
    {id: 1, travelTo: "Moon 0001", travelFrom:'MZ 0054', ticketCount: '3',shipType: 'Air Bus',ticketID: '2901-9493-2322',date:'2166-02-17', imageSource: require('../assets/card11.png')},
    {id: 2, travelTo: "Mars", travelFrom:'Earth', ticketCount: '3',shipType: 'Air Bus',ticketID: '2901-9493-2322',date:'2166-02-17', imageSource: require('../assets/card13.png')},
    {id: 3, travelTo: "Moon 0001", travelFrom:'ZL 0043', ticketCount: '3',shipType: 'Air Bus',ticketID: '2901-9493-2322',date:'2166-02-17', imageSource: require('../assets/card11.png')},
    {id: 4, travelTo: "Mars", travelFrom:'MZ 0054', ticketCount: '3',shipType: 'Air Bus',ticketID: '2901-9493-2322',date:'2166-02-17', imageSource: require('../assets/card6.png')},
    {id: 5, travelTo: "Earth", travelFrom:'ZL 0043', ticketCount: '3',shipType: 'Air Bus',ticketID: '2901-9493-2322',date:'2166-02-17', imageSource: require('../assets/card2.jpg')},
    {id: 6, travelTo: "Moon 0001", travelFrom:'Mars', ticketCount: '3',shipType: 'Air Bus',ticketID: '2901-9493-2322',date:'2166-02-17', imageSource: require('../assets/card11.png')},
  ])
  const gotoBack = () => {
    navigation.navigate('HomeScreen');
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
              {your_tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  travelTo={ticket.travelTo}
                  travelFrom={ticket.travelFrom}
                  ticketCount={ticket.ticketCount}
                  shipType={ticket.shipType}
                  ticketID={ticket.ticketID}
                  date={ticket.date}
                  imageSource={ticket.imageSource}
                />
              ))}
            </ScrollView>

        </SafeAreaView>
      </ImageBackground>
    )
  }
export default Tickets;

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
}
)