import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import Icon from 'react-native-ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import RecipeScreen from './screens/RecipeScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderDetails from './screens/OrderDetails';
import PastOrdersScreen from './screens/PastOrdersScreen';
import SelectTime from './screens/SelectTime';
import TrackOrder from './screens/TrackOrder';
import SignInScreen from './screens/SignInScreen';
import StartingIngredients from './screens/StartingIngredients'
import SignUpScreen from './screens/SignUpScreen';
import Browse from './screens/InitialSlides/Browse'
import Search from './screens/InitialSlides/Search'
import Welcome from './screens/InitialSlides/Welcome'
import Add from './screens/InitialSlides/Add'
import Order from './screens/InitialSlides/Order'
import Instacart from './screens/InitialSlides/Instacart'


const Stack = createStackNavigator();

export default function App(props) {
  const [categories, setCategories] = React.useState([{ title: 'Italian', image: require('./assets/images/italian.jpeg') }, { title: 'Healthy', image: require('./assets/images/salad.jpg') }, { title: 'Chinese', image: require('./assets/images/chinese-food.jpeg') }, { title: 'Quick', image: require('./assets/images/pasta.jpeg') }, { title: 'Vegan', image: require('./assets/images/vegan.jpeg') }, { title: 'Vegetarian', image: require('./assets/images/salad.jpg') }, { title: 'Protein', image: require('./assets/images/steak.jpeg') }])
  const [recipes, setRecipes] = React.useState()
  const [italianRecipes, setItalianRecipes] = React.useState()
  const [chineseRecipes, setChineseRecipes] = React.useState()
  const [healthyRecipes, setHealthyRecipes] = React.useState()
  const [quickRecipes, setQuickRecipes] = React.useState()
  const [veganRecipes, setVeganRecipes] = React.useState()
  const [vegetarianRecipes, setVegetarianRecipes] = React.useState()
  const [proteinRecipes, setProteinRecipes] = React.useState()

  const [baseUri, setBaseUri] = React.useState()
  const [loadingItalianComplete, setLoadingItalianComplete] = React.useState(false)
  const [loadingHealthyComplete, setLoadingHealthyComplete] = React.useState(false)
  const [loadingChineseComplete, setLoadingChineseComplete] = React.useState(false)
  const [loadingQuickComplete, setLoadingQuickComplete] = React.useState(false)
  const [loadingVeganComplete, setLoadingVeganComplete] = React.useState(false)
  const [loadingProteinComplete, setLoadingProteinComplete] = React.useState(false)
  const [loadingVegetarianComplete, setLoadingVegetarianComplete] = React.useState(false)


  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  var [signedIn, setSignedIn] = React.useState(false);

  //signedIn = true;
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts

        await Font.loadAsync({
          Ionicons: require('./assets/fonts/ionicons.ttf'),
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });

       
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({ "query": "chicken", "cuisine": "", "intolerences": "", "diet": "" });
    
        var requestOptions2 = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
    
        if (!loadingItalianComplete) {
          fetch("https://api.spoonacular.com/recipes/search?query=italian&apiKey=b99ab6f1589c4bde9e171cdcf1602c8f")
          .then(response => response.text())
          .then((result) => {
            var json = JSON.parse(result);
            setItalianRecipes(json)
            setLoadingComplete(true);

            setLoadingItalianComplete(true)
            console.log('hello')
            console.log(json)
          })
          .catch(error => console.log('error', error));
        }
    
        if (!loadingHealthyComplete) {
          fetch("https://api.spoonacular.com/recipes/search?query=healthy&apiKey=b99ab6f1589c4bde9e171cdcf1602c8f")
            .then(response => response.text())
            .then((result) => {
              var json = JSON.parse(result);
              setHealthyRecipes(json)
              setLoadingHealthyComplete(true)
              console.log('hello')
              console.log(json)
            })
            .catch(error => console.log('error', error));
        }
    
        if (!loadingChineseComplete) {
          fetch("https://api.spoonacular.com/recipes/search?query=chinese&apiKey=b99ab6f1589c4bde9e171cdcf1602c8f")
            .then(response => response.text())
            .then((result) => {
    
              var json = JSON.parse(result);
              setRecipes(json)
              setChineseRecipes(json)
              setBaseUri(json.baseUri)
              setLoadingChineseComplete(true);
    
              console.log('hello')
              console.log(recipes)
            })
            .catch(error => console.log('error', error));
        }
    
        if (!loadingQuickComplete) {
          fetch("https://api.spoonacular.com/recipes/search?query=quick&apiKey=b99ab6f1589c4bde9e171cdcf1602c8f")
            .then(response => response.text())
            .then((result) => {
    
              var json = JSON.parse(result);
              setRecipes(json)
              setQuickRecipes(json)
              setBaseUri(json.baseUri)
              setLoadingQuickComplete(true);
    
              console.log('hello')
              console.log(recipes)
            })
            .catch(error => console.log('error', error));
        }
    
        if (!loadingVeganComplete) {
          fetch("https://api.spoonacular.com/recipes/search?diet=vegan&apiKey=b99ab6f1589c4bde9e171cdcf1602c8f")
            .then(response => response.text())
            .then((result) => {
    
              var json = JSON.parse(result);
              setRecipes(json)
              setVeganRecipes(json)
              setBaseUri(json.baseUri)
              setLoadingVeganComplete(true);
    
              console.log('hello')
              console.log(recipes)
            })
            .catch(error => console.log('error', error));
        }
    
        if (!loadingVegetarianComplete) {
          fetch("https://api.spoonacular.com/recipes/search?diet=vegetarian&apiKey=b99ab6f1589c4bde9e171cdcf1602c8f")
            .then(response => response.text())
            .then((result) => {
    
              var json = JSON.parse(result);
              setRecipes(json)
              setVegetarianRecipes(json)
              setBaseUri(json.baseUri)
              setLoadingVegetarianComplete(true);
    
              console.log('hello')
              console.log(recipes)
            })
            .catch(error => console.log('error', error));
        }
    
        if (!loadingProteinComplete) {
          fetch("https://api.spoonacular.com/recipes/search?query=protein&apiKey=b99ab6f1589c4bde9e171cdcf1602c8f")
            .then(response => response.text())
            .then((result) => {
    
              var json = JSON.parse(result);
              setRecipes(json)
              setProteinRecipes(json)
              setBaseUri(json.baseUri)
              setLoadingProteinComplete(true);
    
              console.log('hello')
              console.log(proteinRecipes)
            })
            .catch(error => console.log('error', error));
        }
        if(loadingItalianComplete){
          setLoadingComplete(true);

        }
        setSignedIn(false);
        SplashScreen.hide();
      }
    }


    
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Browse" component={Browse} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Add" component={Add} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="Instacart" component={Instacart} />


            <Stack.Screen name="SignIn" navigationOptions={{ title: 'Home', headerLeft: null }} component={SignInScreen} />
            <Stack.Screen name="SignUp" navigationOptions={{ title: 'Home', headerLeft: null }} component={SignUpScreen} />
            <Stack.Screen name="Ingredients" component={StartingIngredients} />

            <Stack.Screen name="Root" italian={italianRecipes}
              healthy={healthyRecipes}
              chinese={chineseRecipes}
              protein={proteinRecipes}
              vegan={veganRecipes}
              current={italianRecipes}
              vegetarian={vegetarianRecipes}
              quick={quickRecipes}
              baseUri={baseUri}
              load={isLoadingComplete}
              loadingItalianComplete={true} component={BottomTabNavigator} />

            <Stack.Screen name="Recipe" component={RecipeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="SelectTime" component={SelectTime} />
            <Stack.Screen name="TrackOrder" component={TrackOrder} />
            <Stack.Screen name="PastOrders" component={PastOrdersScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
