import React, {useState, } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const AddReclamation = ({ navigation }) => {

    const [image, setImage] = useState(null);


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
          setImage(result.uri);
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
          setImage(result.uri);
        }
    };

  return (
    <SafeAreaView>
      <TouchableOpacity
            style={{width: "100%", alignItems: 'flex-start', paddingHorizontal: "5%", paddingVertical: "3%"}}
            onPress={() => navigation.navigate('Reclams')}
        >
            <Ionicons name='arrow-back-circle-outline' size={35} color='#000' />
        </TouchableOpacity>

        <ScrollView>
            <View style={{ paddingHorizontal: "5%", paddingTop: "5%", marginBottom: "20%"}}>
                <View style={{width: "100%", flexDirection: 'row', justifyContent: 'space-between'}}>
                    {image ? (
                        <>
                            <Image
                                style={{width: "100%", aspectRatio: 4/3, borderRadius: 5, resizeMode: 'contain' }}
                                source={{ uri: image }} 
                            />    
                        </>
                    ): 
                        <>
                            <TouchableOpacity
                                style={{width: "47.5%", backgroundColor: 'rgba(230,238,241,1)', justifyContent: 'center', alignItems: 'center', height: WindowHeight * 0.2,borderWidth: 1, borderColor: 'white', borderRadius: 5}}
                                onPress={pickCamera}
                            >
                                <Ionicons name='camera-outline' color='black' size={40} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "47.5%", backgroundColor: 'rgba(230,238,241,1)', justifyContent: 'center', alignItems: 'center', height: WindowHeight * 0.2,borderWidth: 1, borderColor: 'white', borderRadius: 5}}
                                onPress={pickImage}
                            >
                                <EvilIcons name='image' color='black' size={50} />
                            </TouchableOpacity>
                        </>
                    }
                </View>

                <View style={{marginTop: "5%"}}>
                    
                    <TextInput
                        style={{height: WindowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                        // onChangeText={(text) => setCin(text)}
                        // value={number}
                        placeholderTextColor='#6d6e6e'
                        placeholder="Product Name"
                        keyboardType="numeric"
                    />
                    
                    <TextInput
                        style={{height: WindowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700', width: "50%"}}
                        // onChangeText={(text) => setCin(text)}
                        // value={number}
                        placeholderTextColor='#6d6e6e'
                        placeholder="How Many"
                        keyboardType="numeric"
                    />
                  

                    
                    <TextInput
                        style={{ marginBottom: "0%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                        // onChangeText={(text) => setName(text)}
                        // value={number}
                        multiline
                        editable
                        maxLength={400}
                        numberOfLines={6}
                        placeholderTextColor='#6d6e6e'
                        placeholder="Whats's wrong with the product ?"
                        keyboardType="numeric"
                    />
                    
                </View>

                <TouchableOpacity 
                    style={{width: "40%", alignSelf: 'center', backgroundColor: '#219EBA',  paddingVertical: "3%", marginTop: "5%", alignSelf: 'flex-start', borderRadius: 5}}
                    // onPress={CreateNotes}
                >
                    <Text style={{fontWeight: '900', color: 'white', alignSelf: 'center', fontSize: 16}}>Save</Text>
                </TouchableOpacity>
                
                {/* <View  style={{ height: "40%"}} /> */}
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default AddReclamation