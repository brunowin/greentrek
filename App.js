import React, { useState, useEffect } from "react";
import Dashboard from "./src/Screens/Dashboard";
import Leaderboard from "./src/Screens/Leaderboard";
import CardScreen from "./src/Screens/FriendScreen";
import ChallengeScreen from "./src/Screens/ChallengeScreen";
import FriendScreen from "./src/Screens/FriendScreen";
import MapScreen from "./src/Screens/MapScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        {/* <Tab.Screen name="Challenge" component={CardScreen} /> */}
        <Tab.Screen name="Challenge" component={ChallengeScreen} />
        <Tab.Screen
          name="FriendScreen"
          component={FriendScreen}
          // options={{
          //   tabBarButton: () => null,
          //   tabBarVisible: false,
          // }}
        />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
