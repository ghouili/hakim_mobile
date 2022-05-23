import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Services from '../Screens/Service/Services';
import AddServices from '../Screens/Service/AddServices';
import EditService from '../Screens/Service/EditService';
import DetailsService from '../Screens/Service/DetailsService';

const ServiceNav = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}    
>
        <Stack.Screen name='Reclams' component={Services} />
        <Stack.Screen name='Add-Reclam' component={AddServices} />
        <Stack.Screen name='Edit-Reclam' component={EditService} />
        <Stack.Screen name='Detail-Reclam' component={DetailsService} />
    </Stack.Navigator>
  )
}

export default ServiceNav