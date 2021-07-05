import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import location from '../assets/location.png'

const Map = () => {

    const origin = { latitude: 5.395110 , longitude: -3.989464}


     const departMarker = () => (
        <Marker
            coordinate={origin}
            anchor={{ x: 0.5, y: 0.5 }}
            identifier={'mk1'}

        >
            <View >
                <Image source={location} style={{ width: 30, height: 30 }} />
            </View>
        </Marker>
    )


    return (
        <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 5.316667,
            longitude: -4.033333,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
            {departMarker()}
        </MapView>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%'
        // flex:1
    },
    map:{
        flex:1
    }
  })

export default Map
