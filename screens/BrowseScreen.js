import  React, {useEffect} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Button} from 'react-native-elements'
import { ScrollView,FlatList } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-ionicons'
import { MonoText } from '../components/StyledText';
import { RecipeCard } from '../components/RecipeCard';
import { CategoryCard } from '../components/CategoryCard';

export default function BrowseScreen({ navigation }) {
   
    const [categories,setCategories] = React.useState([{title:'Italian',image:require('../assets/images/italian.jpeg')},{title:'Healthy',image:require('../assets/images/salad-dark.jpg')},{title:'Chinese',image:require('../assets/images/chinese-food.jpeg')},{title:'Quick',image:require('../assets/images/pasta.jpeg')},{title:'Vegan',image:require('../assets/images/vegan.jpeg')},{title:'Vegetarian',image:require('../assets/images/salad-dark.jpg')},{title:'Protein',image:require('../assets/images/steak.jpeg')}])
    const [recipes,setRecipes] = React.useState()
    const [veganRecipes,setVeganRecipes] = React.useState()

    const [baseUri,setBaseUri] = React.useState()
    const [currentCategory,setCurrentCategory] = React.useState()
    const [isLoadingComplete,setLoadingComplete] = React.useState()
    
    useEffect(()=>{

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "query": "chicken", "cuisine": "", "intolerences": "", "diet": "" });

        var requestOptions2 = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://api.spoonacular.com/recipes/search?apiKey=b99ab6f1589c4bde9e171cdcf1602c8f")
            .then(response => response.text())
            .then((result) => {
                
                var json = JSON.parse(result);
                setRecipes(json)
                setLoadingComplete(true);
                setBaseUri(json.baseUri)
                console.log('hello')
                console.log(recipes)
            })
            .catch(error => console.log('error', error));

        fetch("https://api.spoonacular.com/recipes/search?diet=vegan&apiKey=b99ab6f1589c4bde9e171cdcf1602c8f")
            .then(response => response.text())
            .then((result) => {
                var json = JSON.parse(result);
                setVeganRecipes(json)
                console.log('hello')
                console.log(veganRecipes)
            })
            .catch(error => console.log('error', error));

    },[])
    if (!isLoadingComplete) {
        return null;
      } else {
    return (
        <View style={styles.container}>

                <ScrollView>
                <ScrollView horizontal={true} contentContainerStyle={styles.category}>
                    
                    {categories.map(item=>(<CategoryCard style={styles.categoryCard} image={item.image} title={item.title}/>))}
                    

                </ScrollView>
                <View style={styles.getStartedContainer}>

                    {recipes.results.map(item=>(<TouchableOpacity key={item.id} style={{ width: '100%' }} onPress={() => navigation.navigate('Recipe', {title:item.title,image:baseUri +''+item.imageUrls})}><RecipeCard image={baseUri +''+item.imageUrls} title={item.title}/></TouchableOpacity>))}
                                       

                </View>

            </ScrollView>

            <View style={styles.tabBarInfoContainer}>
                <View style={{flex:1}}>

                </View>
                <View style={{flex:1}}>
                <Button
                        onPress={()=>navigation.navigate('OrderDetails',{order:recipes,imageUrl:baseUri})
                    }
                        buttonStyle={{borderRadius:40,backgroundColor:'#6CD34C',fontWeight:'500', float:'right',padding:15,...Platform.select({
                            ios: {
                                shadowColor: 'black',
                                shadowOffset: { width: 0, height: 3 },
                                shadowOpacity: 0.12,
                                shadowRadius: 10,
                            },
                            android: {
                                elevation: 6,
                            },
                        })}}
                        icon={
                            <Icon
                                name="arrow-forward"
                                size={18}
                                color="white"
                                style={{paddingLeft:10, paddingTop:2}}
                            />
                        }
                        iconRight
                        title="CHECKOUT"
                    /> 
                </View>
            
            </View>
        </View>
    );
                    }
}

BrowseScreen.navigationOptions = {
    header: null,
};

function DevelopmentModeNotice() {
    if (__DEV__) {
        const learnMoreButton = (
            <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
                Learn more
      </Text>
        );

        return (
            <Text style={styles.developmentModeText}>
                Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
            </Text>
        );
    } else {
        return (
            <Text style={styles.developmentModeText}>
                You are not in development mode: your app will run at full speed.
      </Text>
        );
    }
}

function handleLearnMorePress() {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    category: {
        marginHorizontal: 20,
        flexDirection:'row',
        textAlign: 'left'
    },
    categoryCard:{
        
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    BrowseScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        flex:1,
        left: 0,
        right: 0,
        flexDirection:'row',
        textAlign:'right',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        backgroundColor: 'transparent',
        padding: 15,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
