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
