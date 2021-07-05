import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider, connect} from 'react-redux';
import Routes from './src/Navigation/Routes';
import actions from './src/redux/actions';
import store from './src/redux/store';

export default class App extends Component {
  componentDidMount = () => {
    new Promise((resolve, reject) => {
      AsyncStorage.getItem('usertoken').then(data => {
        console.log(data, 'get item data');
        // let mydata = JSON.parse(data);
        // console.log(mydata, 'data acces token app.js');

        actions
          .UserData(data)
          .then(res => {
            console.log(res, 'response app.js by sahil');
          })
          .catch(err => {
            console.log(err, 'EROR');
          });
      });
    });
  };
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Routes />
        </View>
      </Provider>
      // <View style={{flex: 1}}>
      //   <Text>hello</Text>
      //   {/* <Routes /> */}
      // </View>
    );
  }
}
