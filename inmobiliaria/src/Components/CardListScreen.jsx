import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import {useFonts, Poppins_600SemiBold, Poppins_500Medium} from '@expo-google-fonts/poppins'

export default function CardListScreen({name, image}) {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium, Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
  return (
    <SafeAreaView style={styles.containerCard}>
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
      </View>
  </View>
  
  
  {/* <LottieView
                        autoPlay
                        loop
                        // style={{
                        //     width: 50,
                        //     height: 50,
                        //     position:'absolute',
                        //     marginTop: 5
                        // }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('../assets/home.json')}
                    /> */}
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
  shadowProp: {
    shadowColor: '#581c87',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 13,
  },
  elevation:{
    elevation: 10,
    shadowColor: '#581c87',
    shadowRadius: 5
  }
});
