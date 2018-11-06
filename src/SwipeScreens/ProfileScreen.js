
//ErrorMessage: Unrecognized font family "Ionicons"
//Solved:   $npm install react-native-vector-icons --save 
//Solved... (THEN: react-native run-ios)
import React, {Component} from 'react';
import {StyleSheet, Text, View,Platform, StatusBar} from 'react-native';
import { Icon } from 'native-base';
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { AppLoading, Asset, Font} from 'expo'

//import ExchangeRates from '/Users/anthony/Desktop/Manifest/App4/server/src/ExchangeRates.js';
class ProfileScreen extends React.Component {



    constructor(props) {
      super(props);
  
      // this.client = new ApolloClient({
      //   uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
      // });
  
      this.state = {
        isLoadingComplete: false,
      };
    }


  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
    //   return (
    //     <View style={styles.container}>
    //       {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    //       <ApolloProvider client={this.client}>
    //         <ExchangeRates />
    //       </ApolloProvider>
    //     </View>
    //   );
    // }
  }

  // _loadResourcesAsync = async () => {
  //   return Promise.all([
  //     Asset.loadAsync([
  //       require('/Users/anthony/Desktop/Manifest/App4/src/assets/images/robot-dev.png'),
  //       require('/Users/anthony/Desktop/Manifest/App4/src/assets/images/robot-prod.png'),
  //     ]),
  //     Font.loadAsync({
  //       // This is the font that we are using for our tab bar
  //       //...Icon.Ionicons.font,
  //       // We include SpaceMono because we use it in HomeScreen.js. Feel free
  //       // to remove this if you are not using it in your app
  //       //'space-mono': require('/Users/anthony/Desktop/Manifest/App4/src/assets/fonts/SpaceMono-Regular.ttf'),
  //     }),
  //   ]);
  // };

  // _handleLoadingError = error => {
  //   // In this case, you might want to report the error to your error
  //   // reporting service, for example Sentry
  //   console.warn(error);
  // };

  // _handleFinishLoading = () => {
  //   this.setState({ isLoadingComplete: true });
  // };
}


export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
    
}}
);

