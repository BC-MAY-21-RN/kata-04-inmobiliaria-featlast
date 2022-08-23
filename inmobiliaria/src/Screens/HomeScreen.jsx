import React from 'react'
import { ScrollView, StyleSheet,  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { data } from '../Data/Data'
import CardListScreen from '../Components/CardListScreen';

function HomeScreen() {
    return (
        <LinearGradient
            colors={['#93c5fd', 'white']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <ScrollView 
            style={{
                flex: 1,
                width: "90%",
                height: 205,
                marginTop: 80,
          }}>
                {
                    data.map((listData, index)=> 
                    <CardListScreen key={index} {...listData}/>
                    )
                }
            </ScrollView>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },

})
export default HomeScreen
