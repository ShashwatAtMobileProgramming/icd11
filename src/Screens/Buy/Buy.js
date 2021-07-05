import React, {Component} from 'react';
import {Text, View} from 'react-native';
import fontFamily from '../../styles/fontFamily';

export default class Buy extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: '#e4e3e4',
            borderTopColor: 'white',
            shadowColor: '#000',
            borderBottomColor: '#e4e3e4',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
          }}>
          <Text style={{fontSize: 30, fontFamily: fontFamily.futuraBtHeavy}}>
            Buy
          </Text>
        </View>
      </View>
    );
  }
}
