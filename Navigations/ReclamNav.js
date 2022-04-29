import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Reclamation from '../Screens/Reclamation/Reclamation';
import AddReclamation from '../Screens/Reclamation/AddReclamation';
import EditReclamation from '../Screens/Reclamation/EditReclamation';
import DetailsReclamation from '../Screens/Reclamation/DetailsReclamation';

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
        <Stack.Screen name='Edit-Reclam' component={EditReclamation} />
        <Stack.Screen name='Detail-Reclam' component={DetailsReclamation} />
    </Stack.Navigator>
  )
}

export default ReclamNav