import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'


const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(166,223,240, 0.8)', 'transparent']}
        style={styles.background}
      />
      <ScrollView>
        <View style={{width: "90%", paddingHorizontal: "3%", marginTop: '10%', marginHorizontal: '5%', borderRadius: 10, backgroundColor: 'white', borderWidth: 3, borderColor: '#add8e6'}}>
          {/* <Text style={{ fontSize: 35, alignSelf: 'center', marginTop: "3%", fontWeight: 'bold', color: '#191970'}}>Natilait</Text> */}
          <Image 
            style={{width: WindowWidth * 0.7, height: 150, resizeMode: 'contain', alignSelf: 'center', borderRadius: 10 }}
            source={ require('../assets/natilait_logo.png')}
          />
          <Text style={{ fontSize: 20, marginTop: "5%"}}>Notre objectif est de repondre aux attendres de toutes les parties interessees pertinentes et de satisfaire leurs besoins autorites competentes et administration clients et consomateurs ,personnel et prestataires externes.</Text>
          <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>

          <Image 
            style={{width: '48%', height: WindowWidth * 0.3, alignSelf: 'center', borderRadius: 10}}
            source={ require('../assets/shake.jpeg')}
          />
          <Image 
            style={{width: '48%', height: WindowWidth * 0.3, alignSelf: 'center', borderRadius: 10 }}
            source={ require('../assets/unnion.jpeg')}
          />
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: WindowHeight ,
  },
})