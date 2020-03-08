import * as React from 'react';
import { Text,StyleSheet,View,Image,Button,ImageBackground,Platform } from 'react-native';


export function CategoryCard({navigation,title,image},props) {
    return( <View style={styles.card} >
        <Image style={styles.backgroundImage} source={image} />
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
        
        
        
        

    </View>);
}


const styles = StyleSheet.create({
    card: {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            },
            android: {
                elevation: 5,
            },
        }),
        width:120,
        height: 120,
        borderRadius:10,
        backgroundColor:'#000',
        marginTop:10,
        marginBottom: 10,marginRight:10
    },
    backgroundImage:{
        position: 'absolute',
        width:120,
        opacity:'50%',
        height:120,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 1,
        borderRadius:10

    },
    welcomeImage: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
      },

      title:{
          
          textAlign:'center',
          marginTop:'45%',
          textAlignVertical:'center',
          fontWeight:'600',
          fontSize:18,
          color:'#fff',
          
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