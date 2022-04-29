import React, {useState, useContext, useEffect } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, TextInput, Alert, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Picker} from '@react-native-picker/picker';
import mime from 'mime';
import { MainContext } from '../../Hooks/Context/MainContext';


const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const EditReclamation = ({ route, navigation }) => {

    let { id } = route.params;

    const { auth } = useContext(MainContext);
    const [new_image, setNew_image] = useState(null);
    const [image, setImage] = useState(null);
    const [product, setProduct] = useState('');
    const [nbr, setNbr] = useState('');
    const [problem, setProblem] = useState('');
    const [type, setType] = useState('');
    const [place, setPlace] = useState();
    const [autre_text, setAutre_text] = useState('');

    const fetchData = async () => {

        let result = await fetch(`${path}reclamation/${id}`);

        let resultData = await result.json();
        // console.log('id sent : ' + route.params.id);

        if (resultData.success === true ){
            
            setImage(resultData.data.image);
            setProduct(resultData.data.product);
            setNbr(resultData.data.nbr);
            setProblem(resultData.data.problem);
            setType(resultData.data.type);
            setPlace(resultData.data.place);
            // setAutre_text(resultData.data.type);
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

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            setNew_image(result);
        }
    };
    
    const pickCamera = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            setNew_image(result);
        }
    };

    const Submit = async () => {

        const url = `${path}reclamation/${id}`;

        const formData = new FormData();
        if(new_image) {
            const fileUri = new_image.uri;
            const newImageUri = "file:///" + fileUri.split("file:/").join("");
            formData.append("image", {
            uri: newImageUri,
            type: mime.getType(newImageUri),
            name: newImageUri.split("/").pop(),
            });
        }
        formData.append("product", product);
        formData.append("nbr", nbr);
        formData.append("problem", problem);
        if (type === 'autre'){
            
            formData.append("type", autre_text);
        } else {
            formData.append("type", type);
        }
        formData.append("place", place);
        // formData.append("userid", '625be2fe1b5c1b37f9b4617f');
        formData.append("userid", auth._id);
        
        const options = {
            method: "PATCH",
            body: formData,
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
            },
        };
        console.log(formData);

        let response = await fetch( url, options);

        let result = await response.json();
        console.log('====================================');
        console.log(result);
        console.log('====================================');
        if (result.success === true ) {
            Alert.alert("Success", "Reclamation a etait ajouter succes", [
            { text: "fermer" },
            ]);
            setNew_image(null)
            setImage(null);
            setProduct('');
            setNbr('');
            setProblem('');
            setType('');
            setPlace('');
            setAutre_text('');
            navigation.push('Reclams');
        } else {
            Alert.alert("Error", result.message, [
            { text: "fermer" },
            ]);
        }
        
    }


  return (
    <SafeAreaView>
        <LinearGradient
            // Background Linear Gradient
            colors={['rgba(166,223,240, 0.8)', 'transparent']}
            style={styles.background}
        />
        <TouchableOpacity
            style={{width: "100%", alignItems: 'flex-start', paddingHorizontal: "5%", paddingVertical: "3%"}}
            onPress={() => navigation.navigate('Reclams')}
        >
            <Ionicons name='arrow-back-circle-outline' size={35} color='#000' />
        </TouchableOpacity>

        <ScrollView>
            <View style={{ paddingHorizontal: "5%", paddingTop: "5%", marginBottom: "20%"}}>
            {new_image ? (

                <Image
                    style={{width: "100%", aspectRatio: 4/3, borderRadius: 5, resizeMode: 'contain' }}
                    // source={{ uri: `${path}uploads/images/${image}` }} 
                    source={{ uri: new_image.uri }} 
                />    
            ): 
                <>
                    <Image
                        style={{width: "100%", aspectRatio: 4/3, borderRadius: 5, resizeMode: 'contain' }}
                        source={{ uri: `${path}uploads/images/${image}` }} 
                    />    
                    <View style={{width: "100%", flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                        <TouchableOpacity
                            style={{width: "27.5%", backgroundColor: 'rgba(230,238,241,1)', justifyContent: 'center', alignItems: 'center', height: WindowHeight * 0.1,borderWidth: 1, borderColor: 'white', borderRadius: 5}}
                            onPress={pickCamera}
                        >
                            <Ionicons name='camera-outline' color='black' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{width: "27.5%", backgroundColor: 'rgba(230,238,241,1)', justifyContent: 'center', alignItems: 'center', height: WindowHeight * 0.1,borderWidth: 1, borderColor: 'white', borderRadius: 5}}
                            onPress={pickImage}
                        >
                            <EvilIcons name='image' color='black' size={50} />
                        </TouchableOpacity>
                    </View>
                </>
            }

                <View style={{marginTop: "5%"}}>
                    
                    <TextInput
                        style={{height: WindowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                        onChangeText={(text) => setProduct(text)}
                        value={product}
                        placeholderTextColor='#6d6e6e'
                        placeholder="Product Name"
                        keyboardType="default"
                    />
                    
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: "4%"}} >
                        <TextInput
                            style={{height: WindowHeight * 0.06, marginBottom: "0%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700', width: "47%"}}
                            onChangeText={(text) => setNbr(text)}
                            value={nbr}
                            placeholderTextColor='#6d6e6e'
                            placeholder={`${nbr}`}
                            keyboardType="numeric"
                        />

                        <View style={{borderWidth: 1, borderColor: 'white', width: '47%', borderRadius: 5}} >
                            <Picker
                                style={{height: WindowHeight * 0.06, borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700', width: "100%"}}
                                selectedValue={type}
                                onValueChange={(itemValue, itemIndex) =>
                                    setType(itemValue)
                                }
                                // mode='dropdown'
                            >
                                <Picker.Item label="Type 01" value="01" />
                                <Picker.Item label="Type 02" value="02" />
                                <Picker.Item label="Type 03" value="03" />
                                <Picker.Item label="autre" value="autre" />
                            </Picker>
                        </View>
                    </View>

                { type === 'autre' ?  
                    <TextInput
                        style={{height: WindowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                        onChangeText={(text) => setAutre_text(text)}
                        value={autre_text}
                        placeholderTextColor='#6d6e6e'
                        placeholder="Autre type... "
                        keyboardType="default"
                    />

                : null }

                <TextInput
                    style={{height: WindowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                    onChangeText={(text) => setPlace(text)}
                    value={place}
                    placeholderTextColor='#6d6e6e'
                    placeholder="Place "
                    keyboardType="default"
                />
                    
                    
                    <TextInput
                        style={{ marginBottom: "0%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                        onChangeText={(text) => setProblem(text)}
                        value={problem}
                        multiline
                        editable
                        maxLength={400}
                        numberOfLines={6}
                        placeholderTextColor='#6d6e6e'
                        placeholder="Whats's wrong with the product ?"
                        keyboardType="default"
                    />
                    
                </View>

                <TouchableOpacity 
                    style={{width: "40%", alignSelf: 'center', backgroundColor: '#219EBA',  paddingVertical: "3%", marginTop: "5%", alignSelf: 'flex-start', borderRadius: 5}}
                    onPress={Submit}
                >
                    <Text style={{fontWeight: '900', color: 'white', alignSelf: 'center', fontSize: 16}}>Save</Text>
                </TouchableOpacity>
                
                {/* <View  style={{ height: "40%"}} /> */}
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default EditReclamation

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: WindowHeight ,
    },
})