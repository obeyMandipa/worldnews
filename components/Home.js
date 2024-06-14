import React, {useState} from 'react'
import { StyleSheet, View, Text, SelectInput, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { Button, set } from '@gluestack-ui/themed';
import Footer from './Footer';
import { SelectList } from 'react-native-dropdown-select-list';



export default function Home() {
    const [selected, setSelected] = useState('');
    const [articles, setArticles] = useState([])

    const options = [
        {key: '1', value: 'Sport'},
        {key: '2', value: 'general'}, 
        {key: '3', value: 'science'}, 
        {key: '4', value: 'technology'}, 
        {key: '5', value: 'Health'}, 
    ];

    const handleSearch = () => {
        const category = selected.toLowerCase();
        const apiUrl = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;

        fetch(apiUrl)
            // .then(response => response.text())  // Get the response as text
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles), // update the articles state with the fetched articles 
                console.log(articles);
            })
            .catch(error => {
                console.error(error)
            })
    };

  return (
    <View style ={styles.homeContainer}>
        <View style={styles.header}>
                <Text style={styles.headerText}>World news Headlines... </Text>
            </View>
      
       <View style={styles.searchContainer}>

       <View style={styles.selectDropdown}> 
            <SelectList setSelected={(val) => setSelected(val)}
                 data={options}
                 save='value'
                 placeholder='Selection' 
                 maxheight= {900}
                 dropdownStyles={{backgroundColor: 'white'}}

             />
       </View>
       
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchText} >Search </Text>
        </TouchableOpacity>
       </View>

        <ScrollView contentContainerStyle={styles.headlines}>
            
            <View >
                {articles.map((article, index) => (
                    <View key={index} style={styles.headline}>
                    <Text style={styles.author}>{article.author}:</Text>
                    <Text style={styles.title}>{article.title}</Text>
                    </View>
                ))}
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
        position: 'relative',
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
        // width: '%',
        height: 200,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
    },

    headlines: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    articleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
      },
      author: {
        fontWeight: 'bold',
      },
      
})
