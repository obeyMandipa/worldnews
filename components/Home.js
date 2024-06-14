import React, {useState} from 'react'
import { StyleSheet, View, Text, SelectInput, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { Button, set } from '@gluestack-ui/themed';
import Footer from './Footer';
import { SelectList } from 'react-native-dropdown-select-list';



export default function Home() {
    const [selected, setSelected] = useState('');
    const [articles, setArticles] = useState([]);


    const options = [
        {key: '2', value: 'General'}, 
        {key: '3', value: 'Science'}, 
        {key: '4', value: 'Technology'}, 
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
        
                <Text style={styles.category} > {selected} </Text>
            <View >
                {articles.map((article, index) => (
                    <View key={index} style={styles.headline}>
                    <Text>Published At:  {article.publishedAt}</Text>
                    {/* image display */}
                        <Image source={{ uri: article.urlToImage}} alt='Image not available' style={styles.newsImage} />
                    <Text style={styles.title}>{article.title}</Text>
                    <Text style={styles.author}>By {article.author}</Text>
                    <Text style={styles.summary}>Summary:</Text>
                    <Text style={styles.description}>{article.description}</Text>
                    {/* link the the full story */}
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

    category: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold'

    },
    
    headline: {
        // width: '%',
        minheight: 200,
        borderRadius: 20,
        // borderColor: 'black',
        backgroundColor: '#dce2f3',

        // borderWidth: 1,
        marginTop: 20,
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
      newsImage: {
        marginTop: 5,
        // backgroundColor: 'gray',
        height: 230,
        borderColor: 'black',
        // borderWidth: 1,
        borderRadius: 20
      },
      title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,

      },
      author: {
        marginTop: 5,
      },
      summary: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 18,

      },
     
      description: {
        marginTop: 5,
        fontSize: 16,
      }
      
})
