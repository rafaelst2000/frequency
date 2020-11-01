import React from 'react'
import {
  View, Text, StyleSheet,
  Image, KeyboardAvoidingView, Platform
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

const Welcome = () => {
  const navigation = useNavigation()

  async function handleNavigateToSongs() {
    navigation.navigate('MySongs')
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')}
            style={styles.logo} />
          <Text style={styles.text}>Você quer escutar aquela música?</Text>
          <Text style={styles.text}>Sinta a experiência...</Text>
          <RectButton onPress={handleNavigateToSongs} style={{ marginTop: 20 }}>
            <Feather name="arrow-right" size={23} color="#FFF" />
          </RectButton>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    marginBottom: 60
  }


});

export default Welcome