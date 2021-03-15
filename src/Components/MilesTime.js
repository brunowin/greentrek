import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const MilesTime = ({transport, transportMiles, transportTime, offset}) =>(

<View style={{flexDirection:"row"}}>
<View style={{flexDirection:"column", width:200}}>
  <Text style={styles.headerStyle}>{transport}</Text>
  <Text style={styles.offsetText}>Offset {offset}kg CO2</Text>
  <Text style={styles.subText}>{transportMiles} • {transportTime}</Text>
  
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
    backgroundColor:"#3CD200",
    width:70,
    height:70,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
  },
  headerStyle:{
    marginLeft: 10,
    fontSize: 23,
  },
  subText: {
    marginLeft:10,
    fontSize:16
  },
  offsetText: {
    marginLeft:10,
    color:"green",
    fontSize:18
  }
});

export default MilesTime;
