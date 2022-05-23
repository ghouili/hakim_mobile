import React, {useState, useEffect, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FAB } from 'react-native-paper';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { MainContext } from '../../Hooks/Context/MainContext';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const Services = ({  navigation }) => {
  
    const { auth } = useContext(MainContext);
    const [data, setData] = useState([]);

    const fetch_reclamations = async () => {
        // console.log(auth._id);
        let result = await fetch(`${path}service`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: auth._id
            })
        });

        let resultData = await result.json();
        // console.log(resultData.data);

        if (!resultData){
            return Alert.alert(
                'ERROR',
                "Something went Wrng",
                [{ text: 'fermer' }]
            );
        }
        if(resultData.message === 'success') {
            setData(resultData.data);
        }
    }

    useEffect(() => {
        fetch_reclamations();
    }, []);
    


    const Delete_Reclam = async (id) => {

        const options = {
            method: "DELETE",
        };
        let result = await fetch(`${path}service/${id}`, options);

        let resultData = await result.json();

        if (resultData.success === true) {
            Alert.alert(
                'Deleted',
                resultData.message,
                [{ text: 'fermer' }]
            );
        } else {
            Alert.alert(
                'Error',
                resultData.message,
                [{ text: 'fermer' }]
            );

        }
        fetch_reclamations();
    }
    
  return (
    <SafeAreaView style={{ flex: 1}}>
        <LinearGradient
            // Background Linear Gradient
            colors={['rgba(166,223,240, 0.8)', 'transparent']}
            style={styles.background}
        />
        <ScrollView>
        {/* <TouchableOpacity
            style={{width: "100%", alignItems: 'flex-end', paddingHorizontal: "5%", paddingVertical: "3%"}}
            onPress={() => navigation.navigate('Add-Reclam')}
        >
            <AntDesign name='pluscircleo' size={30} color='#000' />
        </TouchableOpacity> */}
            {data.length === 0 ? 
                <View style={{width: '100%', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'gray'}} >No Reclamations yet</Text>
                </View>
            : null }
            {data.map((item, index) => {
                return(
                    <View key={index}>
                        {/* item ::::: */}
                        <View style={{width: "100%", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity
                                style={{width: "45%"}}
                                onPress={() => navigation.push('Detail-Reclam', {id: item._id})}
                            >
                                <Image  
                                    style={{ width: "100%", height: WindowHeight * 0.2, resizeMode: 'contain', borderRadius: 15}}
                                    source={{ uri : `${path}uploads/images/${item.image}`}} 
                                />
                            </TouchableOpacity>
                            <View style={{ width: "50%", justifyContent: 'space-between',  }}>
                                
                                <View style={{marginTop: "5%", paddingRight: "1%" }}>
                                    <Text numberOfLines={2} style={{ fontSize: 15, }}> {item.problem}</Text>
                                    <Text style={{ fontSize: 11, color: '#505050' }}> {item.date}</Text>
                                </View>
                                {!item.affected && 
                                    <View style={{width: "100%", flexDirection: 'row', marginTop: "5%"}}>
                                        <TouchableOpacity
                                            style={{width: "50%",alignItems: 'center', alignContent: 'center'}}
                                            onPress={() => navigation.push('Edit-Reclam', {id: item._id})}
                                        >
                                            <AntDesign name='edit' size={25} color='#6495ED' />
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity
                                            style={{width: "50%",alignItems: 'center', alignContent: 'center'}}
                                            onPress={() => Delete_Reclam(item._id)}
                                        >
                                            {/* <AntDesign name='delete' size={30} color='#000' /> */}
                                            <Ionicons name='trash-outline' size={25} color='#986868' />
                                        </TouchableOpacity>

                                    </View>
                                }
                            </View>
                        </View>
                        <View  style={{width: "85%", alignSelf: 'center', borderColor: '#C0C0C0', borderWidth: 1, marginVertical: "2%"}} />
                    </View>
                );
            })}
            

            
        </ScrollView>
        <FAB
            style={styles.fab}
            // small
            icon="plus"
            color='#fff'
            onPress={() => navigation.navigate('Add-Reclam')}
            // onPress={() => console.log('Pressed')}
        />
    </SafeAreaView>
  )
}

export default Services

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: WindowHeight ,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#219EBA'
      },
})