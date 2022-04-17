import React, {useState, useEffect} from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const Reclamation = ({ navigation }) => {

    const [data, setData] = useState([]);

    const fetch_reclamations = async () => {

        let result = await fetch(`${path}reclamation`);

        let resultData = await result.json();
        console.log(resultData.data);

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
    }, [])
    
  return (
    <SafeAreaView>
        <TouchableOpacity
            style={{width: "100%", alignItems: 'flex-end', paddingHorizontal: "5%", paddingVertical: "3%"}}
            onPress={() => navigation.navigate('Add-Reclam')}
        >
            <AntDesign name='pluscircleo' size={30} color='#000' />
        </TouchableOpacity>
        <ScrollView>
            {data.map((item, index) => {
                return(
                    <View key={item._id}>
                        {/* item ::::: */}
                        <View style={{width: "100%", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity
                                style={{width: "45%"}}
                            >
                                <Image  
                                    style={{ width: "100%", height: WindowHeight * 0.2, resizeMode: 'contain', borderRadius: 15}}
                                    source={{ uri : `${path}uploads/images/${item.image}`}} 
                                />
                            </TouchableOpacity>
                            <View style={{ width: "50%", justifyContent: 'space-between',  }}>
                                <Text style={{ fontSize: 18, color: '#133C8B', fontWeight: '700' }}>{item.prod_name}</Text>
                                <View style={{marginTop: "5%", paddingRight: "1%" }}>
                                    <Text style={{ fontSize: 15, }}> {item.reason}</Text>
                                    <Text style={{ fontSize: 11, color: '#505050' }}> {item.date}</Text>
                                </View>
                                <View style={{width: "100%", flexDirection: 'row', marginTop: "5%"}}>
                                    <TouchableOpacity
                                        style={{width: "50%",alignItems: 'center', alignContent: 'center'}}
                                    >
                                        <AntDesign name='edit' size={25} color='#6495ED' />
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity
                                        style={{width: "50%",alignItems: 'center', alignContent: 'center'}}
                                    >
                                        {/* <AntDesign name='delete' size={30} color='#000' /> */}
                                        <Ionicons name='trash-outline' size={25} color='#986868' />
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                        <View  style={{width: "85%", alignSelf: 'center', borderColor: '#C0C0C0', borderWidth: 1, marginVertical: "2%"}} />
                    </View>
                );
            })}
            

            
        </ScrollView>
    </SafeAreaView>
  )
}

export default Reclamation