import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {View, StyleSheet, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, Image} from "react-native";
import Card from "../../components/card";
import CardHorizontal from "../../components/cardHorizontal";
import bg from '../../assets/home_bg.png';
import cardimg from '../../assets/offer1.jpg';
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = ({navigation}) => {

    const gotoTravel = () => {
        navigation.navigate('Travel');
    }
    const gotoSearch = () => {
        navigation.navigate('World Search');
    }
    const [pop_destinations, set_pop_destinations] = useState([
        {id: 1, title: "Moon", image: require('../../assets/card1.png'),},
        {id: 2, title: "Jupiter", image: require('../../assets/card2.jpg'),},
        {id: 3, title: "Aurora", image: require('../../assets/card3.png'),},
        {id: 4, title: "Venus", image: require('../../assets/card4.png'),},
        {id: 5, title: "Uranus", image: require('../../assets/card5.png'),},
        {id: 6, title: "Venus Station", image: require('../../assets/card6.png'),},
    ])

    const [top_stories, set_top_stories] = useState([
        {id: 1, title: "Earth", image: require('../../assets/card10.png'),},
        {id: 2, title: "Jupiter", image: require('../../assets/card11.png'),},
        {id: 3, title: "Saturn", image: require('../../assets/card13.png'),},
        {id: 4, title: "Venus", image: require('../../assets/card10.png'),},
    ])

    const [latest_offers, set_latest_offers] = useState([
        {id: 1, image: require('../../assets/offer1.jpg'),},
        {id: 2, image: require('../../assets/offer4.png'),},
        {id: 3, image: require('../../assets/offer3.jpg'),},
    ])


    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>

                <View style={styles.header}>
                    <View><Text style={styles.headertextwelcome}>Welcome</Text>
                        <Text style={styles.headertext}>Josh Peter</Text>
                    </View>
                    <TouchableOpacity >
                        <Ionicons name="chatbubble-ellipses-outline" size={32} color="white"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.buttons} onPress={gotoTravel}>
                        <Ionicons name="rocket-outline" size={32} color="#003A6B"/>
                        <Text style={styles.buttonsText}>Flights</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={gotoSearch}>
                        <Ionicons name="search-outline" size={32} color="#003A6B"/>
                        <Text style={styles.buttonsText}>Search</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.vscroll}>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeading}>Popular destinations</Text>
                        <View style={styles.hscroll}>
                            <ScrollView horizontal={true} contentContainerStyle={styles.hscrollContainer}>
                                {pop_destinations ? pop_destinations.map((item) => {
                                    return <Card imageSource={item.image} title={item.title}
                                                 style={styles.card} key={item.id}/>
                                }) : null}
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeading}>Top stories</Text>
                        <View style={styles.hscroll}>
                            <ScrollView horizontal={true} contentContainerStyle={styles.hscrollContainer}>
                                {top_stories ? top_stories.map((item) => {
                                    return <Card imageSource={item.image} title={item.title}
                                                 style={styles.card} key={item.id}/>
                                }) : null}
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeading}>Latest Offers</Text>
                        <View style={styles.hscroll}>

                            {latest_offers ? latest_offers.map((item) => {
                                return <CardHorizontal imageSource={item.image} title={item.title}
                                             style={styles.cardHorizontal} key={item.id}/>
                            }) : null}
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
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    headertextwelcome: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    headertext: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    buttons: {
        width: '35%',
        height: '45%',
        backgroundColor: '#a9b6c4',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#ffffff',

    },
    buttonsText: {
        color: '#003A6B',
        fontSize: 15,
        fontWeight: 'bold',

    },
    vscroll: {
        width: '100%',
        marginTop: 10,
        marginBottom: 30,
    },
    section: {
        width: '100%',
    },
    sectionHeading: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    hscroll: {
        width: '100%',
        marginTop: 10,
        paddingVertical: 10,
    },
    card: {
        marginHorizontal: 20,
    }, cardHorizontal: {
        marginVertical: 20,
    },
    hscrollContainer: {
        paddingBottom: 20,
    }
});

export default Home;