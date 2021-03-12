// import React, { useState } from "react";
// import Friend from "./Friend";
// import { StyleSheet, SafeAreaView, ScrollView, View, Text } from "react-native";

// const FriendSelector = ({ events }) => {
//   const [selected, setselected] = useState([]);
//   return (
//     <View style={styles.challengeList}>
//       {events.map((event) => (
//         <Friend
//           key={event.id}
//           event={event}
//           isSelected={selected.includes(event)}
//         />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   challengeList: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   challengeButton: {
//     flex: 1,
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 10,
//     height: 20,
//     // padding: 10,
//     width: 150,
//     backgroundColor: "#d8d8d8",
//   },
//   challengeText: {
//     color: "#333",
//     fontSize: 20,
//     fontWeight: "600",
//     textAlign: "center",
//   },
// });
// export default FriendSelector;
