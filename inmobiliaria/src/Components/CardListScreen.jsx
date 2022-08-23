import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import {useFonts, Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular} from '@expo-google-fonts/poppins'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function CardListScreen({name, image, address,numberBedrroms,shower,area,price,star}) {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium, Poppins_600SemiBold,Poppins_400Regular
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
  return (
    <SafeAreaView style={[styles.containerCard, styles.elevation]}>
    <View style={{flexDirection:'row'}}>
 
      <View >
        <Image
        style={{
          width: 107,
          height: 120,
          marginTop:25,
          marginLeft: 15,
          borderRadius: 15,
        }}
        source={{
        uri: image}}
      />
      <View style={{borderRadius:10, padding:4,backgroundColor:'#FBEDB7',flexDirection:'row', alignSelf:'center', marginHorizontal:45, marginVertical:-30}}>
        <Ionicons name='star-sharp' size={16} color='#EEBA00' />
        <Text style={{color:'#907941', fontSize: 12}}>{star}</Text>
      </View>
    </View>
    <View>
      <Text style={{marginTop: 25, marginLeft: 15, fontFamily:'Poppins_500Medium', fontSize: 20}}>{name}</Text>
      <View style={{flexDirection:'row'}}>
        <Ionicons name='location-outline' size={20} style={{marginLeft: 15}}/>
      <Text style={{marginTop: 2, marginLeft: 5, color:'gray', fontFamily:'Poppins_400Regular', fontSize: 14}}>{address}</Text>
      </View>
      <View style={{ flexDirection:'row', justifyContent:'space-evenly'}}>
        <Image source={require('../assets/cama.png')} style={{marginLeft: 15, marginTop:4,width:20, height:18, tintColor:'#4b5563'}}  />
        <Text style={{marginTop: 5,marginLeft:8, fontFamily:'Poppins_500Medium', fontSize: 13}}>{numberBedrroms}</Text>
        <Image source={require('../assets/tina.png')} style={{marginLeft: 15, marginTop:4,width:20, height:18, tintColor:'#4b5563'}}  />
        <Text style={{marginTop: 5,marginLeft: 8, fontFamily:'Poppins_500Medium', fontSize: 13}}>{shower}</Text>
        <Image source={require('../assets/planes.png')} style={{marginLeft: 15, marginTop:4,width:20, height:18, tintColor:'#4b5563'}}  />
        <Text style={{marginTop: 5,marginLeft: 8, fontFamily:'Poppins_500Medium', fontSize: 13}}>{`${area} ft`}</Text>
      </View>
      
      <Text style={{marginTop: 3, marginLeft: 15, fontFamily:'Poppins_500Medium', fontSize: 18}}>{`$${price}/m`}</Text>
      </View>
      <View style={{flexDirection:'column',alignSelf:'center', marginTop:42 }}><Text style={{ fontSize:9, fontFamily:'Poppins_500Medium'}}>2</Text></View>
  </View>
    <LottieView
      autoPlay
      loop
      style={{
      width: 40,
      height: 40,
      position:'absolute',
      marginTop: 5,
      marginLeft: 150,
      }}
      source={require('../assets/home.json')}
    />
  </SafeAreaView>
  )
                  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCard:{
    marginTop:12,
    height: 165,
    width: '98%',
    backgroundColor:'white',
    borderRadius:15,
    marginBottom:4
  },
  elevation:{
    elevation: 10,
    shadowColor: '#581c87',
    shadowRadius: 5
  }
});
