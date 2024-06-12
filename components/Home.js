import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
// import styles from '../styles';
import { Button } from '@gluestack-ui/themed';


export default function Home() {
  return (
    <ScrollView style ={styles.homeContainer}>
       <View style={styles.header}>
        <Text style={styles.headerText}>World news Headlines... </Text>
       </View>
       <View>
        <TextInput style={styles.header} />
        <Button>
            <Text>Search </Text>
        </Button>
       </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: 'white',
        padding: 5,
    },
    header: {
        width: '100%',
        height: 50,
        // backgroundColor: 'red', 
        
    },
    headerText: {
        fontSize: 35,
        fontWeight: 'bold',
        
    }
})
