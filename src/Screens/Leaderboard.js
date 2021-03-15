import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";

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

const Banner = ({ title }) => <Text style={styles.bannerStyle}>{title}</Text>;
const Stat = ({ stat }) => (
  <TouchableOpacity style={styles.statButton}>
    <Text style={styles.statText}>
      {`${stat.rank}               ${stat.score}               ${stat.name}`}
    </Text>
  </TouchableOpacity>
);

const StatList = ({ rankings }) => (
  <ScrollView>
    <View style={styles.statList}>
      {rankings.map((stat) => (
        <Stat key={stat.rank} stat={stat} />
      ))}
    </View>
  </ScrollView>
);

const Leaderboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        styles={styles.backButton}
        onPress={() => navigation.navigate("Challenge")}
      >
        <Icons
          name={"arrow-back"}
          size={30}
          color="#333"
          style={{ marginRight: "86%", marginTop: "5%" }}
        />
      </TouchableOpacity>

      <Banner title={testData.title} />
      <StatList rankings={testData.rankings} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  bannerStyle: {
    color: "#000000",
    fontSize: 40,
    paddingTop: 80,
  },
  statList: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  statButton: {
    borderRadius: 5,
    justifyContent: "center",
    margin: 10,
    height: 60,
    minWidth: 350,
    maxWidth: 350,
    backgroundColor: "#7CDD6D",
  },
  statText: {
    color: "#000000",
    fontSize: 15,
    marginLeft: 20,
  },
  backButton: {
    // marginLeft: 100,
    // siz,
  },
});

export default Leaderboard;
