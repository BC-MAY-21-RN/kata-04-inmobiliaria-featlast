import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function CardListScreen({name, image}) {
  return (
    <SafeAreaView>
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
