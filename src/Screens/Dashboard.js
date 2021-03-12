import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Text, Button} from 'react-native';
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from 'react-native-chart-kit';
import FlashMessage, {showMessage} from "react-native-flash-message";
import Svg, {Circle, Path, Text as SvgText, TSpan, Rect} from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Leaderboard from './Leaderboard';
import MapScreen from './MapScreen';
const progressChartData ={
  "title": "Total progress",
  // "stats": [
  //   {
  //     "title": "Offset",
  //     "value": "25000 kg"
  //   },
  //   {
  //     "title": "Energy",
  //     "value": "3000"
  //   },
  //   {
  //     "title": "Streak",
  //     "value": "5 days",
  //   },
  //   {
  //     "title": "Miles",
  //     "value": "2512"
  //   },
  //   {
  //     "title": "Friends",
  //     "value": "6th"
  //   }
  // ]
  data: [1],
  colors: ['#000000', '#ff0000'],
};
const lineChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"],
  datasets: [
    {
    data: [80, 20, 30, 10, 60, 50, 70]
    }
  ],
  legend: ["Carbon emission saved"]
}

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title}</Text>
)
// const Stat = ({stat}) => (
//   <TouchableOpacity style={styles.statButton}>
//     <Text style={styles.statText}>
//       {`${stat.title}               ${stat.value}`}
//     </Text>
//     </TouchableOpacity>
// );

// const StatList = ({stats}) => (
//   <ScrollView>
//       <View style={styles.statList}>
//         {stats.map(stat => <Stat key={stat.title} stat={stat}/>)}
//       </View>
//   </ScrollView>
  
// )

const progressChartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#ffffff',
  backgroundGradientToOpacity: 0,
   color: (opacity = 0) => `rgba(184, 230, 0, ${opacity})`,
}

const lineChartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#ffffff',
  backgroundGradientToOpacity:0.5,
   color: (opacity = 1) => `rgba(49, 204, 10, ${opacity})`,
  strokeWidth: 2,
  propsForDots: {
    r: "4"
  }
}
const screenWidth = Dimensions.get("window").width;
const Stack = createStackNavigator();

const Dashboard = () => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Banner title = {testData.title} />
    //   <StatList stats={testData.stats} />
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
    <Svg height="270" width={screenWidth}>
      <SvgText
        fill="black"
        fontSize="25"
        x="5%"
        y="10%"
        fontFamily="Helvetica"
        fontWeight="bold"
        >Welcome back,</SvgText>
      <Circle 
        cx="50%" 
        cy="45%" 
        r="80" 
        fill="#31CC0A" 
        fillOpacity="0.9"
        stroke="black"
        strokeWidth="2"
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
      {/* <SvgText
        fill="black"
        fontSize="20" 
        y="82%" 
        x="10%"
        fontFamily="Helvetica">
        Carbon Offset
      </SvgText> */}
      {/* <SvgText
        fill="black"
        fontSize="20" 
        y="82%" 
        x="60%"
        fontFamily="Helvetica">
        Weekly Goal
      </SvgText> */}
      {/* <Rect 
        x="7%"
        y="85%"
        width="150"
        height="50"
        stroke="black"
        strokeWidth="2"
        fill="#31CC0A"
        /> */}
      {/* <Rect 
        x="55%"
        y="85%"
        width="150"
        height="50"
        stroke="green"
        strokeWidth="2"
        /> */}
    </Svg>
    <SafeAreaView style={styles.buttonsView}>
    <TouchableOpacity 
      style={styles.carbonButton}>
      <Text style={styles.carbonText}>Carbon Offset</Text>

  </TouchableOpacity>
  <TouchableOpacity 
      style={styles.weeklyButton}>
      <Text style={styles.carbonText}>Weekly Goal</Text>

  </TouchableOpacity>
  </SafeAreaView>
    {/* <ProgressChart
      style={styles.progressChart}
      data={progressChartData}
      width={screenWidth}
      height={220}
      strokeWidth={90}
      radius={60}
      chartConfig={progressChartConfig}
      hideLegend={false}
      // withCustomBarColorFromData={true}
      >
      </ProgressChart> */}
      <LineChart
       data={lineChartData}
       width={screenWidth}
       height={250}
       chartConfig={lineChartConfig}
       onDataPointClick={({value, getColor, x}) =>
        showMessage("You selected " + value + x)
       }
       />
       <FlashMessage duration={1000} position="center" />
       <Svg height="200" width={screenWidth}>
        <Rect
            width="300"
            height="50"
            x="15%"
            y="20%"
            stroke="green"
            strokeWidth="3"
            onPress={() => alert('Press on Rect')}
          />
         <SvgText
            fill="black"
            fontSize="20" 
            y="35%" 
            x="40%">
            Total Impact
          </SvgText>
          <Rect
            width="300"
            height="50"
            x="15%"
            y="50%"
            stroke="green"
            strokeWidth="3"
          />
         <SvgText
            fill="black"
            fontSize="20" 
            y="65%" 
            x="40%">
            18 Day Streak
            </SvgText>
       </Svg>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  progressChart: {
    marginBottom: 20,
    marginTop: 20,
  },
  buttonsView: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-evenly"
  },
  carbonButton: {
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent:"space-evenly",
    height: 50,
    width: 150,
    backgroundColor:"#31CC0A",
    color:"#31CC0A"
  },
  weeklyButton: {
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 50,
    width: 150,
    backgroundColor:"#31CC0A",
  },
  bannerStyle: {
    color: '#000000',
    fontSize: 40,
    paddingTop: 80
  },
  statList: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  statButton: {
    borderRadius: 5,
    justifyContent: 'center',
    // alignItems: 'center',
    margin: 20,
    height: 60,
    minWidth: 350,
    maxWidth: 350,
    backgroundColor: '#7CDD6D',
  },
  statText: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'center',
  },
  carbonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  }
});

export default Dashboard;