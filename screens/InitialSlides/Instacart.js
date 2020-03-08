import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-ionicons'
import { Input, Button } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser';
import {RecipeCard} from '../../components/RecipeCard'

export default function Instacart({ navigation }) {
    navigation.setOptions({headerTitle:null,headerStyle:{borderBottomWidth:0}})
    return (
        <View style={styles.container}>
            {/*<View style={styles.welcomeContainer}>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>Welcome to Auto Grocery</Text>
                <Text style={{ fontSize: 14, fontweight: '400' }}>Create your account below.</Text>
            </View>*/}
            <View style={{flex:2}}>

            </View>
            
            <View style={styles.getStartedContainer}>
                <Image style={styles.welcomeImage} source={require('../../assets/images/Instacart.png')}/>    
                <Text style={{fontSize:24,fontWeight:'300',textAlign:'center',marginVertical:60,marginHorizontal:15}}>Once you’ve added all the meals you want to cook, proceed to instacart and complete your order.</Text>            
            </View>
            <View style={{flex:5}}>
            <View style={styles.tabBarInfoContainer}>
            <View style={{flex:1}}>
            
                
                    <Button
                        onPress={()=> navigation.navigate('Root')
                    }   titleStyle={{color:'#6CD34C'}}
                        buttonStyle={{borderRadius:40,backgroundColor:'transparent',fontWeight:'500', float:'right',paddingTop:40,padding:15}}
                        icon={
                            <Icon
                                name="arrow-forward"
                                size={18}
                                color="#6CD34C"
                                style={{paddingLeft:10, paddingTop:2}}
                            />
                        }
                        iconRight
                        title='NEXT'
                    /> 
                </View>
                
                
            </View>
            
                
            </View>
            <View style={{flex:1}}>
                
            </View>
            
        </View>
    );
}

Instacart.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    inputContainer: {
        paddingBottom: 15,
        borderBottomWidth:0
    },
    inputLabel: {
        paddingVertical: 10,
        color: '#808080'
    },
    category: {
        marginHorizontal: 20,
        flexDirection: 'row',
        textAlign: 'left'
    },
    categoryCard: {

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
        marginTop: 50,
        marginBottom: 15,
    },
    welcomeImage: {
        width: 320,
        height: 200,
        resizeMode: 'contain',
        
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
        lineHeight: 20,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        bottom: 0,
        margin: 10,
        left: 0,
        paddingTop:0,
        right: 0,
        flex:1,
        padding:30,
        flexDirection:'column',
        
        backgroundColor: 'transparent',
        paddingVertical: 0,
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
