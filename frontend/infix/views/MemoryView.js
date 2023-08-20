import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Platform,
    ScrollView, Dimensions
} from "react-native";
import bg from "../assets/bg.png";
import offer1  from "../assets/offer1.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";
import profile from "../assets/card2.jpg";
import React, {useState} from "react";
import Carousel from 'react-native-snap-carousel';

const MemoryView = ({navigation}) => {

    const [entries, setEntries] = useState([
        {uri: offer1},
        {uri: offer1},
        {uri: offer1},
        {uri: offer1},
    ]);
    const gotoBack = () => {
        navigation.goBack();
    }
    const renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Image source={item.uri} style={styles.slideImg}/>
            </View>
        );
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
                        <Text style={styles.headertext}>Memory View</Text>
                    </View>
                </View>

                <View style={styles.detailSection}>
                    <Image source={profile} style={styles.profileImg}/>
                    <View style={styles.profileDetailsContainer}>
                        <View style={styles.profileDetails}>
                            <Ionicons name="pin-outline" size={25} color="white"/>
                            <Text style={styles.profileDetailsText}>Moon 101</Text>
                        </View>
                        <View style={styles.profileDetails}>
                            <Ionicons name="home-outline" size={25} color="white"/>
                            <Text style={styles.profileDetailsText}>Time Spent 05 months</Text>
                        </View>
                        <View style={styles.profileDetails}>
                            <Ionicons name="person-outline" size={25} color="white"/>
                            <Text style={styles.profileDetailsText}>Population 05 Million</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.memoryContainer}>
                    <Text style={styles.yourMemoriesHeading}>Media</Text>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={entries}
                        renderItem={renderItem}
                        sliderWidth={600}
                        itemWidth={400}
                        layout={'stack'}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.addMemoryBtn}>
                        <Text style={styles.addMemoryBtnText}>Add media</Text>
                        <Ionicons name="add-circle-outline" size={32} color="#fff"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider}></View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsText}>
                        The culture is primarily based on Trade and Religion. Holds historical monuments of Humans at
                        the stage of space explorations. </Text>
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
        marginRight: 40,
    }, detailSection: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff'
    },
    profileDetailsContainer: {
        width: '60%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
    },
    profileDetails: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5
    },
    profileDetailsText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
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
    memoryContainer: {
        width: '90%',
        height: 300,
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 0,
        marginTop: 20,
        justifyContent: 'space-between',
        borderRadius: 20,
    },
    memoryImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    memoryDetailsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: '60%',
        height: '100%',

    },
    memoryText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

    },
    addMemoryBtn: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 20
    },
    addMemoryBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10
    },
    yourMemoriesHeading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    memoryCard: {
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(137,169,192,0.7)',
        flexDirection: 'column',
    },
    slide: {
        width: 400,
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    slideImg: {
        width: 350,
        height: "100%",
        borderRadius: 20,
    },

});

export default MemoryView;