import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { InputComponent } from '../components/InputComponent'
import { FormButton } from '../components/FormButton'
// import { LogInFun } from '../utils/database'
const LogIn = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
  const HandleOnSubmit = () => {
    if (email != '' && password != '') {
    //   signIn(email, password);
    // LogInFun(email,password);
    }else{
        window.alert("all are emptey")
    }
  };

    return (
        <SafeAreaView style={styles.login}>
            {/* header */}
            <Text>
                SignUp
            </Text>
            {/* email */}
            <InputComponent
                lableText='Email'
                placeHolder='Enter your email'
                onChangeText={value => setEmail(value)}
                value={email}
                keyboardType={'email-address'}

            />

            {/* password */}
            < InputComponent
                lableText='password'
                placeHolder='Enter your password'
                onChangeText={
                    value => setPassword(value)
                }
                value={
                    password
                }
                secureTextEntry={true}
                
                
            />
            {   /* submit button */}
            <FormButton lableText='Log In' HandleOnPress={HandleOnSubmit} />


            <View >
        <Text>Don't have an account?</Text>
        <Text
          onPress={() => navigation.navigate('SignupScreen')}>
          Create account
        </Text>
      </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    login: {
        backgroundColor: '#215E7C',
        width: '100%',
        height: '100%',
        padding: '10%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    txt: {
        color: 'white',
        marginTop: '40%',
        fontSize: '25%'
    }
})
export default LogIn