import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Text, Button} from 'react-native';
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from 'react-native-chart-kit';
import { color } from 'react-native-reanimated';

const carbonData = [
    {
        name: "kg Walk",
        carbonOffset: 63,
        color: "#06D6A0",
        legendFontColor: "#06D6A0",
        legendFontSize: 15
    },
    {
        name:"kg Bike",
        carbonOffset: 30,
        color: "#F8961E",
        legendFontColor: "#F89104",
        legendFontSize: 15,
        opacity: 0.8
    },
    {
        name:"kg Public Transit",
        carbonOffset: 20,
        color: "#3a86ff",
        legendFontColor: "#3a86ff",
        legendFontSize: 15
    }
    
]


const pieChartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity:0.5,
     color: (opacity = 1) => `rgba(49, 204, 10, ${opacity})`,
    strokeWidth: 5,
    fillShadownGradident: "#31CC0A"
    }

const screenWidth = Dimensions.get("window").width;

const CarbonOffSetScreen = ({navigation}) => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.dashboardButton}>
            <Button 
                onPress = {() => navigation.navigate("Dashboard")}
                title = "< Dashboard" 
                />
                </View>
            <View style = {styles.upperContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.carbonText}>Your total Carbon offset for this week is: </Text>
                    <Text style={styles.co2Text}>200 kg CO2</Text>
                </View>
            </View>
            <View style={styles.pieChart}>
            <Text style={{fontFamily: "Helvetica", fontSize: 15, fontWeight: 'bold'}}>Breakdown of your Carbon footprint</Text>
            <PieChart
                data={carbonData}
                width={screenWidth}
                height={260}
                chartConfig={pieChartConfig}
                accessor={"carbonOffset"}
                // center = {[10,50]}
                paddingLeft={4}
                absolute={true}
            />
            </View>
        </SafeAreaView>
         )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    dashboardButton: {
        alignItems: "flex-start"
    },
    upperContainer: {
        justifyContent: "center",
        flex: 0.7,
        alignItems: "center",
        shadowOpacity: 0.6,
        backgroundColor: "#457b9d",
        opacity: 0.8,
        marginTop: 20,
        borderRadius: 20,
        width: 400,
        marginLeft: 8,
    },
    textContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        opacity: 1,
    },
    carbonText: {
        fontSize: 20,
        color: "white",
        fontWeight: 'bold',
    },
    co2Text: {
        fontSize: 30,
        fontFamily: "Helvetica",
        fontWeight: 'bold',
        color: "#06D6A0",
        marginTop: 10
    },
    pieChart: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60
        
    }
})
export default CarbonOffSetScreen;