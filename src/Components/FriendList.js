import React from "react";
import { ScrollView } from "react-native";
import FriendSelector from "./FriendSelector";

const FriendList = ({ events, view }) => {
  return (
    <ScrollView>
      <FriendSelector view={view} />
    </ScrollView>
  );
};

export default FriendList;
