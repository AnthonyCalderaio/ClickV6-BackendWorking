
//ErrorMessage: Unrecognized font family "Ionicons"
//Solved:   $npm install react-native-vector-icons --save 
//Solved... (THEN: react-native run-ios)
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import { Icon } from 'native-base';
//import Mapbox from '@mapbox/react-native-mapbox-gl';
import PropTypes from 'prop-types';
//import { MapView } from 'react-native-maps';
//import { MapView } from 'expo';

//const Marker = MapView.Marker;
//import Mapbox from '@mapbox/react-native-mapbox-gl';
//Mapbox.setAccessToken('pk.eyJ1IjoiYW50aG9ueWNhbGRlcmFpbyIsImEiOiJjam14d2ZxNjcwZHduM3dtOTgwdzB5NXJ6In0.DyW3-V_SruQYHapfcMgtYQ');
//Mapbox.setAccessToken('pk.eyJ1IjoiYW50aG9ueWNhbGRlcmFpbyIsImEiOiJjam14d2ZxNjcwZHduM3dtOTgwdzB5NXJ6In0.DyW3-V_SruQYHapfcMgtYQ');
class MapScreen extends React.Component {
    

  render() {
    return (
      <View style={styles.container}>

        {/* <MapView
            
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}>
        </MapView> */}
      </View>
    );
  }
}

export default MapScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
    map: {
      left:0,
      right: 0,
      top:0,
      bottom:0,
      position: 'absolute'
    }

}
);

