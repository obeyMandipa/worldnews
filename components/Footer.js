import React from 'react'
import { StyleSheet, View, Text, SelectInput, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
        <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    footerContainer: {
        marginBottem: 80,
        height: 80,
        backgroundColor: 'gray',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
