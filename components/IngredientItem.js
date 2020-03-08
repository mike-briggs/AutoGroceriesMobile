import * as React from 'react';
import { Text,StyleSheet,View,Image,Button } from 'react-native';
import Icon  from 'react-native-ionicons';
import { RectButton } from 'react-native-gesture-handler';


export default function IngredientItem({ ingredient, style }){
    const { name, quantity, unit } = ingredient;
    console.log(style);

    return (
        <View style={(style)?(style):({flexDirection:'row'})}>
            <View style={styles.optionTextContainer2}>
                <Text style={styles.optionText2}>{name}</Text>
            </View>
            <View style={styles.optionIconContainer2}>
                <Text style={styles.optionText2}>{quantity}{unit}</Text>
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
      textAlign:'right',
    },
    optionIconContainer: {
        marginRight: 12,
        marginLeft: 12,
      },
    optionTextContainer2:{
      flex:9,
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
        fontWeight:'600'
      },
    optionText2: {
      fontSize: 15,
      alignSelf: 'flex-start',
      marginTop: 1,
      fontWeight:'600'

    },
  });
  