import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import navigationStrings from '../constants/navigationStrings';
import Login from '../Screens/Login/Login';
// import TabRoutes from './TabRoutes';

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      {/* <Stack.Screen
        name={navigationStrings.TABROUTES}
        options={{
          headerShown: false,
        }}
        component={TabRoutes}
      /> */}
    </>
  );
}
