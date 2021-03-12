// import React, { useState } from "react";
// import { StyleSheet, View } from "react-native";
// import Profile from "./Profile";

// const CourseSelector = ({ profiles, view }) => {
//   const [selected, setSelected] = useState([]);
//   const toggle = (profile) =>
//     setSelected((selected) => selected.includes(profile));
//   return (
//     <View style={styles.profileList}>
//       {profiles.map((profile) => (
//         <Profile
//           key={profile.name}
//           profile={profile}
//           isSelected={selected.includes(profile)}
//           select={toggle}
//           view={view}
//         />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   profileList: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
// });

// export default ProfileSelector;
