import React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'gray',
    },

    loginContainer: {
        height: '90%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },

    loginImage: {
      marginTop: 50,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
      width:  300,
      height: 300,
    },

    header: {
        justifyContent: 'flex-start',
        // backgroundColor: 'red',
        width: '100%'
    },

    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    loginInputs: {
        // backgroundColor: 'red',
        padding: 10,
        width: 400,
        height: 300,
        justifyContent: 'space-between'
    },

    textInput:{
        height: 60,
        borderBottomWidth: 1, 
        borderColor: 'black', 
        fontSize: 16,
        padding: 8,
    },

    submitButton: {
        height: 60, 
        borderWidth: 2, 
        borderColor: 'black', 
        borderRadius: 21, 
        fontSize: 16,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    submitText: {
        fontWeight: 'bold',
        fontSize: 18,
    }

    
  });

  export default styles