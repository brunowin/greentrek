import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Text, Button} from 'react-native';
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from 'react-native-chart-kit';

const weeklyGoalData = {
    labels: ["Progress"],
    data: [.8]
}
 

const progressChartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity:0.5,
     color: (opacity = 1) => `rgba(49, 204, 10, ${opacity})`,
    strokeWidth: 2,
    }

const screenWidth = Dimensions.get("window").width;

const WeeklyGoalScreen = ({navigation}) => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.dashboardButton}>
            <Button 
                onPress = {() => navigation.navigate("Dashboard")}
                title = "< Dashboard" 
                />
                </View>
            <View style = {styles.textsContainer}>
                <Text style={styles.weeklyGoalText}>Your weekly goal: 15 Treks </Text>
                <Text style={styles.progressText}>Progress this week: 12 Treks</Text>
            </View>
            <View style ={styles.progressChart}>
            <ProgressChart
                data={weeklyGoalData}
                width={400}
                height={220}
                chartConfig={progressChartConfig}
                radius={80}
                strokeWidth={20}
            />
            </View>
        </SafeAreaView>
         )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    dashboardButton: {
        alignItems: "flex-start"
    },
    textsContainer: {
        justifyContent: "center",
        flex: 0.6,
        alignItems: "center",
    },
    weeklyGoalText: {
        fontSize: 20,
        fontFamily: "Helvetica",
        fontWeight: 'bold'
    },
    progressText: {
        fontSize: 20,
        fontFamily: "Helvetica",
        fontWeight: 'bold'
    },
    progressChart: {
        justifyContent: "center",
        alignItems: "center"
    }
})
export default WeeklyGoalScreen;