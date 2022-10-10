import React from 'react';
import { View,Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, LogIn, SignUp } from '../Screens';

const Stack = createStackNavigator();

const  AuthStackNavigator = ()=> {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    initialRouteName={{LogIn}}
    >
<Stack.Screen name="LoginScreen" component={LogIn} />
      <Stack.Screen name="SignupScreen" component={SignUp} />
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;