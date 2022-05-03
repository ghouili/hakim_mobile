import React, { createContext, useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainContext = createContext();

const ProviderContext = ({ children }) => {

  const [auth, setAuth] = useState(null);
  const [changed, setChanged] = useState(null);
  console.log(auth);
  useEffect( async () => {
    const jsonValue = await AsyncStorage.getItem('user');
    if(jsonValue){
      setAuth(JSON.parse(jsonValue));
    } else {

      setAuth(null);
    }
    
  }, [changed]);

  const values = {auth, setAuth, setChanged};
  return (
    <MainContext.Provider value={ values }>
      {children}
    </MainContext.Provider>
  )
}

export { ProviderContext, MainContext};