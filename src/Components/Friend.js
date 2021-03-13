import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Friend = ({ event, isDisabled, isSelected, select, view }) => (
  <TouchableOpacity
    style={styles[isSelected ? "friendButtonSelected" : "friendButton"]}
    onPress={() => {
      select(event);
    }}
  >
    <Text style={styles.friendText}>{` ${event.name} `}</Text>
  </TouchableOpacity>
);

const friendButtonBase = {
  flex: 1,
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
  margin: 10,
  height: 20,
  // padding: 10,
  width: 150,
};

const styles = StyleSheet.create({
  friendButton: {
    ...friendButtonBase,
    backgroundColor: "#d8d8d8",
  },
  friendButtonSelected: {
    ...friendButtonBase,
    backgroundColor: "#00FFFF",
  },
  friendText: {
    color: "#333",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Friend;
