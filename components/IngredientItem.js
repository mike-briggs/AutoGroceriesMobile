import * as React from 'react';
import { Text, StyleSheet, View, Image, Button } from 'react-native';
import Icon from 'react-native-ionicons';
import { RectButton } from 'react-native-gesture-handler';


export default function IngredientItem({ ingredient, style }) {
  const { name, quantity, price} = ingredient;
  let test = 1/0;

  return (
    <View style={{ flexDirection: 'row', flex: 1, borderBottomColor: '#ccc', paddingTop: 10, borderBottomWidth: StyleSheet.hairlineWidth }}>
      <View style={styles.optionTextContainer2}>
        <Text style={styles.optionText1}>{name}</Text>
      </View>
      <View style={styles.optionIconContainer2}>
        <View style={{ flex: 1 }}> 
          <Text style={styles.optionText3}>{quantity.amount.toFixed(1)+' '}{quantity.unitShort}</Text>
        </View>
      </View>
      <View style={styles.optionIconContainer2}>
        <View style={{ flex: 1 }}>
          <Text style={styles.optionText2}>{price}</Text>
        </View>
      </View>
    </View>
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
  optionIconContainer2: {
    flex: 1,
    marginRight: 12,
    marginLeft: 12,
    textAlign: 'right',
    flexDirection: 'row'
  },
  optionIconContainer3: {
    flex: 1,

    textAlign: 'right',
  },
  optionIconContainer: {
    flex: 3
  },
  optionTextContainer2: {
    flex: 3,
    
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
  optionText2: {
    fontSize: 18,
    alignSelf: 'flex-end',
    marginBottom: 5,
    fontWeight: '600',
    flex: 1,
  },
  optionText1: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontWeight: '400'

  },
  optionText3: {
    fontSize: 15,
    alignSelf: 'flex-end',
    marginBottom: 10,
    flex: 1,
    fontWeight: '600'

  },
});
