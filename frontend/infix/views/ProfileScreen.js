import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native"
import React from "react"
import { authContext } from "../context/AuthContext"
import bg from "../assets/home_bg.png"
import profile from "../assets/profile.png"
import Ionicons from "@expo/vector-icons/Ionicons"
import Card from "../components/card"

import earth from "../assets/card2.jpg"
import card1 from "../assets/card.png"
import card2 from "../assets/card3.png"
import card3 from "../assets/card4.png"
import card4 from "../assets/card13.png"
import card5 from "../assets/card6.png"
import card6 from "../assets/card1.png"
import card7 from "../assets/card11.png"


const ProfileScreen = ({ navigation }) => {
  const {  logout, user } = React.useContext(authContext)
  
  const onLogoutPressed = () => {
    logout()
  }

    const gotoNotifications = () => {
        navigation.navigate('Notifications');
    }
    const gotoSettings = () => {
        navigation.navigate('Settings');
    }

    const gotoMemoryView = () => {
        console.log("gotoMemoryView");
        navigation.navigate('MemoryView');
    }
    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: "center", paddingBottom: 50}}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headertextwelcome}>{user}</Text>
                        </View>
                        <View style={styles.headerBtnContainer}>
                            <TouchableOpacity onPress={gotoNotifications}>
                                <Ionicons name="heart-outline" size={32} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={gotoSettings}>
                                <Ionicons name="settings-outline" size={32} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.detailSection}>
                        <Image source={profile} style={styles.profileImg}/>
                        <View style={styles.profileDetailsContainer}>
                            <View style={styles.profileDetails}>
                                <Ionicons name="pricetag-outline" size={25} color="white"/>
                                <Text style={styles.profileDetailsText}>101 Memories</Text>
                            </View>
                            <View style={styles.profileDetails}>
                                <Ionicons name="medal-outline" size={25} color="white"/>
                                <Text style={styles.profileDetailsText}>58 Points</Text>
                            </View>
                        </View>
                    </View>


          <View style={styles.memoryContainer}>
            <Image source={card7} style={styles.memoryImage} />
            <View style={styles.memoryDetailsContainer}>
              <Text style={styles.memoryText}>Current Memory</Text>
              <Text style={styles.memoryText}>Jupiter</Text>
            </View>
            <Ionicons name="caret-forward-outline" size={40} color="#003A6B" />
          </View>
          <View>
            <TouchableOpacity style={styles.addMemoryBtn}>
              <Text style={styles.addMemoryBtnText}>Add memory</Text>
              <Ionicons name="add-circle-outline" size={32} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.divider}></View>

          <View style={styles.youMemoriesContainer}>
            <Text style={styles.yourMemoriesHeading}>Your Memories</Text>
            <View style={styles.yourMemories}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={{ paddingHorizontal: 10 }}
              >
                <View>
                  <TouchableOpacity style={styles.yourMemoriesCard}>
                    <Card title="Saturn" imageSource={card4} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.yourMemoriesCard}>
                    <Card title="Moon 0034" imageSource={card1} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.yourMemoriesCard}>
                    <Card title="Space X99" imageSource={card5} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.yourMemoriesCard}>
                    <Card title="Moon 2069" imageSource={card6} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.yourMemoriesCard}>
                    <Card title="ZL 0043" imageSource={card2} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.yourMemoriesCard}>
                    <Card title="Earth" imageSource={card3} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.yourMemoriesCard}>
                    <Card title="Jupiter" imageSource={card7} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.yourMemoriesCard}>
                    <Card title="Mars" imageSource={earth} />
                  </TouchableOpacity>
                </View>
              </ScrollView>
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
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#41729d",
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headertextwelcome: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  headertext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerBtnContainer: {
    width: "22%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  detailSection: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileDetailsContainer: {
    width: "60%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  profileDetails: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  profileDetailsText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(219,233,245,0.7)",
    marginTop: 30,
  },
  memoryContainer: {
    width: "90%",
    height: 100,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
    flexDirection: "row",
    backgroundColor: "rgba(219,233,245,0.5)",
    justifyContent: "space-between",
    borderRadius: 20,
  },
  memoryImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  memoryDetailsContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "60%",
    height: "100%",
  },
  memoryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  addMemoryBtn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 20,
  },
  addMemoryBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  youMemoriesContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  yourMemoriesHeading: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
  },
  yourMemories: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yourMemoriesCard: {
    marginVertical: 10,
  },
  logoutBtnContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  logoutBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutBtn: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#941111",
    paddingVertical: 15,
    borderRadius: 10,
  },
})
export default ProfileScreen
