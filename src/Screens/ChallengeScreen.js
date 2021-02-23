// import React, { useState } from "react";
// import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import ProfileList from "../Components/ProfileList";

// const Banner = ({ title }) => <Text style={styles.bannerStyle}>{title}</Text>;

// const ChallengeScreen = () => {
//   const [choose, setChoose] = useState({ title: "Challenge", profiles: [] });
//   return (
//     <SafeAreaView style={styles.container}>
//       <Banner title={choose.title} />
//       <ProfileList profiles={choose.profiles} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   bannerStyle: {
//     color: "#888",
//     fontSize: 32,
//   },
// });
// export default ChallengeScreen;

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const scoreData = {
  title: "Challenge",
  profiles: [
    {
      name: "Thomas Shelby",
      handle: "@JoshWComeau",
      content: "One of my favourite recipes!",
      points: 56,
      green_score: 334,
    },
    {
      name: "Arthur",
      handle: "@JoshWComeau",
      content: "Vegan food is best",
      points: 77,
      green_score: 777,
    },
    {
      name: "John",
      handle: "@JoshWComeau",
      content: "I got this",
      points: 55,
      green_score: 123,
    },
    {
      name: "Grace",
      handle: "@gracesecret",
      content: "One of my favourite recipes!",
      points: 24,
      green_score: 234,
    },
    {
      name: "Lizzie",
      handle: "@JoshWComeau",
      content: "One of my favourite recipes!",
      points: 67,
      green_score: 658,
    },
  ],
};

const Banner = ({ title }) => <Text style={styles.bannerStyle}>{title}</Text>;
const Profile = ({ profile }) => (
  <TouchableOpacity style={styles.profileButton}>
    <Text style={styles.profileText}>
      {`${profile.name}               ${profile.points}`}
    </Text>
  </TouchableOpacity>
);

const ProfileList = ({ profiles }) => (
  <ScrollView>
    <View style={styles.profileList}>
      {profiles.map((profile) => (
        <Profile key={profile.title} profile={profile} />
      ))}
    </View>
  </ScrollView>
);

export default function ChallengeScreen() {
  const [value, onChangeText] = React.useState("Enter Challenge Name:");
  return (
    <SafeAreaView style={styles.container}>
      <Banner title={scoreData.title} />
      <TextInput
        style={styles.inputBox}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />{" "}
      <ProfileList profiles={scoreData.profiles} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerStyle: {
    color: "#000000",
    fontSize: 40,
    paddingTop: 80,
  },
  profileList: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileButton: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    height: 60,
    minWidth: 350,
    maxWidth: 350,
    backgroundColor: "#fadd79",
  },
  profileText: {
    color: "#000000",
    fontSize: 15,
    textAlign: "center",
  },
  inputBox: {
    borderRadius: 5,
    backgroundColor: "#e9f6a6",
    height: 40,
    margin: 20,
    minWidth: 350,
    maxWidth: 350,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    fontSize: 15,
  },
});