import React from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import {StyleSheet, Text, View, Dimensions} from 'react-native'
import { useState } from 'react';

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

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})