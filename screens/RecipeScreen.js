import * as React from 'react';
import { StyleSheet, Platform, Text, View, Image } from 'react-native';
import { Button } from "react-native-elements";
import Icon from 'react-native-ionicons'
import Modal from 'react-native-modal'
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import TextIcon from '../components/TextIcon'
export default function RecipeScreen({ route, navigation,image,recipe }, props) {
  const [visible, setVisible] = React.useState(false)
  return (
    <View style={{ flex: 1 }}>
      
      <Modal animationIn="slideInUp" animationOut="slideOutDown" onBackdropPress={() => setVisible(false)} onSwipeComplete={() => this.closeModal()} swipeDirection="right" isVisible={visible} style={{ backgroundColor: 'white', borderRadius:20,marginTop:230,maxHeight: 200}}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={{ fontWeight: '600', fontSize: 18, textAlign: 'center', flex: 1,paddingTop:50 }}>Item Added!</Text>

          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1,paddingLeft:10 ,paddingRight:5}}>
              <Button
                onPress={() =>{ setVisible(false)
                  navigation.navigate('OrderDetails')}
                }
                icon={
                  <Icon
                      name="ios-basket"
                      size={22}
                      color="white"
                      style={{paddingLeft:10, paddingTop:2}}
                  />
              }
              iconRight
                buttonStyle={{
                  borderRadius: 50, backgroundColor: '#202020', fontWeight: '500', padding: 15, ...Platform.select({
                    ios: {
                      shadowColor: 'black',
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.12,
                      shadowRadius: 10,
                    },
                    android: {
                      elevation: 6,
                    },
                  })
                }}
                title="Checkout"
              />
            </View>
            <View style={{ flex: 1,paddingRight:10,paddingLeft:5 }}>
              <Button
                onPress={() =>{ setVisible(false)
                  navigation.navigate('Root')}
              }
                icon={
                  <Icon
                      name="add"
                      size={22}
                      color="white"
                      style={{paddingLeft:10, paddingTop:2}}
                  />
              }
              iconRight
                buttonStyle={{
                  borderRadius: 50, backgroundColor: '#6CD34C', fontWeight: '500', padding: 15, ...Platform.select({
                    ios: {
                      shadowColor: 'black',
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.12,
                      shadowRadius: 10,
                    },
                    android: {
                      elevation: 6,
                    },
                  })
                }}
                title="Add More"
              />
            </View>


          </View>

        </View>

      </Modal>
      
      <ScrollView>
        <View style={styles.card} >

          <Image style={styles.welcomeImage} source={route.params.image} />
          <View style={styles.recipeContainer}>
            <View style={styles.descContainer} >
              <Text style={styles.title}>{JSON.stringify(route.params.title).slice(1, JSON.stringify(route.params.title).length - 1)}</Text>
              <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</Text>
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
        <View style={{ flex: 3 }}>

        </View>
        <View style={{ flex: 1, padding: 20, paddingRight: 40 }}>
          <Button
            onPress={() => setVisible(true)
            }
            buttonStyle={{
              borderRadius: 50, height: 100, width: 100, backgroundColor: '#6CD34C', fontWeight: '500', padding: 15, ...Platform.select({
                ios: {
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.12,
                  shadowRadius: 10,
                },
                android: {
                  elevation: 6,
                },
              })
            }}
            icon={
              <Icon
                name="add"
                size={52}
                color="white"
                style={{ paddingLeft: 0, paddingTop: 2 }}
              />
            }
            iconRight
            title=""
          />
        </View>

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
    flexDirection: 'row',
    flex: 1,
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
    flex: 5,
    marginRight: 10,
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
    flex: 2, flexDirection: 'column',
  },
  rating: {
    flex: 1,
    textAlign: 'left',
    margin: 0,
    fontWeight: '600',
    fontSize: 14,


  }
});
