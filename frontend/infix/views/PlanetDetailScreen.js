import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { Platform } from 'react-native';

import bg from "../assets/Notifications_bg.png";
import planetProfile from "../assets/card2.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";

export default PlanetDetailsScreen = ({ navigation }) => {
    
    const [planetName, setPlanetName] = useState('Moon 001');

    const gotoTravel = () => {
        navigation.navigate('Travel');
    }

    const [planet_photoes, set_planet_photoes] = useState([
        {id: 1, image: require('../assets/card1.png'),},
        {id: 2, image: require('../assets/card2.jpg'),},
        {id: 3, image: require('../assets/card3.png'),},
        {id: 4, image: require('../assets/card4.png'),},
        {id: 5, image: require('../assets/card5.png'),},
        {id: 6, image: require('../assets/card6.png'),},
    ])
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
                        <Text style={styles.headertextwelcome}>{planetName}</Text>
                    </View>
                </View>

                <View>
                    <Image source={planetProfile} style={styles.profileImg}/>
                </View>

                <TouchableOpacity style={styles.bookTrip} onPress={gotoTravel}>
                    <Text style={styles.Text1}>Book Now</Text>
                </TouchableOpacity>

                <View style={styles.hscroll}>
                    <ScrollView horizontal={true} contentContainerStyle={styles.hscrollContainer}>
                        {planet_photoes ? planet_photoes.map((item) => {
                                    return <Card imageSource={item.image}
                                                 style={styles.card} key={item.id}/>
                                }) : null}
                    </ScrollView>
                </View>

                <View>
                    
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
        marginBottom: 20,
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
        marginLeft: '30%',
    },
    headerBtnContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    profileImg: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: "1%",
        alignSelf: 'center',
    },
    bookTrip:{
        alignSelf: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginEnd:'10%',
        backgroundColor: '#5880A2',
        borderRadius: 45,
        alignSelf: 'flex-end',
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
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "bold",

    },
    hscroll: {
        width: "100%",
        marginTop: 10,
        paddingVertical: 10,
      },
    hscrollContainer: {
        paddingBottom: 20,
      },
    

}
)