import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import  Icon  from 'react-native-ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import RecipeScreen from './screens/RecipeScreen';
import ProfileScreen from './screens/ProfileScreen';
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

  

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  var [signedIn,setSignedIn] = React.useState(false);
  
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
        setLoadingComplete(true);
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
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Browse" component={Browse}/>
            <Stack.Screen name="Search" component={Search}/>
            <Stack.Screen name="Add" component={Add}/>
            <Stack.Screen name="Order" component={Order}/>
            <Stack.Screen name="Instacart" component={Instacart}/>


            <Stack.Screen name="SignIn" navigationOptions={{ title: 'Home',headerLeft: null}} component={SignInScreen}/>
            <Stack.Screen name="SignUp" navigationOptions={{ title: 'Home',headerLeft: null}} component={SignUpScreen}/>

            <Stack.Screen name="Ingredients" component={StartingIngredients}/>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="Recipe" component={RecipeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />

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
