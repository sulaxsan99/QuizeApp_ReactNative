import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../contants/Theme'
export const FormButton = ({ lableText = '',
    HandleOnPress = null,
    style,
    ...more
}) => {

    return (
        <TouchableOpacity
            style={styles.TouchStyle}

            onPress={HandleOnPress}
        >
            <Text
            >
                {lableText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    TouchStyle: {
        backgroundColor: true ? COLORS.primary : COLORS.white,
        borderColor: COLORS.primary,
        
        

    }
})