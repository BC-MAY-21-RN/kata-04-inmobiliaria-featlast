import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';

export default function CardListScreen({name, image}) {
  return (
    <SafeAreaView style={{marginTop:5}}>
    <Image
    style={{
      width: "90%",
      height: 205,
      margin:5,
      borderTopLeftRadius: 9,
      borderTopRightRadius: 9,
    }}
    source={{
      uri: image}}
  />
  <LottieView
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
                    />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    height: 205,
  },
});
