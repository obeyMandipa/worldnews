import React, {useState} from 'react'
import { StyleSheet, View, Text, SelectInput, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
// import styles from '../styles';
import { Button } from '@gluestack-ui/themed';
import Footer from './Footer';



export default function Home() {
    const options = ['Heath', 'Business', 'Sport'];
    const [selectedOption, setSelectedOption] = useState('');

    const handleValueChange = (option) => {
        setSelectedOption(option);
    }

  return (
    <View style ={styles.homeContainer}>
      
       <View style={styles.searchContainer}>
       <TextInput style={styles.selectDropdown} placeholder='Selection ' />
        <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchText} >Search </Text>
        </TouchableOpacity>
       </View>

        <ScrollView contentContainerStyle={styles.headlines}>
            <View style={styles.header}>
                <Text style={styles.headerText}>World news Headlines... </Text>
            </View>
            <View style={styles.headline}>

            </View>
            <View style={styles.headline}>

            </View>
            <View style={styles.headline}>

            </View>
            <View style={styles.headline}>

            </View>
        </ScrollView>

        <Footer/>

    </View>
  )
}

const styles = StyleSheet.create({
    homeContainer: {
        height: '100%',
        backgroundColor: 'white',
        padding: 5,
    },
    header: {
        width: '100%',
        height: 50,
        marginTop: 10,
        // backgroundColor: 'red', 
        
    },
    headerText: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        
    },
    searchContainer: {
        marginTop: 10,
        height: 60,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },

    selectDropdown: {
        width: '77%',
        height: 45,
        // backgroundColor: 'red',
        borderRadius: 20,
        padding: 8,
        borderColor: 'black',
        borderWidth: 1,

    },

    searchButton: {
        width: '20%',
        height: 45,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    searchText: {
        color: 'white',
        fontWeight: 'bold'
    },
    
    headline: {
        width: '96%',
        height: 200,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
    },

    headlines: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})
