import React, { useState, useEffect }  from 'react';
import Dashboard from './src/Screens/Dashboard';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


const Stack = createStackNavigator();

const App = () => {

  return(
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      headerRight: () =>(
        <View style={styles.iconContainer}>
        <Icon name="home" style={styles.iconSelected} size={40} />
        <Icon name="emoji-events" style={styles.iconStyle} size={40} />
        <Icon name="group" style={styles.iconStyle} size={40} />
        </View>
      )
      }}>
      <Stack.Screen name= "Dashboard"
        component={Dashboard}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  iconSelected:{
    color: '#4F8EF7',
    marginRight: 20,
    marginLeft: 20,
  },
  iconStyle:{
    color: "#141414",
    marginRight: 20,
    marginLeft: 20,
  },
  iconContainer:{
    marginTop: 10,
    flex: 1,
    display: 'inline-block',
    alignItems: 'center',
    position: 'relative'

  },
});

export default App