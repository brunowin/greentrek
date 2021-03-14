import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const MilesTime = ({transport, transportMiles, transportTime}) =>(

<View style={{flexDirection:"row"}}>
<View style={{flexDirection:"column", width:200}}>
  <Text style={styles.headerStyle}>{transport}</Text>
  <Text style={styles.subText}>Miles: {transportMiles}</Text>
  <Text style={styles.subText}>Time: {transportTime}</Text>
  <Text></Text>
</View>

<TouchableOpacity style={{marginLeft: 135}}>
  <View style={styles.goButtonStyle}>
    <Text style={styles.textStyle}>GO</Text>
  </View>
</TouchableOpacity>
</View>
)
const styles = StyleSheet.create({
  
  textStyle: {
    color: "white",
    fontSize: 25
  },
  goButtonStyle: {
    backgroundColor:"green",
    width:70,
    height:70,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    
    
    
    
  },
  headerStyle:{
    marginLeft: 10,
    fontSize: 25,
  },
  subText: {
    marginLeft:10,
    fontSize:15
  }
});

export default MilesTime;