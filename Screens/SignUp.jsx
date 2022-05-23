import React, { useContext, useState} from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from 'react-native-shadow-cards';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MainContext } from '../Hooks/Context/MainContext';

import AsyncStorage from '@react-native-async-storage/async-storage';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const SignUp = ({ navigation }) => {

  const { setAuth, setChanged } = useContext(MainContext);

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [adress, setAdress] = useState('');
  // const [password, setPassword] = useState('');
  // const [birthdate, setbirthdate] = useState(second)

  const register = async () => {

    

        let result = await fetch(`${path}user/register`,
        {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              nom: nom,
              prenom: prenom,
              adress: adress,
              tel: tel,
              email: email,
            })
        });
    
      let resultData = await result.json();
      console.log(resultData);
    if (resultData.success === true) {
      // setChanged(new Date());
      // const jsonValue = JSON.stringify(resultData.data);
      // await AsyncStorage.setItem('user', jsonValue);
      Alert.alert(
        'Success',
        `Votre compte a etait creer merci de consulter votre email`,
        [{ text: 'fermer' }]
      );
      return navigation.navigate('Login')
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

      <View style={{height: WindowHeight * 0.25, width: "100%", paddingHorizontal: "5%", alignItems: 'center',  justifyContent: 'center'}}>
        <Image 
          style={{width: WindowWidth * 0.5, height: WindowWidth * 0.2 }}
          source={ require('../assets/natilait_logo.png')}
        />
        <Text style={{fontSize: 25, color: '#0A66C2', fontWeight: '700'}}>Welcome on Board</Text>
        <Text style={{fontSize: 18, color: '#0A66C2', fontWeight: '600', }}>Sign up on our platform</Text>
      </View>

      <View style={{ width: "100%", paddingHorizontal: "5%", alignItems: 'center', marginTop: "3%", height: WindowHeight * 0.69, flexDirection: 'column',}}>
          
        <Card 
          style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "3%", paddingVertical: "1.5%"}}
        >
          <TextInput
            style={{fontSize: 16}}
            placeholder='Nom' 
            placeholderTextColor='#919191'
            autoCapitalize='none'
            onChangeText={(text) => setNom(text)}
          />
        </Card> 
        <View style={{height: "3%"}}></View>
        <Card 
          style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "3%", paddingVertical: "1.5%"}}
        >
          <TextInput
            style={{fontSize: 16}}
            placeholder='Prenom' 
            placeholderTextColor='#919191'
            autoCapitalize='none'
            onChangeText={(text) => setPrenom(text)}
          />
        </Card> 
        <View style={{height: "3%"}}></View>
        <Card 
          style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "3%", paddingVertical: "1.5%"}}
        >
          <TextInput
            style={{fontSize: 16}}
            placeholder='Adress' 
            placeholderTextColor='#919191'
            autoCapitalize='none'
            onChangeText={(text) => setAdress(text)}
          />
        </Card> 
        <View style={{height: "3%"}}></View>
        <Card 
          style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "3%", paddingVertical: "1.5%"}}
        >
          <TextInput
            style={{fontSize: 16}}
            placeholder='Email' 
            placeholderTextColor='#919191'
            autoCapitalize='none'
            keyboardType='email-address'
            onChangeText={(text) => setEmail(text)}
          />
        </Card> 
        <View style={{height: "3%"}}></View>
        <Card 
          style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "3%", paddingVertical: "1.5%"}}
        >
          <TextInput
            style={{fontSize: 16}}
            placeholder='Phone Number' 
            placeholderTextColor='#919191'
            autoCapitalize='none'
            keyboardType='number-pad'
            onChangeText={(text) => setTel(text)}
          />
        </Card> 
        <View style={{height: "3%"}}></View>
        {/* <Card 
          style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "3%", paddingVertical: "1.5%"}}
        >
          <TextInput
            style={{fontSize: 16}}
            placeholder='Password' 
            placeholderTextColor='#919191'
            autoCapitalize='none'
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </Card>  */}

        <TouchableOpacity  
          style={{marginTop: "8%"}} 
          onPress={register}  
        >
          <Card 
            style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "10%", paddingVertical: "3%", alignItems: 'center'}}
          >
            <Text style={{fontSize: 18, color: '#000576', fontWeight: '700'}}>SignUp</Text>
          </Card>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginTop: '1%' }}>
          <Text style={{fontSize: 16, color: '#808389'}}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{fontSize: 16, color: '#000576', fontWeight: '600'}} >Log In</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{width: "100%", paddingHorizontal:  WindowWidth * 0.15, flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%'}}>
          <TouchableOpacity style={{ alignSelf: 'flex-start'}} >
            <Card 
              style={{ width: WindowWidth * 0.1, backgroundColor: "#fff", borderRadius: 5, alignItems: 'center'}}
            >
              <FontAwesome name='facebook-square' size={35} color='#129AF7' />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ alignSelf: 'flex-start'}} 
              
          >
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

export default SignUp

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
