import React, { useState, useEffect, useContext} from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { MainContext } from '../Hooks/Context/MainContext';
const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const Suggestion = () => {

  const {auth} = useContext(MainContext);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);

  const fetchData = async () => {

    let result = await axios.post(`${path}suggestion`, {id: auth._id });

    // let resultData = await result.json();

    if (result.data.success === true) {
      setHistory(result.data.data);
    } else {
      Alert.alert("Error", result.data.message, [
        { text: "fermer" },
      ]);

    }

  }

  useEffect(() => {
    fetchData();
  }, [])
  
  const submit = async () => {

    const options = {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: message,
        userid: auth._id
      })

      
    };

    let result = await fetch(`${path}suggestion/add`, options);

    let resultData = await result.json();

    if (resultData.success === true) {
      Alert.alert("Success", resultData.message, [
        { text: "fermer" },
      ]);
      fetchData();
      setMessage('');
    } else {
      Alert.alert("Error", resultData.message, [
        { text: "fermer" },
      ]);

    }
  }

  
  return (
    <SafeAreaView>
        <ScrollView>
      <View style={{padding: "3%"}}>
        <TextInput
          style={{ marginBottom: "0%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
          onChangeText={(text) => setMessage(text)}
          value={message}
          multiline
          editable
          maxLength={400}
          numberOfLines={6}
          placeholderTextColor='#6d6e6e'
          placeholder="Share your suggestions"
          keyboardType="default"
        />

        <TouchableOpacity 
          style={{width: "40%", alignSelf: 'center', backgroundColor: '#219EBA',  paddingVertical: "3%", marginTop: "5%", alignSelf: 'flex-start', borderRadius: 5}}
          onPress={submit}
        >
          <Text style={{fontWeight: '900', color: 'white', alignSelf: 'center', fontSize: 16}}>Suggest</Text>
        </TouchableOpacity>
      </View >

      <View style={{paddingBottom: "5%", paddingLeft: '4%'}} >
        <Text style={{fontSize: 23, fontWeight: '600'}} >Your suggestions : </Text>
      </View>
      {history.length === 0 ? 
        <View style={{width: '100%', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'gray'}} >No suggestion yet</Text>
        </View>
      : null }
  
        {history.map(({message, date}, idx) => {
          return(
            <View key={idx}>
              {/* sugg item ///// */}
              <View style={{width: "100%", alignItems: 'center', flexDirection: 'row' }}>
                  
                  <View style={{ width: "100%", justifyContent: 'space-between', paddingHorizontal: "3%"  }}>
                
                    <Text style={{ fontSize: 18, }}> {message}</Text>
                    <Text style={{ fontSize: 12, color: '#505050' }}> {date}</Text>

                  </View>
              </View>
              <View  style={{width: "85%", alignSelf: 'center', borderColor: '#C0C0C0', borderWidth: 1, marginVertical: "2%"}} />
            </View>
          )
        })}
        
      </ScrollView>

    </SafeAreaView>
  )
}

export default Suggestion