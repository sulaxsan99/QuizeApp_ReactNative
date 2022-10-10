import 'react-native-gesture-handler';
import React from 'react';
import { View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './navigator/AuthStackNavigator';
export const App1 = () => {
  return  (
    <NavigationContainer>
       <AuthStackNavigator />
    </NavigationContainer>
  )
}
