import React, {Component} from 'react';
import {Text, View, Linking} from 'react-native';
import Button from '../../Components/Button';
import fontFamily from '../../styles/fontFamily';

export default class More extends Component {
  render() {
    return (
      <View>
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
              More
            </Text>
          </View>
        </View>
        <View style={{marginTop: 200}}>
          <View>
            <Button buttonName="Feedback"
            onButtonPress={() => Linking.openURL('mailto:info@mobileprogrammingllc.com?subject=Feedback&body=') }
            />
          </View>
          <View>
            <Button buttonName="I want to develop an App"
            onButtonPress={() => Linking.openURL('mailto:info@mobileprogrammingllc.com?subject=Feedback&body=') }
            />
          </View>
          <View>
            <Button buttonName="Contact us"
            onButtonPress={() =>Linking.canOpenURL('https://www.mobileprogramming.com/contactus').then(supported => {
              if (supported){
                Linking.openURL('https://www.mobileprogramming.com/contactus');
              } else {
                console.log("Don't know how to open URI: " + this.props.url);
              }
            }) }
            />
          </View>
        </View>
      </View>
    );
  }
}
