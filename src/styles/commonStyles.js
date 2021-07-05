import {StyleSheet} from 'react-native';
import colors from './colors';
import fontFamily from './fontFamily';

export default StyleSheet.create({
  viewofcard: {
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
    margin: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  imagecard: {
    height: 80,
    width: 80,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,

    resizeMode: 'contain',
    marginRight: 'auto',
  },
  bodyview: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    margin: 10,
  },
  bodytext: {
    fontFamily: fontFamily.semiBold,
    marginLeft: 'auto',
    margin: 5,
  },
  subheadingtext: {
    fontSize: 30,
    fontFamily: fontFamily.regular,
  },
  subheadingview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
