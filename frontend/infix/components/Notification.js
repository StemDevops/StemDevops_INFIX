import React from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';

const Notification = ({profile, notiHeader, notiContent}) => {

    return (
        <View style={styles.notificationContainer}>
            <Image source={profile} style={styles.profileImg}/>
            <View style={styles.notificationContainer2} >
                <Text style={styles.notiHeader}>{notiHeader}</Text>
                <Text style={styles.noti}>{notiContent}</Text>
            </View>
        </View>
    );
};
export default Notification;

const styles = StyleSheet.create({
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },

    notificationContainer: {
          width: '90%',
          margin: 12,
          padding: 10,
          backgroundColor: 'rgba(44, 93, 135, 0.6)',
          borderRadius: 25,
          flexDirection: 'row',
          justifyContent: 'flex-start',
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
      notificationContainer2: {
          padding: 5,
          justifyContent: 'flex-start',
      },
      notiHeader:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      noti:{
          color: '#ffffff',
          fontSize: 12,
      },
      notiCategory:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '15%',
        marginTop: 20,
      },
}
)