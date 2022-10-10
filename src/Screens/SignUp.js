import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { InputComponent } from '../components/InputComponent'
import { FormButton } from '../components/FormButton'
import {createUserWithEmailAndPassword } from "firebase/auth";
// import { authentication } from '../utils/Firebase';
// import { signUpFun } from '../utils/database'




// 

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzPuyzVqs5FSUTlgosjce4sjmDC-oIRu4",
  authDomain: "quizapp-374c3.firebaseapp.com",
  projectId: "quizapp-374c3",
  storageBucket: "quizapp-374c3.appspot.com",
  messagingSenderId: "108740110058",
  appId: "1:108740110058:web:e6fff5344783cde916d993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app)


// 
const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
const HandleOnSubmit=()=>{
    if (email != '' && password != '' && confirmPassword !='') {
        if(password != confirmPassword){
           
            window.alert("password are not same")
        }else{
            createUserWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        }
        }else{
            window.alert("all are emptey")
        }
}
    return (
        <SafeAreaView style={styles.signin}>
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
                lableText='Password'
                placeHolder='Enter your password'
                onChangeText={
                    value => setPassword(value)
                }
                value={
                    password
                }
                secureTextEntry={true}
            />
            {/* confirm password */}
             < InputComponent
                lableText='Confirm Password'
                placeHolder='Enter  confirmPassword'
                onChangeText={
                    value => setconfirmPassword(value)
                }
                value={
                    confirmPassword
                }
                secureTextEntry={true}
            />
            {/* submit button */}
            <FormButton lableText='submit'
            HandleOnPress={HandleOnSubmit} />
      
      <View>
        <Text>Already have an account?</Text>
        <Text
          
          onPress={() => navigation.navigate('LoginScreen')}>
          Sign in
        </Text>
      </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    signin: {
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
export default SignUp