import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from 'react-native-shadow-cards';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const Splach = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(166,223,240, 0.8)', 'transparent']}
        style={styles.background}
      />

      <View style={{height: WindowHeight * 0.5, width: "100%", paddingHorizontal: "5%", alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 35, color: '#0A66C2', fontWeight: '700', marginBottom: "10%"}}>Reclamation</Text>
        <Image 
          style={{width: WindowWidth * 0.7, height: WindowWidth * 0.3 }}
          source={ require('../assets/natilait_logo.png')}
        />
      </View>

      <View style={{height: WindowHeight * 0.46, width: "100%", paddingHorizontal: "5%", alignItems: 'center', marginTop: "3%"}}>

        <Text style={{fontSize: 20, color: '#0A66C2', fontWeight: '700', marginBottom: "10%"}}>We Listen To you!!</Text>
          
        <TouchableOpacity 
          style={{marginBottom: "10%"}}
          onPress={() => navigation.navigate('Login')}    
        >
          <Card 
            style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "10%", paddingVertical: "3%", alignItems: 'center'}}
          >
            <Text style={{fontSize: 18, color: '#000576', fontWeight: '700'}}>Log In</Text>
          </Card>
        </TouchableOpacity>
          
        <TouchableOpacity  
          style={{marginBottom: "10%"}} 
          onPress={() => navigation.navigate('Signup')}
        >
          <Card 
            style={{width: WindowWidth *0.85, backgroundColor: "#fff", borderRadius: 15, paddingHorizontal: "10%", paddingVertical: "3%", alignItems: 'center'}}
          >
            <Text style={{fontSize: 18, color: '#000576', fontWeight: '700'}}>Sign Up</Text>
          </Card>
        </TouchableOpacity>
        
        <View style={{width: "100%", paddingHorizontal:  WindowWidth * 0.2, flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Splach

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