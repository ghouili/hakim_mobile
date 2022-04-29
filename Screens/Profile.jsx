import React, {useState, useEffect, useContext} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Dimensions, Alert, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAB } from 'react-native-paper';
import { Dialog } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';

import { MainContext } from '../Hooks/Context/MainContext';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const Profile = () => {

    const { auth, setChanged } = useContext(MainContext);
    const [password, setPassword] = useState(null);
    const [visible1, setVisible1] = useState(false);
    const [image, setImage] = useState(null);
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [tel, setTel] = useState('')
    

    const toggleDialog1 = () => {
        setVisible1(!visible1);
    };

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
          setImage(result);
          toggleDialog1();
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
          setImage(result);
          toggleDialog1();
        }
    };


    const fetchData = async () => {
        console.log(auth);
        let result = await fetch(`${path}user/${auth._id}`);

        let resultData = await result.json();
        // console.log('id sent : ' + route.params.id);

        if (resultData.success === true ){
            setNom(resultData.data.nom);
            setPrenom(resultData.data.prenom);
            setEmail(resultData.data.email);
            setAvatar(resultData.data.avatar);
            setTel(resultData.data.tel);
        } else {
            Alert.alert(
                'ERROR',
                "Something went Wrng",
                [{ text: 'fermer' }]
            );
        }

    };

    useEffect(() => {
        fetchData();
    }, []);

    const logout = async () => {
        await AsyncStorage.removeItem('user');
        setChanged('logedout');
    }


    const Submit = async () => {

        const url = `${path}user/${auth._id}`;
        const formData = new FormData();
        if(image) {
            const fileUri = image.uri;
            const newImageUri = "file:///" + fileUri.split("file:/").join("");
            formData.append("avatar", {
            uri: newImageUri,
            type: mime.getType(newImageUri),
            name: newImageUri.split("/").pop(),
            });
        }
        if (password) {
            formData.append("password", password);
        }
        formData.append("nom", nom);
        formData.append("email", email);
        formData.append("prenom", prenom);
        formData.append("tel", tel);
        
        
        const options = {
            method: "PATCH",
            body: formData,
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
            },
        };
        // console.log(formData);

        let response = await fetch( url, options);

        let result = await response.json();
        console.log('====================================');
        console.log(result);
        console.log('====================================');
        if (result.success === true ) {
            Alert.alert("Success", result.message, [
            { text: "fermer" },
            ]);
            fetchData();
            
        } else {
            Alert.alert("Error", result.message, [
            { text: "fermer" },
            ]);
        }
        
    }
    

  return (
    <SafeAreaView style={{flex:1}}>
        <LinearGradient
            // Background Linear Gradient
            colors={['rgba(166,223,240, 0.8)', 'transparent']}
            style={styles.background}
        />
        <View style={{width: '100%', padding: 10}}>
            <View style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity 
                    style={{width: '25%'}}
                    onPress={toggleDialog1}
                >
                    {image ?
                        <Image  
                            style={{width: '100%', height: 80, borderRadius: 150}}
                            source={{ uri: image.uri }}
                        /> 
                    :
                        <Image  
                            style={{width: '100%', height: 80, borderRadius: 150}}
                            source={{ uri: `${path}uploads/images/${avatar}`}}
                        /> 
                    }
                </TouchableOpacity>
                <TextInput
                    style={{width: '33%', height: WindowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                    onChangeText={(text) => setNom(text)}
                    value={nom}
                    placeholderTextColor='#6d6e6e'
                    placeholder="Nom"
                    keyboardType="default"
                />
                <TextInput
                    style={{width: '33%', height: WindowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                    onChangeText={(text) => setPrenom(text)}
                    value={prenom}
                    placeholderTextColor='#6d6e6e'
                    placeholder="Prenom"
                    keyboardType="default"
                />
            </View>
            <View style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10}}>
                <TextInput
                    style={{width: '100%', height: WindowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                    // onChangeText={(text) => setEma({ prenom : text})}
                    value={email}
                    placeholderTextColor='#6d6e6e'
                    placeholder="Email"
                    keyboardType="default"
                    editable={false}
                />
                
                <TextInput
                    style={{width: '100%', height: WindowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                    onChangeText={(text) => setTel(text)}
                    value={tel}
                    placeholderTextColor='#6d6e6e'
                    placeholder={`${tel}`}
                    keyboardType="default"
                />
            
                <TextInput
                    style={{width: '100%', height: WindowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                    onChangeText={(text) => setPassword(text)}
                    // value={data.email}
                    placeholderTextColor='#6d6e6e'
                    placeholder="Password"
                    keyboardType="default"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity 
                    style={{width: "40%", alignSelf: 'center', backgroundColor: '#219EBA',  paddingVertical: "3%", marginTop: "5%", alignSelf: 'flex-start', borderRadius: 5}}
                    onPress={Submit}
                >
                    <Text style={{fontWeight: '900', color: 'white', alignSelf: 'center', fontSize: 16}}>Save</Text>
                </TouchableOpacity>

        </View>
        <FAB
            style={styles.fab}
            // small
            icon="logout"
            color='#fff'
            onPress={logout}
            // onPress={() => console.log('Pressed')}
        />
        <Dialog
            isVisible={visible1}
            onBackdropPress={toggleDialog1}
        >
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding:0, margin: 0}}>
                <TouchableOpacity
                    onPress={pickImage}
                >
                    <Ionicons name='image-outline' size={45}  />
                    <Text>Gellery</Text>
                </TouchableOpacity>
                <View style={{height: '100%', borderWidth: 1, borderColor: 'grey'}} />
                <TouchableOpacity
                    onPress={pickCamera}
                >
                    <Ionicons name='camera-outline' size={45}  />
                    <Text>Camera</Text>
                </TouchableOpacity>
            </View>
        </Dialog>
    </SafeAreaView>
  )
}

export default Profile

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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#219EBA'
    },
})