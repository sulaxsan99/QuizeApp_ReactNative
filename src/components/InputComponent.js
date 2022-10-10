import React from 'react'
import {View ,Text, TextInput} from 'react-native'
export const InputComponent = ({lableText='',
placeHolder='',onChangeText=null,value=null,...more}) => {

  return (
    <View>
        <Text>{lableText}</Text>
        <TextInput
         placeholder= {placeHolder}
           onChangeText={onChangeText}
            value={value} 
            
        
            {...more}
            />
    </View>
  )
}
