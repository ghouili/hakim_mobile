import React, { useContext, } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { MainContext } from '../Hooks/Context/MainContext';

import Splach from '../Screens/Splach';
import LogIn from '../Screens/LogIn';
import SignUp from '../Screens/SignUp';
import BottomTabNav from './BottomTabNav';

const Stack = createStackNavigator();

const MainStack = () => {

    const { auth } = useContext(MainContext);
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        {auth ?
            <Stack.Screen name="Main" component={BottomTabNav} />
        :
            <>
                <Stack.Screen name="Splach" component={Splach} />
                <Stack.Screen name="Login" component={LogIn} />
                <Stack.Screen name="Signup" component={SignUp} />
            </>
        }
    </Stack.Navigator>
  )
}

export default MainStack