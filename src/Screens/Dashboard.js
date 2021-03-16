import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Text, Button} from 'react-native';
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from 'react-native-chart-kit';
import FlashMessage, {showMessage} from "react-native-flash-message";
import Svg, {Circle, Path, Text as SvgText, TSpan, Rect} from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarbonOffsetScreen from './CarbonOffsetScreen';


const lineChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"],
  datasets: [
    {
    data: [80, 20, 30, 10, 60, 50, 70]
    }
  ],
  legend: ["Kg Carbon Offset"],
};

const lineChartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(248, 150, 30, ${opacity})`,
  strokeWidth: 2,
  propsForDots: {
    r: "4",
  },
};

const screenWidth = Dimensions.get("window").width;

const Stack = createStackNavigator();

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Svg height="270" width={screenWidth} style={styles.upperContainer}>
        <SvgText
          fill="black"
          fontSize="25"
          x="5%"
          y="10%"
          fontFamily="Helvetica"
          fontWeight="bold"
        >
          Welcome back,
        </SvgText>
        <Circle
          cx="50%"
          cy="45%"
          r="80"
          fill="#06D6A0"
          fillOpacity="0.9"
          // stroke="black"
          // strokeWidth="2"
          // strokeOpacity="0.6"
        />
      <SvgText
        fill="white"
        fontSize="50" 
        y="52%" 
        x="51%"
        textAnchor="middle"
        fontFamily="Helvetica"
        fontWeight="bold">
          27
      </SvgText>
      <SvgText
        fill="black"
        fontSize="20" 
        y="83%" 
        x="51%"
        textAnchor="middle"
        fontFamily="Helvetica">
          Total Treks
        </SvgText>
    </Svg>
    <View style={styles.upperButtons}>
    <TouchableOpacity 
      style={styles.carbonButton}
      onPress={() => navigation.navigate("CarbonOffset")}>
      <Text style={styles.carbonText}>Carbon Offset</Text>

  </TouchableOpacity>
  <TouchableOpacity 
      style={styles.weeklyButton}
      onPress={() => navigation.navigate("WeeklyGoal")}>
      <Text style={styles.carbonText}>Weekly Goal</Text>

  </TouchableOpacity>
  </View>

  <View style={styles.lineChart}>
      <LineChart
        data={lineChartData}
        width={screenWidth}
        height={220}
        chartConfig={lineChartConfig}
        onDataPointClick={({ value, index, dataset }) =>
          showMessage({
            message: value + " Kg",
            type: "default"
            }
          )
        } 
        bezier
      />
      <FlashMessage duration={1000} position="center" floating={true}/>
    </View>

    <View style={styles.lowerButtons}>
    <TouchableOpacity 
      style={styles.streakButton}
      onPress={() => showMessage({message: "You're on a streak 🔥"})}>
      <Text style={styles.impactText}>18 Day Streak</Text>
      <FlashMessage duration={1000} position="center" floating={true}/>
  </TouchableOpacity>
  <TouchableOpacity 
      style={styles.impactButton}
      onPress={() => showMessage({message: "You've saved 113 🌳 this week"})}>
      <Text style={styles.impactText}>Total Impact</Text>

  </TouchableOpacity>
  </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  upperContainer: {
    shadowOpacity: 0.2
  },
  upperButtons: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-evenly"
  },
  carbonButton: {
    borderRadius: 10,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 60,
    width: 160,
    backgroundColor: "#06D6A0",
    shadowOpacity: 0.3
  },
  weeklyButton: {
    borderRadius: 10,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 60,
    width: 160,
    backgroundColor: "#06D6A0",
    shadowOpacity: 0.3
  },
  bannerStyle: {
    color: '#000000',
    fontSize: 40,
    paddingTop: 80
  },
  carbonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  lowerButtons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  impactButton: {
    borderRadius: 10,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 60,
    width: 300,
    backgroundColor: "#06D6A0",
    shadowOpacity: 0.3
  },
  streakButton: {
    borderRadius: 10,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 60,
    width: 300,
    backgroundColor: "#06D6A0",
    shadowOpacity: 0.3
  },
  impactText: {
    fontWeight: "bold",
    fontFamily: "Helvetica",
    fontSize: 18,
    color: "#ffffff"
  },
  lineChart: {
    marginTop: 15,
    shadowOpacity: 0.1
  }
});

export default Dashboard;