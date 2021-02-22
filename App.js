import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const testData ={
  "title": "Total progress",
  "stats": [
    {
      "title": "Offset",
      "value": "25000 kg"
    },
    {
      "title": "Energy",
      "value": "3000"
    },
    {
      "title": "Streak",
      "value": "5 days",
    },
    {
      "title": "Miles",
      "value": "2512"
    },
    {
      "title": "Friends",
      "value": "6th"
    }
  ]
}
const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title}</Text>
)
const Stat = ({stat}) => (
  <TouchableOpacity style={styles.statButton}>
    <Text style={styles.statText}>
      {`${stat.title}               ${stat.value}`}
    </Text>
    </TouchableOpacity>
);

const StatList = ({stats}) => (
  <ScrollView>
      <View style={styles.statList}>
        {stats.map(stat => <Stat key={stat.title} stat={stat}/>)}
      </View>
  </ScrollView>
)
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Banner title = {testData.title} />
      <StatList stats={testData.stats} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});