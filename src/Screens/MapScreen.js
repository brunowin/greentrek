<<<<<<< HEAD
import React from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import {StyleSheet, Text, View, Dimensions} from 'react-native'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function MapScreen() {
    const NU = {
        latitude: 42.055984,
        longitude: -87.675171
    }
    const blockMuseum = {
        latitude: 42.0524,
        longitude: -87.6727
    }
    const [region, setRegion] = useState({
        latitude: 42.055984,
        longitude: -87.675171,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    });
    const _map = useRef(null);
    useEffect(() => {

    }, [])
    return (
        <View style={styles.container}>
            <MapView 
            style={styles.map} 
            region={region}
            onRegionChangeComplete={region => setRegion(region)}>
            <Marker coordinate={{latitude: 42.055984, longitude: -87.675171}} />
            <Marker coordinate={{latitude: 42.0524, longitude: -87.6727}} />
            <Polyline coordinates={[NU, blockMuseum]} />
            </MapView>
            
        </View>
    );
};
=======
import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useState } from "react";
import { PROVIDER_GOOGLE } from "react-native-maps";

export default function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 42.055984,
    longitude: -87.675171,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014,
  });
>>>>>>> shourya7

  const homeCoords = {
    latitude: 42.049528,
    longitude: -87.680983,
  };

  const techCoords = {
    latitude: 42.0639,
    longitude: -87.6744,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        //annotations={markers}
      >
        <MapView.Marker
          coordinate={homeCoords}
          title={"title"}
          decription={"description"}
        />
        <MapView.Marker
          coordinate={techCoords}
          title={"title"}
          decription={"description"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

/*
    lat: 42.055984,
    lng: -87.675171
    apiKey: 'AIzaSyCcMLnEXBjkA2GtqSodf43DIP3v9JZeCRE'
*/
