import React, {useState} from 'react';
import {View, Text, LayoutAnimation, StyleSheet, Image, TouchableWithoutFeedback, Animated, Platform, ImageBackground} from 'react-native';
import logo from '../assets/Logo.png';
import ticketBackground from '../assets/TicketCard_bg.png';
const TicketCard = ({travelTo, travelFrom, ticketCount,shipType,ticketID,date, imageSource }) => {
    const [expanded, setExpanded] = useState(false);
    const ticketContainerHeight = (expanded ? 230 : 85);
    const picSize = (expanded ? '40%' : '20%');

    const handleTicketContainerPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setExpanded(!expanded);
    };
    return (
        <TouchableWithoutFeedback onPress={handleTicketContainerPress}>
                <Animated.View style={[styles.ticketContainer, { height: ticketContainerHeight }]}>
                    {!expanded && <View style={styles.ticketContainer2}>
                      <Image source={imageSource} style={[styles.planetPic, { width: picSize ,height: picSize }]} />
                      
                      <View style={styles.notificationContainer2}>
                        {expanded && <Text style={styles.travelContent}>{'From : '+travelFrom}</Text>}
                        <Text style={styles.travelContent}>{'To : '+travelTo}</Text>
                        <Text style={styles.travelContent}>{date}</Text>
                      </View>
                    </View>}
                    <View style={styles.notificationContainer2}>
                    {expanded && 
                    <View>
                        <View style={styles.cont1}>
                            <View style={styles.cont2}>
                                <Text style={styles.text1}>{'From : '}</Text>
                                <Text style={styles.text2}>{'\t'+travelFrom}</Text>
                            </View>  
                            <View style={styles.cont2}>
                                <Text style={styles.text1}>{'To : '}</Text>
                                <Text style={styles.text2}>{'\t'+travelTo}</Text>
                            </View>  
                        </View>

                        <View style={styles.cont1}>
                            <View style={styles.cont2}>
                                <Text style={styles.text1}>{'Depature :'}</Text>
                                <Text style={styles.text2}>{'\t'+date}</Text>
                            </View>  
                            <View style={styles.cont2}>
                                <Text style={styles.text1}>{'Ship Type :'}</Text>
                                <Text style={styles.text2}>{'\t'+shipType}</Text>
                            </View>  
                        </View>

                        <View style={styles.cont1}>
                            <View style={styles.cont2}>
                                <View>
                                <Text style={styles.text1}>{'Ticket Count :'}</Text>
                                <Text style={styles.text2}>{'\t'+ticketCount}</Text>
                                </View>
                                <View>
                                <Text style={styles.text1}>{'Ticket ID :'}</Text>
                                <Text style={styles.text2}>{ticketID}</Text>
                                </View>
                            </View>  
                            <View style={styles.cont2}>
                                <Image source={logo} style={styles.logo} />

                            </View>  
                        </View>

                    </View>
                    }
                    </View>
                </Animated.View>
              </TouchableWithoutFeedback>
    );
};
export default TicketCard;

const styles = StyleSheet.create({
    cont1:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: "space-between",

    },
    cont2:{
        width:'50%',
        paddingVertical:5,
    },
    text1:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text2:{
        color: '#ffffff',
        fontSize: 18,
    },
    logo:{
        height:100,
        aspectRatio: 1,
        alignSelf:'center',
    },
      ticketContainer2:{
        flexDirection: 'row',

      },
      ticketContainer:{
        alignSelf: 'center',
        width: '90%',
        borderRadius: 25,
        padding:10,
        margin: 12,

        backgroundColor: 'rgba(44, 93, 135, 1)',
        justifyContent: 'center',
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
        borderRadius: 25,
        marginRight: 15,
        aspectRatio: 1,
      },
      notificationContainer2: {
        padding: 5,
        marginRight: 10,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    
    travelContent:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
      },      
}
)