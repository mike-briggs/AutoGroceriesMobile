import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Button} from 'react-native-elements'
import TimeOption from '../components/TimeOption.js';
import { ScrollView } from 'react-native-gesture-handler';
import units from '../constants/Units.js';
import BarIcon from '../components/BarIcon';

import OrderList from '../components/OrderList.js';
import TrackOrderList from '../components/TrackOrderList.js';
import Icon from 'react-native-ionicons'

export default function TrackOrder({ navigation, order }){

    navigation.setOptions({
        headerRightContainerStyle:{paddingRight:20,activeTintColor: '#6CD34C',},
        headerLeftContainerStyle:{paddingLeft:20,activeTintColor: '#6CD34C',},
        headerLeft:()=><BarIcon size={30} onPress={() => navigation.navigate('Root')}
 color={'#101010'} name="ios-basket"  />,
        headerRight:()=><BarIcon size={30} onPress={() => navigation.navigate('Profile')}
 color={'#101010'} name="ios-contact"  />})
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Order Placed</Text>
                        <Text style={styles.orderTime} >1:28:03 </Text>
                    </View>
                    <View style={styles.orderTimeContainer}>
                    <Text style={styles.headerDescription}>Track your order below.</Text>
                        <Text style={styles.orderDate}> 2020-03-07 </Text>
                    </View>
                </View>
                <TrackOrderList current='2'/>
                
            </ScrollView>
            <View style={styles.tabBarInfoContainer}>
                <View style={{flex:1}}>

                </View>
                <View style={{flex:1,alignSelf:'flex-end',width:'50%',margin:15}}>
                    <Button
                                onPress={()=>navigation.navigate('Root')}
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
                                title="BACK HOME"
                            />
                </View>
            </View>
        </View>
    );
}

const templateTime = [
    {
        index:1,
        date:'Monday',
        time:'10:00am - 1:00pm'
    },
    {
        index:2,
        date:'Monday',
        time:'1:00pm - 4:00pm'
    },
    {
        index:3,
        date:'Monday',
        time:'4:00pm - 7:00pm'
    },
    {
        index:4,
        date:'Tuesday',
        time:'10:00am - 1:00pm'
    },
    {
        index:5,
        date:'Tuesday',
        time:'1:00pm - 4:00pm'
    },
    {
        index:6,
        date:'Tuesday',
        time:'4:00pm - 7:00pm'
    }
]

let timeOptionArr = templateTime.map(() => {return false;});

const styles = StyleSheet.create({
    orderTime:{
        fontSize:24,
        fontWeight:'600'
    },
    orderDate:{
        fontSize:12,
        fontWeight:'600'
    },
    input:{
        padding:10,
        fontSize:15,
        fontWeight:'600',
        backgroundColor: '#F9F9F9',
        borderRadius:10
    },
    informationContainer:{
        marginVertical: 20,
        paddingHorizontal: 10
    },
    additionalInformation:{
        fontSize:24,
        fontWeight:'600'
    },
    timeContainer:{
        margin:20
    },
    orderTimeContainer:{
        display:'flex',
        flexDirection:'row',
        marginHorizontal:20,
        alignItems:'flex-end',
        justifyContent:'space-between'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        marginHorizontal: 20,
        alignItems:'flex-end',
        justifyContent:'space-between'
    },
    headerText:{
        fontWeight: '600',
        fontSize: 36
    },
    headerDescription:{
        fontWeight: '600',
        fontSize:15
    },
    continueButton:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor:"#6CD34C",
        color: '#FFFFFF'
    },
    container: {
        flex: 1,
        flexDirection:'column',
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