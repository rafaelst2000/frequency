import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native'
import { Camera } from 'expo-camera'
import { FontAwesome } from '@expo/vector-icons'

const CameraScreen = () => {
  const camRef = useRef(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [hasPermission, setHasPermission] = useState(null)
  const [capturedFoto, setCapturedFoto] = useState(null)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    return <Text> Acesso negado! </Text>
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync()
      setCapturedFoto(data.uri)
      setOpen(true)
      console.log(capturedFoto)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={camRef}>


        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 20 }} onPress={() => { setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back) }} >
            <Text style={{ fontSize: 20, marginBottom: 13, color: 'white' }}>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <FontAwesome name="camera" size={23} color="#FFF" />
      </TouchableOpacity>

      {capturedFoto &&
        <Modal
          animationType="slide"
          transparent={false}
          visible={open}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
              <FontAwesome name="window-close" size={50} color="FF0000" />
            </TouchableOpacity>
          </View>

          <Image style={{ width: '100%', height: 300, borderRadius: 20 }} source={{ uri: capturedFoto }} />
        </Modal>
      }
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#121212",
    margin: 20,
    borderRadius: 10,
    height: 50,
  }
})
export default CameraScreen