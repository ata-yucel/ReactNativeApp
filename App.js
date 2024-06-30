import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlexSample from './src/samples/FlexSample'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CharacterDetail from './src/screens/CharacterDetail'
import EpisodeDetail from './src/screens/EpisodeDetail'
import Login from './src/screens/Login'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Detail' component={CharacterDetail} />
        <Stack.Screen name='EpisodeDetail' component={EpisodeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})