import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const scoreData = {
  title: "Challenge",
  profiles: [
    {
      name: "Healthy John",
      handle: "@JoshWComeau",
      content: "One of my favourite recipes!",
      points: 56,
      green_score: 334,
    },
    {
      name: "Healthy John",
      handle: "@JoshWComeau",
      content: "Vegan food is best",
      points: 77,
      green_score: 777,
    },
    {
      name: "Randy Ortan",
      handle: "@JoshWComeau",
      content: "I got this",
      points: 55,
      green_score: 123,
    },
    {
      name: "Healthy John",
      handle: "@JoshWComeau",
      content: "One of my favourite recipes!",
      points: 24,
      green_score: 234,
    },
    {
      name: "Healthy John",
      handle: "@JoshWComeau",
      content: "One of my favourite recipes!",
      points: 67,
      green_score: 658,
    },
  ],
};

const Profile = ({ profile, isDisabled, isSelected, select }) => (
  <TouchableOpacity
  // style={
  //   styles[
  //     isSelected
  //       ? "profileButtonSelected"
  //       : isDisabled
  //       ? "profileButtonDisabled"
  //       : "profileButton"
  //   ]
  // }
  // onPress={() => {
  //   if (!isDisabled) select(profile);
  // }}
  >
    <Text style={styles.profileText}>
      {`${scoreData.name}    ${scoreData.points}`}
    </Text>
  </TouchableOpacity>
);

const profileButtonSelected = {
  flex: 1,
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  margin: 10,
  height: 60,
  padding: 10,
  minWidth: 90,
  maxWidth: 90,
};

const styles = StyleSheet.create({
  profileButton: {
    ...profileButtonSelected,
    backgroundColor: "#66b0ff",
  },
  profileText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  profileButtonSelected: {
    ...profileButtonSelected,
    backgroundColor: "#004a99",
  },
  profileButtonDisabled: {
    ...profileButtonSelected,
    backgroundColor: "#d3d3d3",
  },
});

export default Profile;
