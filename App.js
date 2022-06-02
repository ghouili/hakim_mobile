import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ProviderContext } from './Hooks/Context/MainContext';

import MainStack from './Navigations/MainStack';

export default function App() {

  global.path = 'http://192.168.1.100:4000/'

  return (
    <ProviderContext>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ProviderContext>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
