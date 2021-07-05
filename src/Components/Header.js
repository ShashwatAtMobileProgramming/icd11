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
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

export default function Header(props) {
  const {} = props;
  let check = false;
  return (
    <View style={styles.headerview}>
      <Text style={styles.headertext}>
        ICD-11 for Mortality and Morbidity Statistics
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerview: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // justifyContent: "space-between",

    backgroundColor: colors.cardcolor,
    paddingTop: 20,
    paddingBottom: 20,
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
  },
  headertext: {
    fontSize: 30,
    marginLeft: 20,
    color: '#ba0647',
    fontFamily: fontFamily.futuraHeavyBt,
  },
});
