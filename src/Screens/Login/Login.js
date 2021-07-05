import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import navigationStrings from '../../constants/navigationStrings';
import Button from '../../Components/Button';

import fontFamily from '../../styles/fontFamily';
import AsyncStorage from '@react-native-community/async-storage';
import imagePath from '../../constants/imagePath';

export default class Login extends Component {
  componentDidMount = () => {
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      grant_type: 'client_credentials',
      scope: 'icdapi_access',
    });
    var config = {
      method: 'post',
      url: 'https://icdaccessmanagement.who.int/connect/token',
      headers: {
        Authorization:
          'Basic MWI4ZTk5MWQtMDBjMy00YWM1LTk5MWQtNzUxZWVlOWVlNWMzXzMzNDRiZjcwLTdmZTAtNGRjMS1hZTQ5LTFjNTgwNDE2YTgyZTpWaExEYTRNaW5RbnJSZzB1NTVERU9ycFlXaXJNM0ZRTUFYT1o2Vi8wRzBZPQ==',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(
          JSON.stringify(response.data, 'getting mytoken aggrandize'),
        );
        let my_token = response.data.access_token;
        console.log(my_token, 'my resultant token');
        AsyncStorage.setItem('usertoken', my_token);
      })
      .catch(function (error) {
        console.log(error);
      });

      this.timeoutHandle = setTimeout(()=>{
        // Add your logic for the transition
        const {navigation} = this.props;
    navigation.navigate(navigationStrings.TABROUTES);
   }, 3000);

  };
  onMainPage = () => {
    
  };

  handleTextRef = ref => (this.text = ref);

  handleViewRef = ref => (this.view = ref);
  bounce = () =>
    this.view
      .bounce(800)
      .then(endState =>
        console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'),
      );

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
      
      <Image source={imagePath.icdSplash}  
                    style={{width:'100%', height: '100%', resizeMode: 'cover'}} />  

      </View>
    );
  }
}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: colors.accordionchild,
    flex: 1,
  },
});
