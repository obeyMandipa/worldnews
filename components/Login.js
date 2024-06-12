import React from 'react'
import { GluestackUIProvider, Text, Box, InputField, Button } from "@gluestack-ui/themed"
import { StyleSheet, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../styles';


export default function Login({navigation}) {
    const handleSignIn = () =>{
        navigation.navigate('Home')
    }

  return (
    <View style={styles.loginContainer}>
        <View > 
            <Image source={require('./Logo.jpeg')}  style={styles.loginImage} />
        </View>

        <View style={styles.header}>
            <Text style={styles.headerText}>Login...</Text>
        </View>

        <View  style ={styles.loginInputs}>
            <TextInput keyboardType='email' placeholder='Enter email '  style={styles.textInput} />
            <TextInput  placeholder='Enter password '  style={styles.textInput} />
            <TouchableOpacity 
                style={styles.submitButton}
                onPress={handleSignIn}
            >
                
                <Text style={styles.submitText}>Sign in</Text>
            </TouchableOpacity>
           
        </View>
    </View>
  )
}
