import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import {connect} from 'react-redux';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();
function Routes(props) {
  const {newid} = props;
  console.log(newid, 'newid at routes');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {AuthStack(Stack)}
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const mapStateToProps = state => {
  return {
    newid: state.homereducers.newid,
  };
};
export default connect(mapStateToProps)(Routes);
