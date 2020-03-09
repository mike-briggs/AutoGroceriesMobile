import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import TimeOption from '../components/TimeOption.js';
import { ScrollView } from 'react-native-gesture-handler';
import units from '../constants/Units.js';
import OrderList from '../components/OrderList.js';
import Icon from 'react-native-ionicons';

const { useState } = React;


export default function SelectTime({ navigation, order }){
    
    const [ orderTime, setOrderTime ] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Select Time</Text>
                    <Text style={styles.headerDescription}>Select your preffered delivery time and specify any special instructions.</Text>
                </View>
                <View style={styles.timeContainer}>
                { 
                    templateTime.map( (item, index, arr) => {
                        const unhilight = () => {
                            for(let i in timeOptionArr){
                                timeOptionArr[i] = false;
                            }
                        }
                        return (<TimeOption
                            index={item.index} 
                            day={item.date} 
                            timeRange={item.time} 
                            hilighted={timeOptionArr[index]}
                            isLastOption={index == arr.length - 1} 
                            onPress={
                                () => {
                                    if(!timeOptionArr[index]){
                                        console.log(timeOptionArr[index])
                                        unhilight();
                                        timeOptionArr[index] = true;
                                    }
                                    else{
                                        unhilight();
                                    }

                                    if(orderTime.index == item.index){
                                        setOrderTime(0);
                                    }
                                    else{
                                        setOrderTime(item);
                                    }
                                }
                            }/>)
                            }
                        )
                }
                <View style={styles.informationContainer}>
                    <Text style={styles.additionalInformation}>Additional Information</Text>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines={6}/>
                </View>
            </View>
            </ScrollView>
            <View style={styles.tabBarInfoContainer}>
                <View style={{flex:1}}></View>
                <View style={{flex:1}}>
                    <Button
                                onPress={ () => {(orderTime)?(navigation.navigate('TrackOrder')):(console.log('no order time selected!'))} }
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
    tabBarInfoContainer: {
        displat:'flex',
        position: 'absolute',
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
    header:{
        display:'flex',
        flexDirection:'column',
        margin:20
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