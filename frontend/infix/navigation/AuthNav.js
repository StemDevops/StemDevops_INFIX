import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function AuthNav({ navigation }) {

    const onLoginPressed = () => {
        navigation.navigate('MainNav')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[ styles.loginButton]}
                onPress={onLoginPressed}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },

    loginButton: {
      borderRadius: 45,
      backgroundColor: '#5880A2',
      height: 45,
      width: 280,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      //marginBottom: 25,
    },
    loginText: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold',
      //fontFamily: 'Ubuntu',
    },
  })