import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Polyline from '@mapbox/polyline';


export default class MapScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: [],
      dist: ''
    }
  }

  componentDidMount() {
    this.getDirections("42.049528,-87.680983", "42.0639,-87.6744")
  }

  async getDirections(startLoc, destinationLoc) {
        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&mode=walking&key=AIzaSyBoI7_OALZ8qNp2TqbVhoBu5ecVncn-lRI`)
            let respJson = await resp.json();
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            let coords = points.map((point, index) => {
                return  {
                    latitude : point[0],
                    longitude : point[1]
                }
            })
            let dist = respJson.routes[0].legs[0].distance.text
            this.setState({dist: dist})
            this.setState({coords: coords})
            return coords
        } catch(error) {
            alert(error)
            return error
        }
    }

  render() {
    
    return (
      
      <MapView 
        style={{flex:1}} 
        provider= {PROVIDER_GOOGLE}
        region={{
        latitude: 42.055984,
        longitude: -87.675171,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      }}>
        <MapView.Marker 
        coordinate={{
          latitude: 42.049528,
          longitude: -87.680983,
        }}
        title={'Home'}
      />
      <MapView.Marker 
        coordinate={{
            latitude: 42.0639,
            longitude: -87.6744,
          }}
          title={'Destination!'}
      />  

      <MapView.Polyline 
          coordinates={this.state.coords}
          strokeWidth={4}
          strokeColor="green"/>

    <TextInput style={styles.searchBar}
      />

      <View style={styles.resultsBar}>
          <Text style={{fontSize:20, color:"#fff"}}>{this.state.dist}</Text>
      </View>
      </MapView>
      
    );
  }
}

const styles = StyleSheet.create({

  searchBar: {
    marginTop:46, 
    marginLeft:14,
    height: 40,
    width: 340,
    backgroundColor: 'white',
    borderRadius: 15
  },
  resultsBar:{
    backgroundColor: "green",
    width: "100%",
    height:100,
    marginTop:650,
    justifyContent:"center",
    alignItems: "center"

  }
});


AppRegistry.registerComponent('MapScreen', () => MapScreen);