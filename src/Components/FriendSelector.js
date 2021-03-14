import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Friend from "./Friend";

const FriendSelector = ({ events, view }) => {
  const [selected, setselected] = useState([]);
  const toggle = (event) =>
    setselected((selected) =>
      selected.includes(event)
        ? selected.filter((x) => x !== event)
        : [...selected, event]
    );

  return (
    <View style={styles.friendList}>
      {events.map((event) => (
        <Friend
          key={event.id}
          event={event}
          isSelected={selected.includes(event)}
          select={toggle}
          view={view}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  friendList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FriendSelector;
