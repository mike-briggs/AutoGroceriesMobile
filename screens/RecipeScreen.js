import * as React from 'react';
import { StyleSheet,Platform, Text, View, Image,Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import TextIcon from '../components/TextIcon'
export default function RecipeScreen({route, navigation},props) {
  return (
    <View style={{flex:1}}>
      <ScrollView>
        <View style={styles.card} >

          <Image style={styles.welcomeImage} source={require('../assets/images/salad.jpg')} />
          <View style={styles.recipeContainer}>
            <View style={styles.descContainer} >
              <Text style={styles.title}>{JSON.stringify(route.params.title).slice(1,JSON.stringify(route.params.title).length-1)}</Text>
              <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</Text>
            </View>
            <View style={styles.iconContainer}>
              <TextIcon sheet={styles.rating} size={18} text="4.9" name='star' color="#EFB110"></TextIcon>

              <TextIcon sheet={styles.rating} size={18} text="30 Min." name='alarm' color="#000"></TextIcon>
              <TextIcon sheet={styles.rating} size={18} text="300 Cal." name='flash' color="#000"></TextIcon>
              <TextIcon sheet={styles.rating} size={18} text="6 Serv." name='person' color="#000"></TextIcon>

            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Ingredients</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, marginHorizontal: 10 }}>

              <Text style={styles.title}>Required</Text>
              {[1, 2, 3, 4].map(item => (
                <View style={styles.listItem}>
                  <Text style={styles.listP}>Chicken</Text>
                  <Text style={styles.listItemAmount}>1 <Text style={{ fontSize: 12 }}>Kg</Text></Text>

                </View>
              ))}

            </View>
            <View style={{ flex: 1, marginHorizontal: 10 }}>

              <Text style={styles.title}>Extra</Text>
              {[1, 2, 3, 4].map(item => (
                <View style={styles.listItem}>
                  <Text style={styles.listP}>Cilantro</Text>
                  <Text style={styles.listItemAmount}>100 <Text style={{ fontSize: 12 }}>g</Text></Text>
                </View>
              ))}

            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.instructionTitle}>Instructions</Text>
          <View >

            {[1, 2, 3, 4].map(item => (
              <View style={styles.listItem}>
                <Text style={styles.listP}>Lorem ipsum dos color dit simit</Text>
              </View>
            ))}


          </View>
        </View>


      </ScrollView>
      <View style={styles.tabBarInfoContainer}>
                <Button title="Add Ingredients to Cart"  style={{fontSize:'36pt'}} color="#6CD34C" />
            </View>
      </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 32
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    paddingVertical: 0,
},
  recipeContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 32
  },
  descContainer: {
    flex: 3,
  },
  card: {
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: '100%',
    height: 190,
    resizeMode: 'cover',
  },

  title: {

    marginTop: 16,
    fontWeight: '600',
    fontSize: 18,
    
  },
  instructionTitle: {

    marginTop: 32,
    paddingTop: 10,
    fontWeight: '600',
    fontSize: 18,
    
  },
  heading: {
    flex: 3,

    fontWeight: '600',
    fontSize: 18,
    
  },
  p: {
    marginTop: 8,
    fontWeight: '400',
    fontSize: 14,
    
    lineHeight: 25,
  },
  listItem: {
    marginTop: 8,
    fontWeight: '400',
    fontSize: 14,
    width: '100%',
    flexDirection: 'row',
    
    borderBottomColor: 'rgba(0,0,0,0.10)',
    borderBottomWidth: 1,
  },
  listP: {
    flex: 3,
    paddingBottom: 10,
  },
  listItemAmount: {
    flex: 2,
    fontWeight: '700',
    fontSize: 18
  },
  iconContainer: {
    margin: 16,
    flex: 1, flexDirection: 'column', 
  },
  rating: {
    flex: 1,
    textAlign: 'left',
    margin: 0,
    fontWeight: '600',
    fontSize: 14,
    

  }
});
