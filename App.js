import React, { useState, useEffect }  from 'react';
import Dashboard from './src/Screens/Dashboard';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      headerShown: false
      }}>
      <Stack.Screen name= "Dashboard"
        component={Dashboard}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App