import React, { useState, useEffect } from "react";
import Dashboard from "./src/Screens/Dashboard";
import Leaderboard from "./src/Screens/Leaderboard";
import ChallengeScreen from "./src/Screens/ChallengeScreen";
import SelectFriend from "./src/Screens/SelectFriend";
import MapScreen from "./src/Screens/MapScreen";
import WeeklyGoalScreen from "./src/Screens/WeeklyGoalScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CarbonOffSetScreen from "./src/Screens/CarbonOffsetScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'green'
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Challenge') {
              iconName = focused ? 'people' : 'people-outline';
            }
            else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
        <Tab.Screen name="Challenge" component={ChallengeScreen} />
        <Tab.Screen
          name="SelectFriend"
          component={SelectFriend}
          options={{
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen
          name="CarbonOffset"
          component={CarbonOffSetScreen}
          options={{
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
        <Tab.Screen
          name="WeeklyGoal"
          component={WeeklyGoalScreen}
          options={{
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
