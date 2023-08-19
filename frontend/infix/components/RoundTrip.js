import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import InputTextField from "./InputTextField";
import React, {useState} from "react";

const RoundTrip = () => {

    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [arrivalDate, setArrivalDate] =useState("")
    const [travelMode, setTravelMode] = useState("Spaceship");
    const [ticketCount, setTicketCount] = useState(1);

    return (
        <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', paddingBottom: 200,}}>
            <View style={styles.inputContainer}>
                <InputTextField value="Departure"/>
                <InputTextField value="Destination"/>
                <View style={styles.dateContainer}>
                        <InputTextField value="Departure date" style={styles.dateInput}/>
                        <InputTextField value="Arrival date" style={styles.dateInput}/>
                </View>
                <InputTextField value="Travel mode"/>
                <InputTextField value="Ticket count"/>
            </View>
            <TouchableOpacity style={styles.checkoutContainer}>
                <Text style={styles.checkoutText}>
                    Checkout
                </Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>
                    Lunar days can be scorching hot, while nights are freezing cold. Radiation from the Sun and cosmic
                    rays is a constant concern.

                    To combat these challenges, colony habitats would be equipped with advanced climate control systems,
                    insulation, and radiation shielding. Renewable energy sources such as solar panels and possibly even
                    harnessing lunar resources for energy generation would be crucial. The thin lunar atmosphere might
                    be harnessed for limited agricultural purposes, using controlled hydroponic or aeroponic systems.
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
    dateContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        justifyContent: 'space-between',
        
    },
    dateInput:{
        width: '48%',
        marginHorizontal: 0,
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
    }

});
export default RoundTrip;