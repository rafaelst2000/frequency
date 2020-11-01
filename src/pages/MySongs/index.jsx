import React, { useEffect } from 'react'
import Constants from 'expo-constants'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Platform, } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import { useState } from 'react'


const MySongs = () => {
  const route = useRoute()
  const routeParams = route.params



  useEffect(() => {

  }, [])

  const [tickets, setTickets] = useState([])

  const navigation = useNavigation()

  function handleFavorite() {
    navigation.navigate('FavoriteSongs')
  }

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <>
      <ScrollView style={{ backgroundColor: '#000' }}>
        <View style={styles.container}>

          <View style={styles.top}>
            <TouchableOpacity >
              <Icon name="menu" size={24} color="#FFF" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="search" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>

          <Text style={{ fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 24, marginTop: 10 }}>Recomendamos</Text>

          <ScrollView
            style={{ marginTop: 20 }}
            horizontal={true}
          >
            <View style={{ width: 200, height: 250, marginRight: 20 }}>
              <Image style={{ width: 200, height: 200, borderRadius: 10 }} source={require('../../assets/covers/tre.jpg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>X-Kid</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>GREEN DAY</Text>
            </View>

            <View style={{ width: 200, height: 250, marginRight: 20 }}>
              <Image style={{ width: 200, height: 200, borderRadius: 10 }} source={require('../../assets/covers/nightmare.jpeg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>So Far Away</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>AVENGED SEVENFOLD</Text>
            </View>

            <View style={{ width: 200, height: 250, marginRight: 20 }}>
              <Image style={{ width: 200, height: 200, borderRadius: 10 }} source={require('../../assets/covers/megadeth1.png')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>Dystopia</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>MEGADETH</Text>
            </View>

          </ScrollView>

          <Text style={{ fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 24, marginTop: 10 }}>Ouvir de novo</Text>

          <ScrollView
            style={{ marginTop: 20 }}
            horizontal={true}
          >
            <View style={{ width: 200, height: 250, marginRight: 20 }}>
              <Image style={{ width: 200, height: 200, borderRadius: 10 }} source={require('../../assets/covers/tre.jpg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>X-Kid</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>GREEN DAY</Text>
            </View>

            <View style={{ width: 200, height: 250, marginRight: 20 }}>
              <Image style={{ width: 200, height: 200, borderRadius: 10 }} source={require('../../assets/covers/nightmare.jpeg')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>So Far Away</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>AVENGED SEVENFOLD</Text>
            </View>

            <View style={{ width: 200, height: 250, marginRight: 20 }}>
              <Image style={{ width: 200, height: 200, borderRadius: 10 }} source={require('../../assets/covers/megadeth1.png')} />
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_700Bold', color: '#FFF', fontSize: 16, marginTop: 5 }}>Dystopia</Text>
              <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', color: 'rgba(165, 192, 255, 0.7)', fontSize: 10, marginTop: 2 }}>MEGADETH</Text>
            </View>

          </ScrollView>


          {/* 
        <View style={styles.outContainer}>
          <View style={styles.itemsContainer}>
            <ScrollView
              contentContainerStyle={{ paddingHorizontal: 20 }}>


              <TouchableOpacity

                onPress={() => handleGoQRCode()}>
                <View style={styles.out}>
                  <View style={styles.line}>
                    <Text style={styles.text}>Nome</Text>
                  </View>
                </View>
              </TouchableOpacity>


            </ScrollView>
          </View>
        </View> */}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={{ width: '50%' }}>
          <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', fontSize: 12 }}>Home</Text>
        </View>



        <View style={{ width: '50%' }}>
          <TouchableOpacity onPress={handleFavorite}>
            <Text style={{ textAlign: 'center', fontFamily: 'OpenSans_400Regular', fontSize: 12 }}>Favoritas</Text>
          </TouchableOpacity>
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
    opacity: 1,
    position: 'absolute',
    bottom: 0, left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },







  title: {
    color: '#fff',
    padding: 24,
    fontSize: 40,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 32,
    textAlign: "center",
  },

  out: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 12,
    borderBottomColor: "#225199",
    borderBottomWidth: 2,
    marginBottom: 5
  },

  outContainer: {
    flex: 1,
    padding: 20,
  },

  itemsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
    paddingBottom: 16,
  },

  card_out: {
    flex: 1,

    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },

  text: {
    color: 'black',
    fontSize: 28,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 300,
    lineHeight: 32,
  },
})
export default MySongs