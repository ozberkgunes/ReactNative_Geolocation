/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      latitude:'',
      longitude:''
    }
  }

  componentDidMount(){
    //Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      position => {
        let { coords:{latitude,longitude} } = position;
        this.setState({latitude,longitude})
        console.log(latitude)
      },
      error => {
        console.log(error)
      }
    );
  }

  render(){
    const {latitude,longitude} = this.state;
    return <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <View style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
     </View>
     <Text>Latitude:{latitude} </Text>
     <Text>Longitude: {longitude}</Text>
    </SafeAreaView>
  }

}
