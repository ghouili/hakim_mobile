import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Screens/Home';
import ReclamNav from './ReclamNav';
import Suggestion from '../Screens/Suggestion';
import Profile from '../Screens/Profile';
import ServiceNav from './ServiceNav';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
          headerShown: false
      }}
    >

      <Tab.Screen name="Home"
        component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
        }}
      />
        
      <Tab.Screen name="Qualite"
        component={ReclamNav}
        options={{
            tabBarLabel: 'Qualite',
            tabBarIcon: ({ color, size }) => (
              <Octicons name="report" color={color} size={size} />
            ),
        }}
      />
      
      <Tab.Screen name="Services"
        component={ServiceNav}
        options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="customerservice" color={color} size={size} />
            ),
        }}
      />
      
      <Tab.Screen name="Suggestion"
        component={Suggestion}
        options={{
            tabBarLabel: 'Suggestion',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="lightbulb-o" color={color} size={size} />
            ),
        }}
      />
      
      <Tab.Screen name="Profile"
        component={Profile}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-edit" color={color} size={size} />
            ),
        }}
      />
        
    </Tab.Navigator>
  )
}

export default BottomTabNav