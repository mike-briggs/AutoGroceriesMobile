import * as React from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';
import  Icon  from 'react-native-ionicons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import TextIcon from '../components/TextIcon'
import { OptionButton } from '../components/OptionButton';


export default function ProfileScreen({ navigation: { navigate } }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{ flexDirection: 'column', display: 'flex', marginLeft: 20, marginBottom: 32 }}>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Michael Briggs</Text>

        </View>

        <View style={{flexDirection: 'row', display: 'flex',flex: 1,marginTop:8 }}>
          <View style={{ flex: 1 }}>
            <TextIcon sheet={styles.rating} size={18} text="Loblaws" name='cart' color="#000"></TextIcon>
            <TextIcon sheet={styles.rating} size={18} text="99 University Ave" name='compass' color="#000"></TextIcon>
            <TextIcon sheet={styles.rating} size={18} text="contact@mikebriggs.ca" name='send' color="#000"></TextIcon>
            <TextIcon sheet={styles.rating} size={18} text="(123) 456-7890" name='call' color="#000"></TextIcon>

          </View>
          
        </View>


      </View>


      <OptionButton
      left={true}
        icon="pizza"
        label="Edit Favourite Foods"
        onPress={() => {}}
      />

      <OptionButton
      left={true}
        icon="add"
        label="Add Ingredients to Pantry"
        onPress={() => {}}
      />

      <OptionButton
      left={true}
        icon="compass"
        label="Change Location"
        onPress={() => {}}
        isLastOption
      />
      <OptionButton
      left={true}
        icon="cart"
        label="Change Grocery Store"
        onPress={() => {}}
        isLastOption
      />
      <OptionButton
      left={true}
        icon="person"
        label="Edit Account Info"
        onPress={() => {}}
        isLastOption
      />
      <OptionButton
      left={true}
        icon="arrow-back"
        label="Logout"
        onPress={() => navigate('SignIn')}
        isLastOption
      />
      <OptionButton
      left={true}
        icon="lock"
        label="Change Password"
        onPress={() => {}}
        isLastOption
      />
      <OptionButton
      left={true}
        icon="code"
        label="View Code"
        onPress={() => {}}
        isLastOption
      />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
    marginLeft: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  rating: {
    flex: 1,
    textAlign: 'left',
    marginTop: 8,
    fontWeight: '400',
    fontSize: 14,
    


  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {

    marginTop: 0,
    fontWeight: '600',
    fontSize: 24,
    
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
    
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
