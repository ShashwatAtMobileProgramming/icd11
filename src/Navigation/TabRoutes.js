import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Bookmarks from '../Screens/Bookmarks/Bookmarks';
import Search from '../Screens/Search/Search';
import More from '../Screens/More/More';
import Buy from '../Screens/Buy/Buy';
import navigationStrings from '../constants/navigationStrings';
import Category from '../Screens/Category/Category';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';  

const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Category"
      activeColor="#e91e63"
      barStyle={{backgroundColor: 'red'}}>
      <Tab.Screen
        name={navigationStrings.CATEGORY}
        component={Category}
        options={{
          tabBarLabel: 'Category',

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.BOOKMARKS}
        component={Bookmarks}
        options={{
          tabBarLabel: 'Bookmarks',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon style={[{color: color}]} size={25} name={'ios-search'}/>  
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.MORE}
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.BUY}
        component={Buy}
        options={{
          tabBarLabel: 'Buy',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
