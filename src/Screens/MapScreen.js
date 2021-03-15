import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import DraggablePanel from 'react-native-draggable-panel';
import {SearchBar} from 'react-native-elements';
import MilesTime from '../Components/MilesTime'



export default class MapScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: [],
      distWalk: '',
      timeWalk: '',
      distBike: '',
      timeBike: '',
      distTran: '',
      timeTran: '',
      search: '',
    }
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  componentDidMount() {
    this.getDirections("42.049528,-87.680983", "42.0639,-87.6744")
  }

  async getDirections(startLoc, destinationLoc) {
        try {
            let respWalk = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&mode=walking&key=AIzaSyBoI7_OALZ8qNp2TqbVhoBu5ecVncn-lRI`)
            let respBike = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&mode=biking&key=AIzaSyBoI7_OALZ8qNp2TqbVhoBu5ecVncn-lRI`)
            let respTran = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&mode=transit&key=AIzaSyBoI7_OALZ8qNp2TqbVhoBu5ecVncn-lRI`)
            let respJsonWalk = await respWalk.json();
            let respJsonBike = await respBike.json();
            let respJsonTran = await respTran.json();

            //walking
            let distWalk = respJsonWalk.routes[0].legs[0].distance.text
            let timeWalk = respJsonWalk.routes[0].legs[0].duration.text
            this.setState({distWalk: distWalk})
            this.setState({timeWalk: timeWalk})

            //biking
            let distBike = respJsonBike.routes[0].legs[0].distance.text
            let timeBike = respJsonBike.routes[0].legs[0].duration.text
            this.setState({distBike: distBike})
            this.setState({timeBike: timeBike})

            //transit
            let distTran = respJsonTran.routes[0].legs[0].distance.text
            let timeTran = respJsonTran.routes[0].legs[0].duration.text
            this.setState({distTran: distTran})
            this.setState({timeTran: timeTran})

            // route
            let points = Polyline.decode(respJsonWalk.routes[0].overview_polyline.points);
            let coords = points.map((point, index) => {
                return  {
                    latitude : point[0],
                    longitude : point[1]
                }
            })

            this.setState({coords: coords})

            return coords
        } catch(error) {
            alert(error)
            return error
        }
    }

   


  render() {
    
    const { search } = this.state;

  
    
    
    return (
    <View>
      <MapView 
        style={styles.map}
        provider= {PROVIDER_GOOGLE}
        region={{
        latitude: 42.051,
        longitude: -87.675171,
        latitudeDelta: 0.03,
        longitudeDelta: 0.028
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
      
      
      </MapView>
      <DraggablePanel
        visible={true}
        expandable={true}
        initialHeight={330}
        overlayOpacity={0}
      >
          <SearchBar
            placeholder= "Where do you want to go?"
            onChangeText={this.updateSearch}
            value = {search}
            platform = "ios"
            />
          
          <MilesTime transport='Walking' transportMiles={this.state.distWalk} transportTime={this.state.timeWalk}/>

          <MilesTime transport='Biking' transportMiles={this.state.distBike} transportTime={this.state.timeBike}/>

          <MilesTime transport='Transit' transportMiles={this.state.distTran} transportTime={this.state.timeTran}/>
          
        </DraggablePanel>
      </View>
      
      
      
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  searchBar: {
    marginTop:46, 
    marginLeft:14,
    height: 40,
    width: 340,
    backgroundColor: 'green',
    opacity: .7,
    borderRadius: 15
  },
  resultsBar:{
    backgroundColor: 'green',
    opacity: .7,
    width: "100%",
    height: 100,
    marginTop: 600,
    justifyContent:"center",
    alignItems: "center"
  },
  searchBar: {
    marginTop: 46,
    marginLeft: 14,
    height: 40,
    width: 340,
    backgroundColor: "green",
    opacity: 0.7,
    borderRadius: 15,
  },
  resultsBar: {
    backgroundColor: "green",
    opacity: 0.7,
    width: "100%",
    height: 100,
    marginTop: 600,
    justifyContent: "center",
    alignItems: "center",
  },
});


AppRegistry.registerComponent('MapScreen', () => MapScreen);
