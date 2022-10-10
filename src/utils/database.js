import * as React from 'react';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "./Firebase";

// export const LogInFun = (email,password) =>{
//     auth()
//     .signInWithEmailAndPassword(email,password)
//     .then(()=>{
//         ToastAndroid.show('Loogged in',ToastAndroid.SHORT)
//     }).catch(err=>{
//         console.log(err)
//     })
// }

const signUpFun = (email, password) => {
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
  };

  export default signUpFun