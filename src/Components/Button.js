import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import colors from '../styles/colors';
export default function Formbutton(props) {
  const {
    onButtonPress,
    buttonName,
    text,
    mytext,
    style,
    name,
    TotalPrice,
    textbtn,
    styleofprofilebutton,
    styleofplaceorder,
  } = props;
  let check = false;
  return (
    <View style={styles.textInput}>
      <TouchableOpacity
        onPress={onButtonPress}
        style={[
          styles.buttonStyle,
          style,
          styleofprofilebutton,
          styleofplaceorder,
        ]}>
        <Text style={[styles.text, textbtn]}>{buttonName} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: colors.themeColor,
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    color: '#e3e3e3',
    fontWeight: 'bold',
  },
});
