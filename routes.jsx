import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from './src/pages/Home'
import CreateAccount from './src/pages/CreateAccount'
import Welcome from './src/pages/Welcome'
import MySongs from './src/pages/MySongs'
import CameraScreen from './src/pages/Camera'
import FavoriteSongs from './src/pages/FavoriteSongs'


const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#f0f0f5' } }}>

        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="CreateAccount" component={CreateAccount} />
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="MySongs" component={MySongs} />
        <AppStack.Screen name="Camera" component={CameraScreen} />
        <AppStack.Screen name="FavoriteSongs" component={FavoriteSongs} />

      </AppStack.Navigator>
    </NavigationContainer>
  )
}
export default Routes