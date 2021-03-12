import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ProfileSelector from "./Profile";

const ProfileList = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <ScrollView>
      {/* <ProfileSelector
        selectedProfile={selectedProfile}
        setSelectedProfile={setSelectedProfile}
      /> */}

      <View style={styles.profileList}>
        {profiles.map((profile) => (
          <Stat key={profile.title} profile={profile} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ProfileList;
