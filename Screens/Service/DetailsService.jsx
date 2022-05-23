import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Image, Dimensions, TouchableOpacity   } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';  
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from 'react-native-shadow-cards';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const WindowHeight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;

const DetailsService = ({ route, navigation }) => {

    let { id } = route.params;
    // let id = '626aa21b47bd7eda0ae7ccfe';
    const [data, setData] = useState({
        type: '',
        date: '',
        place: '',
        problem: '',
        image: '',
        userid: '',
        _id: '',
    });

    const fetchData = async () => {

        let result = await fetch(`${path}service/${id}`);

        let resultData = await result.json();
        // console.log('id sent : ' + route.params.id);

        if (resultData.success === true ){
            setData(resultData.data)
        } else {
            Alert.alert(
                'ERROR',
                "Something went Wrng",
                [{ text: 'fermer' }]
            );
        }

    }

    useEffect(() => {

        fetchData();
    }, [])
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(166,223,240, 0.8)', 'transparent']}
                style={styles.background}
            />
            <ScrollView>
                <TouchableOpacity
                    style={{width: "100%", alignItems: 'flex-start', paddingHorizontal: "5%", paddingVertical: "3%"}}
                    onPress={() => navigation.navigate('Reclams')}
                >
                    <Ionicons name='arrow-back-circle-outline' size={35} color='#000' />
                </TouchableOpacity>
                <Card style={{width: '90%', paddingTop: 10, marginTop: 10, marginHorizontal: '5%', paddingBottom: 10, marginBottom: 20 }}>
                   
                    <Image
                        style={{width: '90%', height: 250, resizeMode: 'contain',  alignSelf: 'center', borderRadius: 10,  }}
                        source={{ uri: `${path}uploads/images/${data.image}`}}
                    />
                    
                    <View style={{width: '100%', paddingHorizontal: '5%',flexDirection: 'row', justifyContent: 'space-between'  }}>
                        
                        <Text style={{fontSize: 20}} >{data.type}</Text>
                        <Text style={{fontSize: 15, color: 'blue'}} >{data.date}</Text>
                        
                    </View>
                    <View style={{width: '100%', paddingHorizontal: '4%',flexDirection: 'row', marginTop: 5 }}>
                        <MaterialIcons name='location-pin' size={25} color='grey'  />
                        <Text style={{fontSize: 20}} >{data.place}</Text>
                    </View>

    
                    <View style={{width: '100%', paddingHorizontal: '4%', marginTop: 5 }}>
                        <Text style={{fontSize: 20, color: 'blue'}} >Problem: </Text>
                        <Text style={{fontSize: 20, textAlign: 'justify'}} >{data.problem} </Text>
                        {/* <Text style={{fontSize: 20, textAlign: 'justify'}} >{data.problem} Peace Peace  PeacePeaceP eacePe acePeace Peace Peace Peace Peace PeacePeace PeacePeace Peace Peace Peace Peace  PeacePeaceP eacePe acePeace Peace Peace Peace Peace PeacePeace PeacePeace Peace Peac Peace Peace  PeacePeaceP eacePe acePeace Peace Peace Peace Peace PeacePeace PeacePeace Peace Peac Peace Peace  PeacePeaceP eacePe acePeace Peace Peace Peace Peace PeacePeace PeacePeace Peace Peac Peace Peace  PeacePeaceP eacePe acePeace Peace Peace Peace Peace PeacePeace PeacePeace Peace Peac Peace Peace  PeacePeaceP eacePe acePeace Peace Peace Peace Peace PeacePeace PeacePeace Peace Peac Peace Peace  PeacePeaceP eacePe acePeace Peace Peace Peace Peace PeacePeace PeacePeace Peace Peac Peace Peace  PeacePeaceP eacePe acePeace Peace Peace Peace Peace PeacePeace PeacePeace Peace Peac</Text> */}
                    </View>
    
    
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
    
}

export default DetailsService

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: WindowHeight ,
    },
})
            