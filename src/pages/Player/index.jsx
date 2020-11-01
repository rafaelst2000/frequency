import React, { useEffect } from 'react'
import { ProgressBar } from 'react-native-paper';
import Constants from 'expo-constants'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Platform, } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Player = () => {
  const route = useRoute()
  const [progress, setProgress] = useState(0)
  const [time, setTime] = useState(0)
  const [aux, setAux] = useState(null)
  var i = 0

  const navigation = useNavigation()

  function handleFavorite() {
    navigation.navigate('FavoriteSongs')
  }

  function handleNavigateBack() {
    navigation.goBack()
  }


  useEffect(() => {
    if (i == 0) {
      i = 1;
      var width = 0;
      var id = setInterval(frame, 1000);
      function frame() {
        setTime(time => time + 1)
        if (width >= 30000) {
          clearInterval(id);
          i = 0;
        } else {
          width = width + 0.01;
          setProgress(width)
        }
      }
    }
  }, [])



  return (
    <>
      <ScrollView style={{ backgroundColor: '#000' }}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(255,0,0,0.12)', 'rgba(255,0,0,0)']}
          style={{
            paddingTop: 20 + Constants.statusBarHeight,
            paddingHorizontal: 20,
            flex: 1
          }}
        >
          <View style={styles.top}>
            <TouchableOpacity >
              <Icon name="arrow-left" size={24} color="#FFF" />
            </TouchableOpacity>
            <Text style={{ width: '85%', textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 24, }}>Aí vai uma para você:</Text>
          </View>
          <View style={{ width: 260, height: 260, marginRight: 'auto', marginLeft: 'auto', marginTop: 20 }}>
            <Image style={{ width: 260, height: 260, borderRadius: 10 }} source={require('../../assets/covers/bounce.jpg')} />
          </View>
          <View style={{ marginTop: 10, paddingHorizontal: 60, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>

            <Icon name="heart" size={24} color="#555B6A" />
          </View>
        </LinearGradient>
        <View style={styles.container}>
          <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 24, marginTop: 5 }}>Misunderstood</Text>
          <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 16, marginTop: 2 }}>BON JOVI</Text>

          <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Icon name="volume-1" size={24} color="#555B6A" />
            <View style={{
              display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
            }}>
              <Ionicons name="md-repeat" size={24} color="#555B6A" style={{ marginRight: 10 }} />
              <Icon name="shuffle" size={24} color="#555B6A" />
            </View>
          </View>

          <View style={{ marginVertical: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            {time < 10 && <Text style={{ fontFamily: 'OpenSans_400Regular', color: '#A5C0FF' }}>00:0{time}</Text>}
            {time >= 10 && <Text style={{ fontFamily: 'OpenSans_400Regular', color: '#A5C0FF' }}>00:{time}</Text>}
            <Text style={{ fontFamily: 'OpenSans_400Regular', color: '#A5C0FF' }}>03:30</Text>
          </View>

          <ProgressBar progress={progress} color={'#A5C0FF'} style={{ backgroundColor: '#fff' }} />

          <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/logo.png')} style={{ width: 50, height: 50 }} />
          </View>

          <View style={{ width: 200, marginRight: 'auto', marginLeft: 'auto', marginTop: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Icon name="skip-back" size={40} color="#fff" />
            <Ionicons name="ios-pause" size={40} color="#fff" />
            <Icon name="skip-forward" size={40} color="#fff" />
          </View>

        </View>
      </ScrollView>

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },

  top: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },

  footer: {
    height: 100,
    width: '100%',
    backgroundColor: '#1A1919',
    opacity: 1,
    position: 'absolute',
    bottom: 0, left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },


})
export default Player