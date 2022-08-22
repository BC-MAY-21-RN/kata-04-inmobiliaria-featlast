import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import {useFonts, Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular} from '@expo-google-fonts/poppins'

export default function CardListScreen({name, image, address,numberBedrroms,shower,area,price}) {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium, Poppins_600SemiBold,Poppins_400Regular
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
  return (
    <SafeAreaView style={[styles.containerCard, styles.elevation]}>
    <View style={{flexDirection:'row'}}>
 
      <View>
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
    </View>
    <View>
      <Text style={{marginTop: 25, marginLeft: 15, fontFamily:'Poppins_500Medium', fontSize: 20}}>{name}</Text>
      <Text style={{marginTop: 2, marginLeft: 15, color:'gray', fontFamily:'Poppins_400Regular', fontSize: 14}}>{address}</Text>
      <View style={{ flexDirection:'row', justifyContent:'space-evenly'}}>
        <Image source={require('../assets/cama.png')} style={{marginLeft: 15, marginTop:4,width:20, height:18, tintColor:'#4b5563'}}  />
        <Text style={{marginTop: 5,marginLeft:8, fontFamily:'Poppins_500Medium', fontSize: 13}}>{numberBedrroms}</Text>
        <Image source={require('../assets/tina.png')} style={{marginLeft: 15, marginTop:4,width:20, height:18, tintColor:'#4b5563'}}  />
        <Text style={{marginTop: 5,marginLeft: 8, fontFamily:'Poppins_500Medium', fontSize: 13}}>{shower}</Text>
        <Image source={require('../assets/planes.png')} style={{marginLeft: 15, marginTop:4,width:20, height:18, tintColor:'#4b5563'}}  />
        <Text style={{marginTop: 5,marginLeft: 8, fontFamily:'Poppins_500Medium', fontSize: 13}}>{`${area} ft`}</Text>
      </View>
      
      <Text style={{marginTop: 12, marginLeft: 15, fontFamily:'Poppins_500Medium', fontSize: 18}}>{`$${price}/m`}</Text>
      </View>
      <View style={{flexDirection:'column',alignSelf:'center', marginTop:28 }}><Text style={{ fontSize:9, fontFamily:'Poppins_500Medium'}}>2</Text></View>
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
    marginTop:15,
    height: 165,
    width: '98%',
    backgroundColor:'white',
    borderRadius:15
  },
  elevation:{
    elevation: 10,
    shadowColor: '#581c87',
    shadowRadius: 5
  }
});
