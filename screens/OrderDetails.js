import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import units from '../constants/Units.js';
import OrderList from '../components/OrderList.js';
import Icon from 'react-native-ionicons';

export default function OrderDetails({ navigation }){
    return (
        <View style={styles.container}>
            <ScrollView>
                <OrderList ingredients={templateOrder.itemsList}/>
                <View style={styles.orderTotal}>
                    <View style={styles.textContainer}>
                        <Text style={styles.orderDetail}>Order Total:</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.orderDetail}>{ templateOrder.total }</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.tabBarInfoContainer}>
                <View style={{flex:1}}></View>
                <View style={{flex:1}}>
                    <Button
                                onPress={()=>navigation.navigate('SelectTime')
                            }
                                buttonStyle={{borderRadius:40,backgroundColor:'#6CD34C',fontWeight:'500', float:'right',padding:15,...Platform.select({
                                    ios: {
                                        shadowColor: 'black',
                                        shadowOffset: { width: 0, height: 3 },
                                        shadowOpacity: 0.12,
                                        shadowRadius: 10,
                                    },
                                    android: {
                                        elevation: 6,
                                    },
                                })}}
                                icon={
                                    <Icon
                                        name="arrow-forward"
                                        size={18}
                                        color="white"
                                        style={{paddingLeft:10, paddingTop:2}}
                                    />
                                }
                                iconRight
                                title="CONTINUE"
                            /> 
                </View>
            </View>
        </View>
    );
}



const templateOrder = {
    total:52.95,
    itemsList:{
        meat:[
            {
                name:'Chicken Breasts',
                quantity: 2,
                unit: units.pound
            },
            {
                name:'Ground Beef',
                quantity: 1,
                unit: units.pound
            },
            {
                name:'Flank Steak',
                quantity: 1.2,
                unit: units.pound
            }
        ],
        pantry:[
            {
                name:'Vegitable Oil',
                quantity:750,
                unit:units.millileter
            },
            {
                name:'Cumin',
                quantity:20,
                unit:units.gram
            },
            {
                name:'Pinto Beans',
                quantity:30,
                unit:units.ounce
            },
            {
                name:'Flout Tortillas',
                quantity: 20
            }
        ],
        produce:[
            {
                name: 'Tomato',
                quantity: 2,
                unit: units.lb
            },
            {
                name: 'Chipotle Chile',
                quantity: 0.25,
                unit: units.ounce
            }
        ],
        frozen:[]
    }
}

const styles = StyleSheet.create({
    tabBarInfoContainer: {
        position: 'absolute',
        display: 'flex',
        bottom: 0,
        flex:1,
        left: 0,
        right: 0,
        flexDirection:'row',
        textAlign:'right',
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
        padding: 15,
    },
    textContainer: {
        flex: 1,
        marginRight: 12,
        marginLeft: 12,
        textAlign:'right',
        paddingBottom: 20
      },
    orderDetail:{
        fontSize: 24,
        alignSelf: 'flex-start',
        marginTop: 1,
        fontWeight: '600'
    },  

    orderTotal:{
        display:'flex',
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10
    },
    continueButton:{
        fontSize:'36pt',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor:"#6CD34C",
        color: '#FFFFFF'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    category: {
        marginHorizontal: 20,
        flexDirection:'row',
        textAlign: 'left'
    },
    categoryCard:{
        
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
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
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
        lineHeight: 24,
        textAlign: 'center',
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