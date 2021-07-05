import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Bookmarks from '../Screens/Bookmarks/Bookmarks';
import Category from '../Screens/Category/Category';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import Subcatone from '../Screens/Subcatone/Subcatone';
import Subcattwo from '../Screens/Subcattwo/Subcattwo';
import Subcatthree from '../Screens/Subcatthree/Subcatthree';
import Subcatfour from '../Screens/Subcatfour/Subcatfour';
import Subcatfive from '../Screens/Subcatfive/Subcatfive';
import Subcatsix from '../Screens/Subcatsix/Subcatsix';
import Subcatseven from '../Screens/Subcatseven/Subcatseven';
import Subcateight from '../Screens/Subcateight/Subcateight';
import Subcatnine from '../Screens/Subcatnine/Subcatnine';
import Subcatten from '../Screens/Subcatten/Subcatten';
import Subcateleven from '../Screens/Subcateleven/Subcateleven';

const Stack = createStackNavigator();
export default function MainStack() {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TABROUTES}
        options={{
          headerShown: false,
        }}
        component={TabRoutes}
      />
      {/* <Stack.Screen
        name={navigationStrings.CATEGORY}
        options={{
          headerShown: false,
        }}
        component={Category}
      /> */}
      <Stack.Screen
        name={navigationStrings.SUBCATONE}
        options={{
          headerShown: false,
        }}
        component={Subcatone}
      />
      <Stack.Screen
        name={navigationStrings.SUBCATTWO}
        options={{
          headerShown: false,
        }}
        component={Subcattwo}
      />
      <Stack.Screen
        name={navigationStrings.SUBCATTHREE}
        options={{
          headerShown: false,
        }}
        component={Subcatthree}
      />
      <Stack.Screen
        name={navigationStrings.SUBCATFOUR}
        options={{
          headerShown: false,
        }}
        component={Subcatfour}
      />
      <Stack.Screen
        name={navigationStrings.SUBCATFIVE}
        options={{
          headerShown: false,
        }}
        component={Subcatfive}
      />
      <Stack.Screen
        name={navigationStrings.SUBCATSIX}
        options={{
          headerShown: false,
        }}
        component={Subcatsix}
      />
      <Stack.Screen
        name={navigationStrings.SUBCATSEVEN}
        options={{
          headerShown: false,
        }}
        component={Subcatseven}
      />
      <Stack.Screen
        name={navigationStrings.SUBCATEIGHT}
        options={{
          headerShown: false,
        }}
        component={Subcateight}
      />
      <Stack.Screen
        name={navigationStrings.SUBCATNINE}
        options={{
          headerShown: false,
        }}
        component={Subcatnine}
      />
      <Stack.Screen
        name={navigationStrings.SUBCATTEN}
        options={{
          headerShown: false,
        }}
        component={Subcatten}
      />
      <Stack.Screen
        name={navigationStrings.SUBCATELEVEN}
        options={{
          headerShown: false,
        }}
        component={Subcateleven}
      />
      <Stack.Screen
        name={navigationStrings.CATEGORY}
        options={{
          headerShown: false,
        }}
        component={Category}
      />
    </>
  );
}
