import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';

const CardHorizontal = ({ imageSource, title }) => {

    const [imgLoaded, setImgLoaded] = React.useState(false);

    return (
        <TouchableOpacity style={styles.card}>
            <Image source={imageSource} style={styles.image} onLoad={() => setImgLoaded(true)}/>
            {!imgLoaded &&
                <ActivityIndicator style={styles.loader}/>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        maxWidth: '100%',
        height: 150,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'rgba(0,0,0,0.38)',
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 20,

    },
    title: {
        position: 'absolute',
        bottom: '0%',
        height: '25%',
        backgroundColor: 'rgba(0,0,0,0.52)',
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingVertical: 7.5,
    },
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{translateX: -10}, {translateY: -10}],
    }
});

export default CardHorizontal;
