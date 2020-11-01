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


const CreateAccount = () => {
  const navigation = useNavigation()

  async function handleNavigateToSongs() {
    navigation.navigate('MySongs')
  }

  async function handleGoToLogin() {
    navigation.goBack()
  }

  return (

    <View style={styles.container}>
      <View style={{ diplay: 'flex', flexDirection: 'row', flex: 0.5 }}>
        <Image source={require('../../assets/simbolo2.png')}
          style={styles.logom, { marginTop: -40 }} />

        <Image source={require('../../assets/simbolo3.png')}
          style={styles.logo, { marginTop: 80, marginLeft: 20 }} />

      </View>

      <View style={{ flex: 0.5, paddingHorizontal: 40, paddingBottom: 160, }}>
        <Text style={{ marginBottom: 20, fontFamily: 'OpenSans_700Bold', fontSize: 36 }}>Registro</Text>
        <TextInput
          style={styles.input}
          label="Nome"
          placeholder="Nome"
        />

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

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>

          <RectButton onPress={handleNavigateToSongs} style={{

          }}>
            <View style={{
              paddingVertical: 15, paddingHorizontal: 30,
              borderColor: '#fff',
              borderWidth: 1.5,
              borderRadius: 10,
            }}>

              <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 16 }}>Registrar</Text>
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
            <Text style={{ fontFamily: 'OpenSans_400Regular' }}>Já tem cadastro?</Text>
            <RectButton onPress={handleGoToLogin}>
              <Text style={{ fontFamily: 'OpenSans_700Bold' }}>Faça seu login</Text>
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

export default CreateAccount