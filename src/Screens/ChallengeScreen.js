import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { Card } from "react-native-elements";
import FriendScreen from "./FriendScreen";
import MapScreen from "./MapScreen";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

const challenge_data = {
  title: "Set of Challenges",
  events: [
    {
      id: "1",
      title: "Daily Trek Challenge",
    },
    {
      id: "2",
      title: "10,000 Steps Challenge",
    },
    {
      id: "3",
      title: "BEYOND your limits Challenge",
    },
    {
      id: "4",
      title: "The Impossible Challenge",
    },
    {
      id: "5",
      title: "Nike Run Club Challenge",
    },
    {
      id: "6",
      title: "The Wildcat Challenge",
    },
    {
      id: "7",
      title: "BEYOND your limits Challenge",
    },
    {
      id: "8",
      title: "The Impossible Challenge",
    },
    {
      id: "9",
      title: "Daily Trek Challenge",
    },
    {
      id: "10",
      title: "10,000 Steps Challenge",
    },
    {
      id: "11",
      title: "BEYOND your limits Challenge",
    },
    {
      id: "12",
      title: "The Impossible Challenge",
    },
  ],
};

// const TextBox = () => {};

const ChallengeScreen = ({ navigation }) => {
  const Challenge = ({ event }) => (
    <TouchableOpacity
      style={styles.challengeButton}
      onPress={() => navigation.navigate("SelectFriend")}
    >
      <Text style={styles.challengeText}>{` ${event.title} `}</Text>
    </TouchableOpacity>
  );

  const ChallengeList = ({ events }) => (
    <ScrollView>
      <View style={styles.challengeList}>
        {events.map((event) => (
          <Challenge key={event.id} event={event} />
        ))}
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHeader}>Your Challenges</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.inputText}>Enter Custom Challenge</TextInput>
      </View>
      <ChallengeList events={challenge_data.events} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 10,
  },
  textHeader: {
    fontSize: 32,
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: 20,
    paddingBottom: 10,
  },
  inputBox: {
    margin: 25,
    width: 360,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cdebf9",
    fontSize: 24,
  },
  inputText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#808080",
    opacity: 0.8,
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
    width: 160,
    backgroundColor: "#B4EEB4",
  },
  challengeText: {
    color: "#333",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  touchBox: {
    opacity: 100,
  },
});

export default ChallengeScreen;
