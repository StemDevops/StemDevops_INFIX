import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import InputTextField from "./InputTextField";
import React, {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const MultiTrip = ({navigation}) => {

    const [count, setCount] = useState(1);
    const [trip, setTrip] = useState([{from: null, to: null, date: null}]);

    const returnTopField = () => {
        return Array.from({ length: count }, (_, i) => (
            <View style={styles.dateContainer} key={i}>
                <InputTextField value="To" style={styles.dateInput}/>
                <InputTextField value="From" style={styles.dateInput}/>
                <InputTextField value="Date" style={styles.dateInput}/>
            </View>
        ));
    }

    const addTrip =()=>{
        if(count<4)
            setCount(count+1);
    }

    const removeTrip =()=>{
        if(count>1)
            setCount(count-1);
    }

    const gotoCheckout =()=>{
        navigation.navigate('Checkout');
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', paddingBottom: 200,}}>
            <View style={styles.inputContainer}>
                {returnTopField()}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
                <TouchableOpacity style={styles.addTripContainer} onPress={addTrip}>
                    <Ionicons name="add-circle-outline" size={32} color="#FFFFFFD3"/>
                    <Text style={styles.addTripText}>Add trip</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addTripContainer} onPress={removeTrip}>
                    <Ionicons name="add-circle-outline" size={32} color="#FFFFFFD3"/>
                    <Text style={styles.addTripText}>Remove trip</Text>
                </TouchableOpacity>
                </View>
                <InputTextField value="Travel mode"/>
                <InputTextField value="Ticket count"/>
            </View>
            <TouchableOpacity style={styles.checkoutContainer} onPress={gotoCheckout}>
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
        width: '32%',
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
    },
    addTripContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    addTripText:{
        fontSize: 16,
        color: '#fff',
        marginLeft: 10
    }

});
export default MultiTrip;