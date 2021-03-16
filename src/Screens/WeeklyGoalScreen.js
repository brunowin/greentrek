import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const weeklyGoalData = {
  labels: ["Progress"],
  data: [0.8],
};

const progressChartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(6, 214, 160, ${opacity})`,

};

const screenWidth = Dimensions.get("window").width;

const WeeklyGoalScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dashboardButton}>
        <Button
          onPress={() => navigation.navigate("Dashboard")}
          title="< Dashboard"
        />
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.weeklyGoalText}>Your weekly goal</Text>
        <Text style={{color: "#06D6A0", fontSize: 30, fontWeight: "bold", paddingBottom: 40}}> 15 treks </Text>
        <Text style={styles.progressText}>Your progress this week</Text>
        <Text style={{color: "#06D6A0", fontSize: 30, fontWeight: "bold"}}> 12 treks </Text>
      </View>
      <View style={styles.progressChart}>
        <ProgressChart
          data={weeklyGoalData}
          width={screenWidth}
          height={300}
          chartConfig={progressChartConfig}
          radius={100}
          strokeWidth={25}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  dashboardButton: {
    alignItems: "flex-start",
  },
  textsContainer: {
    justifyContent: "center",
    flex: 0.5,
    alignItems: "center",
    shadowOpacity: 0.6,
    backgroundColor: "#006d77",
    opacity: 0.8,
    marginTop: 20,
    borderRadius: 20,
    width: 407,
    marginLeft: 4,
  },
  weeklyGoalText: {
    color: "#ffffff",
    fontSize: 20,
    // fontWeight: "bold",
  },
  progressText: {
    color: "#ffffff",
    fontSize: 20,
    // fontWeight: "bold",
  },
  progressChart: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.1
  },
});
export default WeeklyGoalScreen;
