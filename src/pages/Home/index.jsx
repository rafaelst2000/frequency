import React from 'react'
import {
  View, Text, StyleSheet,
  Image, KeyboardAvoidingView, Platform, TextInput
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Google from '../../components/Google'
import Facebook from '../../components/Facebook'
import Apple from '../../components/Apple'


const Home = () => {
  const navigation = useNavigation()

  async function handleNavigateToWelcome() {
    navigation.navigate('Welcome')
  }

  async function handleGoToCreateAccount() {
    navigation.navigate('CreateAccount')
  }

  return (

    <View style={styles.container}>
      {/* <View style={{ diplay: 'flex', alignItems: 'flex-end', flex: 0.6 }}>
        <Image source={require('../../assets/login.png')}
          style={styles.logo} />

      </View> */}
      <View style={{ diplay: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flex: 0.5 }}>
        <Image source={require('../../assets/login.png')}
          style={styles.logom, { marginTop: -80 }} />



      </View>

      <View style={{ flex: 0.4, paddingHorizontal: 40, paddingBottom: 40, }}>
        <Text style={{ marginBottom: 20, fontFamily: 'OpenSans_700Bold', fontSize: 36 }}>Login</Text>
        <TextInput
          style={styles.input}
          label="Email"
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          label="Senha"
          placeholder="Senha"
          secureTextEntry={true}
        />

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 16 }}>Esqueceu sua senha?</Text>
          <RectButton onPress={handleNavigateToWelcome} style={{

          }}>
            <View style={{
              paddingVertical: 15, paddingHorizontal: 30,
              borderColor: '#fff',
              borderWidth: 1.5,
              borderRadius: 10,
            }}>

              <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 16 }}>Login</Text>
            </View>
          </RectButton>
        </View>

        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Google />
            <Facebook />
            <Apple />
          </View>

          <View style={{ maxWidth: 90 }}>
            <Text style={{ fontFamily: 'OpenSans_400Regular' }}>Ainda não tem sua conta?</Text>
            <RectButton onPress={handleGoToCreateAccount}>
              <Text style={{ fontFamily: 'OpenSans_700Bold' }}>Cadastre-se</Text>
            </RectButton>
          </View>
        </View>


      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32,
  },

  text: {
    justifyContent: 'center',
    fontFamily: 'OpenSans_700Bold',
    color: '#fff',
    maxWidth: 270,
    textAlign: 'center',
  },

  logo: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch'
  },

  input: {
    height: 60,
    marginBottom: 20,
    fontSize: 20,
    borderColor: '#fff',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingLeft: 15
  },


});

export default Home