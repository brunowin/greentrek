import React, { useState, useEffect }  from 'react';
import Dashboard from './src/Screens/Dashboard';
import Leaderboard from './src/Screens/Leaderboard';
import ChallengeScreen from './src/Screens/ChallengeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet,View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {

  return(

    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name= "Dashboard"
        component={Dashboard}
        />
      <Tab.Screen name= "Leaderboard"
        component={Leaderboard}
        />
      <Tab.Screen name= "Challenge"
        component={ChallengeScreen}
        />
      </Tab.Navigator>
      </NavigationContainer>
    

  )
}

export default App
