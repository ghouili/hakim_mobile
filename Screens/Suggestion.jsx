import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const Suggestion = () => {
  return (
    <SafeAreaView>
      <View style={{padding: "3%"}}>
        <TextInput
          style={{ marginBottom: "0%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 5, backgroundColor: 'rgba(230,238,241,1)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
          // onChangeText={(text) => setName(text)}
          // value={number}
          multiline
          editable
          maxLength={400}
          numberOfLines={6}
          placeholderTextColor='#6d6e6e'
          placeholder="Share your suggestions"
          keyboardType="numeric"
        />

        <TouchableOpacity 
          style={{width: "40%", alignSelf: 'center', backgroundColor: '#219EBA',  paddingVertical: "3%", marginTop: "5%", alignSelf: 'flex-start', borderRadius: 5}}
          // onPress={CreateNotes}
        >
          <Text style={{fontWeight: '900', color: 'white', alignSelf: 'center', fontSize: 16}}>Suggest</Text>
        </TouchableOpacity>
      </View >

      <View style={{paddingBottom: "5%", paddingLeft: '4%'}} >
        <Text style={{fontSize: 23, fontWeight: '600'}} >Your suggestions : </Text>
      </View>

      <ScrollView>
        {/* sugg item ///// */}
        <View style={{width: "100%", alignItems: 'center', flexDirection: 'row' }}>
            
            <View style={{ width: "100%", justifyContent: 'space-between', paddingHorizontal: "3%"  }}>
          
              <Text style={{ fontSize: 18, }}> Cette yahourt a depasse la date d'experation.</Text>
              <Text style={{ fontSize: 12, color: '#505050' }}> 15/04/2022</Text>

            </View>
        </View>
        <View  style={{width: "85%", alignSelf: 'center', borderColor: '#C0C0C0', borderWidth: 1, marginVertical: "2%"}} />
        {/* sugg item ///// */}
        <View style={{width: "100%", alignItems: 'center', flexDirection: 'row' }}>
            
            <View style={{ width: "100%", justifyContent: 'space-between', paddingHorizontal: "3%"  }}>
          
              <Text style={{ fontSize: 18, }}> Cette yahourt a depasse la date d'experation Cette yahourt a depasse la date d'experation Cette yahourt a depasse la date d'experation.</Text>
              <Text style={{ fontSize: 12, color: '#505050' }}> 15/04/2022</Text>

            </View>
        </View>
        <View  style={{width: "85%", alignSelf: 'center', borderColor: '#C0C0C0', borderWidth: 1, marginVertical: "2%"}} />
        {/* sugg item ///// */}
        <View style={{width: "100%", alignItems: 'center', flexDirection: 'row' }}>
            
            <View style={{ width: "100%", justifyContent: 'space-between', paddingHorizontal: "3%"  }}>
          
              <Text style={{ fontSize: 18, }}> Cette yahourt a depasse la date d'experation.</Text>
              <Text style={{ fontSize: 12, color: '#505050' }}> 15/04/2022</Text>

            </View>
        </View>
        <View  style={{width: "85%", alignSelf: 'center', borderColor: '#C0C0C0', borderWidth: 1, marginVertical: "2%"}} />
      </ScrollView>

    </SafeAreaView>
  )
}

export default Suggestion