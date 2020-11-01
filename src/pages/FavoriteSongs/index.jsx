import React, { useEffect } from 'react'
import Constants from 'expo-constants'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Platform, } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import { useState } from 'react'
import { Octicons } from '@expo/vector-icons';


const FavoriteSongs = () => {

  const navigation = useNavigation()

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <>
      <View style={styles.container}>

        <View style={styles.top}>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Icon name="arrow-left" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Octicons name="settings" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ backgroundColor: '#000', paddingHorizontal: 30 }}>
          <Text style={{ fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 24, marginTop: 10, marginBottom: 20 }}>Músicas Favoritas</Text>

          <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
            <View style={{ width: 130, height: 200, marginRight: 20 }}>
              <Image style={{ width: 130, height: 130, borderRadius: 10 }} source={require('../../assets/covers/tre.jpg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>X-Kid</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>GREEN DAY</Text>
            </View>

            <View style={{ width: 130, height: 200, marginRight: 20 }}>
              <Image style={{ width: 130, height: 130, borderRadius: 10 }} source={require('../../assets/covers/tre.jpg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>X-Kid</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>GREEN DAY</Text>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
            <View style={{ width: 130, height: 200, marginRight: 20 }}>
              <Image style={{ width: 130, height: 130, borderRadius: 10 }} source={require('../../assets/covers/nightmare.jpeg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>X-Kid</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>GREEN DAY</Text>
            </View>

            <View style={{ width: 130, height: 200, marginRight: 20 }}>
              <Image style={{ width: 130, height: 130, borderRadius: 10 }} source={require('../../assets/covers/nightmare.jpeg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>X-Kid</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>GREEN DAY</Text>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
            <View style={{ width: 130, height: 200, marginRight: 20 }}>
              <Image style={{ width: 130, height: 130, borderRadius: 10 }} source={require('../../assets/covers/nightmare.jpeg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>X-Kid</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>GREEN DAY</Text>
            </View>

            <View style={{ width: 130, height: 200, marginRight: 20 }}>
              <Image style={{ width: 130, height: 130, borderRadius: 10 }} source={require('../../assets/covers/nightmare.jpeg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>X-Kid</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>GREEN DAY</Text>
            </View>
          </View>


          <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
            <View style={{ width: 130, height: 200, marginRight: 20 }}>
              <Image style={{ width: 130, height: 130, borderRadius: 10 }} source={require('../../assets/covers/nightmare.jpeg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>X-Kid</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>GREEN DAY</Text>
            </View>

            <View style={{ width: 130, height: 200, marginRight: 20 }}>
              <Image style={{ width: 130, height: 130, borderRadius: 10 }} source={require('../../assets/covers/nightmare.jpeg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>X-Kid</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>GREEN DAY</Text>
            </View>
          </View>

        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={{ width: '50%' }}>
          <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', fontSize: 12 }}>Home</Text>
        </View>

        <View style={{ width: '50%' }}>
          <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', fontSize: 12 }}>Favoritas</Text>
        </View>

        <View style={{ width: '100%', height: 80, position: 'absolute', top: -30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{
            display: 'flex', justifyContent: 'center', alignItems: "center",
            backgroundColor: '#030303', borderRadius: 50, width: 100, height: 100, shadowColor: "#323030", shadowOffset: { width: -3, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 5
          }}>
            <Image source={require('../../assets/logo.png')}
              style={{ width: 50, height: 50 }} />
          </View>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20 + Constants.statusBarHeight,
    paddingHorizontal: 20
  },

  top: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  footer: {
    height: 100,
    width: '100%',
    backgroundColor: '#1A1919',
    position: 'absolute',
    bottom: 0, left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})
export default FavoriteSongs