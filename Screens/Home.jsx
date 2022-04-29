import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
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
      <View style={{width: "100%", paddingHorizontal: "3%"}}>
        {/* <Text style={{ fontSize: 25, alignSelf: 'center', marginBottom: "3%"}}>Natilait</Text> */}
        <Image 
          style={{width: WindowWidth * 0.7, height: WindowWidth * 0.3, alignSelf: 'center' }}
          source={ require('../assets/natilait_logo.png')}
        />
        <Text style={{ fontSize: 16, marginTop: "5%"}}>Depuis sa naissance, la marque 100% tunisienne NATILAIT apporte chaque jour, naturellement, des touches de plaisir dans le quotidien des petits et des grands. Et c’est dans le bassin du nord de la Tunisie, l'un des meilleurs lieux de pâturage, qu’elle continue à cultiver son savoir-faire et à innover en fabriquant de nouveaux produits. Présente dans notre quotidien, NATILAIT s’est donné pour mission de satisfaire toujours mieux les attentes de ses consommateurs, en offrant des produits de qualité, sains et savoureux tout en construisant une aventure humaine, sincère au sein d'une entreprise citoyenne.</Text>
      </View>

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