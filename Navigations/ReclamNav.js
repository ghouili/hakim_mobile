import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Reclamation from '../Screens/Reclamation/Reclamation';
import AddReclamation from '../Screens/Reclamation/AddReclamation';

const Stack = createStackNavigator();

const ReclamNav = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}    
    >
        <Stack.Screen name='Reclams' component={Reclamation} />
        <Stack.Screen name='Add-Reclam' component={AddReclamation} />
    </Stack.Navigator>
  )
}

export default ReclamNav