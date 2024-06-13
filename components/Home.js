import React, {useState} from 'react'
import { StyleSheet, View, Text, SelectInput, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { Button, set } from '@gluestack-ui/themed';
import Footer from './Footer';
import { SelectList } from 'react-native-dropdown-select-list';



export default function Home() {
    const [selected, setSelected] = useState('');
    const options = [
        {key: '1', value: 'Sport'},
        {key: '2', value: 'general'}, 
        {key: '3', value: 'science'}, 
        {key: '4', value: 'technology'}, 
        {key: '5', value: 'Health'}, 
    ];

  return (
    <View style ={styles.homeContainer}>
      
       <View style={styles.searchContainer}>

       <View style={styles.selectDropdown}> 
            <SelectList 
                 setSelected={(val) => setSelected(val)}
                 data={options}
                 save='value'
                 placeholder='Selection' 
                 maxheight= {900}

             />
       </View>
       
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
        // marginTop: 10,
        // backgroundColor: 'red', 
        
    },
    headerText: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        
    },
    searchContainer: {
        marginTop: 10,
        height: 150,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },

    selectDropdown: {
        width: '78%',
        height: 45,
        
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
