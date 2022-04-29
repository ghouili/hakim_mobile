import React, { useContext, } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from 'react-native-shadow-cards';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MainContext } from '../Hooks/Context/MainContext';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const SignUp = ({ navigation }) => {

  const { setAuth } = useContext(MainContext);

  return (
    <SafeAreaView style={styles.container}>
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
          />
        </Card> 
        <View style={{height: "3%"}}></View>
        <Card 
          style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "3%", paddingVertical: "1.5%"}}
        >
          <TextInput
            style={{fontSize: 16}}
            placeholder='Password' 
            placeholderTextColor='#919191'
            autoCapitalize='none'
          />
        </Card> 

        <TouchableOpacity  
          style={{marginTop: "8%"}} 
          onPress={() => setAuth(true)}  
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

        <View style={{width: "100%", paddingHorizontal:  WindowWidth * 0.15, flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%'}}>
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
        </View>
        
      </View>

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
