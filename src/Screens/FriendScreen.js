import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
// import { Leaderboard, testData } from "./Leaderboard";
import { TouchableOpacity } from "react-native-gesture-handler";
import FriendSelector from "../Components/FriendSelector";

const testData = {
  title: "Leaderboard",
  rankings: [
    {
      rank: "1.",
      name: "Izzy",
      score: "30000",
    },
    {
      rank: "2.",
      name: "Tri",
      score: "29900",
    },
    {
      rank: "3.",
      name: "Shourya",
      score: "28760",
    },
    {
      rank: "4.",
      name: "Jason",
      score: "24300",
    },
    {
      rank: "5.",
      name: "Ana",
      score: "24290",
    },
    {
      rank: "6.",
      name: "Megan",
      score: "22760",
    },
  ],
};

// const FriendSelector = ({ events }) => {
//   const [selected, setselected] = useState([]);

//   <View style={styles.challengeList}>
//     {events.map((event) => (
//       <Friend
//         key={event.id}
//         event={event}
//         isSelected={selected.includes(course)}
//       />
//     ))}
//   </View>;
// };

const Friend = ({
  event,
  // , isSelected, select
}) => (
  <TouchableOpacity
    style={styles.challengeButton}
    // style={styles[isSelected ? "friendButtonSelected" : "friendButton"]}
    // onPress={() => {
    //   select(event);
    // }}
    // onPress={() => this.props.navigation.navigate(Leaderboard)}
  >
    <Text style={styles.challengeText}>{` ${event.name} `}</Text>
  </TouchableOpacity>
);

const FriendList = ({ events }) => (
  <ScrollView>
    {/* <FriendSelector events={events} /> */}
    <View style={styles.challengeList}>
      {events.map((event) => (
        <Friend
          key={event.id}
          event={event}
          // isSelected={selected.includes(event)}
        />
      ))}
    </View>
  </ScrollView>
);

// const view = (event) => {
//   navigation.navigate("Leaderboard", { event });
// };

const FriendScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHeader}>Choose Friends to Challenge</Text>
      <FriendList events={testData.rankings} />
      <TouchableOpacity>
        <View style={styles.sendButton}>
          <Text>Send</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    // paddingTop: 10,
  },
  textHeader: {
    marginTop: 20,
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "bold",
  },
  challengeList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  challengeButton: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: 20,
    // padding: 10,
    width: 150,
    backgroundColor: "#d8d8d8",
  },
  sendButton: {
    margin: 15,
    width: 320,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cdebf9",
    fontSize: 24,
  },
  challengeText: {
    color: "#333",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default FriendScreen;
