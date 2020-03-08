import * as React from 'react';
import { Text,StyleSheet,View,Image,Button,Platform } from 'react-native';
import TextIcon from '../components/TextIcon';


export function RecipeCard({navigation,title,image},props) {
    return( <View {...props} style={styles.card} >

        <Image  style={styles.welcomeImage} source={image}/>
        <View style={{flex: 1, flexDirection: 'row',marginTop:16,marginLeft:16}}>
            
            <Text style={styles.title}>{title}</Text>
            <TextIcon sheet={styles.rating} style={{marginTop:0}} size={18} text="4.9" name='star' color="#EFB110"></TextIcon>
        </View>

        <View style={{flex: 1, flexDirection: 'row',alignItems:'center'}}>
        <TextIcon sheet={styles.iconList} size={18} text="30 Min." name='alarm' color="#000"></TextIcon>
        <TextIcon sheet={styles.iconList} size={18} text="300 Cal." name='flash' color="#000"></TextIcon>
        <TextIcon sheet={styles.iconList} size={18} text="6 Serv." name='person' color="#000"></TextIcon>

        </View>
        

    </View>);
}


const styles = StyleSheet.create({
    card: {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
        backgroundColor:'#fff',
        width:'100%',
        height: 'auto',
        borderRadius:10,
        marginBottom: 20
    },
    welcomeImage: {
        width: '100%',
        height: 115,
        resizeMode: 'cover',
      },

      title:{
          flex:3,
          marginBottom: 4.8,
          fontWeight:'600',
          fontSize:18,
          
      },
      rating:{
          flex: 1,
          textAlign:'center',

          marginBottom:16,
          fontWeight:'600',
          fontSize:14,
          

      },
      iconList:{
        flex: 1,
        textAlign:'center',
        margin:8,
        marginBottom:16,
        fontWeight:'600',
        fontSize:14,
        

    }
});