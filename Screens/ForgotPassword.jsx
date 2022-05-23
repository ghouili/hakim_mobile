import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Card} from 'react-native-shadow-cards';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainContext } from '../Hooks/Context/MainContext';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const ForgotPassword = ({ navigation }) => {

  const { setChanged } = useContext(MainContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secured, setSecured] = useState(true);
  

  const submit = async()=>{

    // setChanged("loggedin");
    // const jsonValue = JSON.stringify({name: "amal khdhri", email:"amal.khadroui@gmail.com"});
    // await AsyncStorage.setItem('user', jsonValue);

    let result = await fetch(`${path}user/forgotten`,
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            
        })
    });

    let resultData = await result.json();
    console.log(resultData);

    
    if(resultData.success === true) {
    //   setChanged(new Date());
    //   const jsonValue = JSON.stringify(resultData.data);
    //   await AsyncStorage.setItem('user', jsonValue);
        Alert.alert(
          'Success',
          `please check your email`,
          [{ text: 'fermer' }]
        );
        navigation.push('Login');
    } else {
      Alert.alert("Error", resultData.message, [
        { text: "fermer" },
      ]);
    } 
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(166,223,240, 0.8)', 'transparent']}
          style={styles.background}
        />

        <View style={{height: WindowHeight * 0.4, width: "100%", paddingHorizontal: "5%", alignItems: 'center',  justifyContent: 'center'}}>
          {/* <Image 
            style={{width: WindowWidth * 0.5, height: WindowWidth * 0.2 }}
            source={ require('../assets/natilait_logo.png')}
          />
          <Text style={{fontSize: 25, color: '#0A66C2', fontWeight: '700'}}>Welcome on Board</Text> */}
          <Text style={{fontSize: 18, color: '#0A66C2', fontWeight: '600', }}>Write your email and wait for our rmail to confirm!!</Text>
        </View>

        <View style={{ width: "100%", paddingHorizontal: "5%", alignItems: 'center', marginTop: "3%", height: WindowHeight * 0.5, flexDirection: 'column', paddingTop: "10%"}}>
            
          
          <Card 
            style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "3%", paddingVertical: "1.5%"}}
          >
            <TextInput
              style={{fontSize: 16}}
              placeholder='Email' 
              placeholderTextColor='#919191'
              onChangeText={(texte)=> setEmail(texte)}
              keyboardType='email-address'
              autoCapitalize='none'
              
            />
          </Card> 
          
          

          <TouchableOpacity  
            style={{marginTop: "18%"}}
            onPress={submit}
          >
            <Card 
              style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "10%", paddingVertical: "3%", alignItems: 'center'}}
              
            >
              <Text style={{fontSize: 18, color: '#000576', fontWeight: '700'}}>Submit</Text>
            </Card>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: '1%' }}>
            <Text style={{fontSize: 16, color: '#808389'}}>Create an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
            >
              <Text style={{fontSize: 16, color: '#000576', fontWeight: '600'}} >Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={{width: "100%", paddingHorizontal:  WindowWidth * 0.15, flexDirection: 'row', justifyContent: 'space-between', marginTop: '15%'}}>
            <TouchableOpacity style={{ alignSelf: 'flex-start'}} >
              <Card 
                style={{ width: WindowWidth * 0.1, backgroundColor: "#fff", borderRadius: 5, alignItems: 'center'}}
              >
                <FontAwesome name='facebook-square' size={35} color='#129AF7' />
              </Card>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignSelf: 'flex-start'}} >
              <Card 
                style={{ width: WindowWidth * 0.1, backgroundColor: "#fff", borderRadius: 5, alignItems: 'center'}}
              >
                <FontAwesome name='linkedin-square' size={35} color='#0A66C2' />
              </Card>
            </TouchableOpacity>
            
            <TouchableOpacity style={{ alignSelf: 'flex-start'}} >
              <Card 
                style={{ width: WindowWidth * 0.1, backgroundColor: "#fff", borderRadius: 5, alignItems: 'center'}}
              >
                <FontAwesome name='google-plus-square' size={35} color='#FF4627' />
              </Card>
            </TouchableOpacity>
          </View> */}
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7F8',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: WindowHeight ,
  },
})