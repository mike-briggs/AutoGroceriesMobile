import React from 'react';
import colors from '../constants/Colors';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
 
export default function TrackOrderList ({ current }){

    return (
        <View style={styles.contentContainer}>
            <Option 
                num='1'
                numColor={(1 < current)?(colors.accentGreen):(null)}
                stage='RECEIVED'
                state='COMPLETE'
                isLast={false}/>
            <Option 
                num='2'
                numColor={(2 < current)?(colors.accentGreen):(null)}
                stage='GATHERING'
                state='IN PROGRESS'
                isLast={false}/>
            <Option 
                num='3'
                numColor={(3 < current)?(colors.accentGreen):(null)}
                stage='PACKING'
                state='PENDING'
                isLast={false}/>
            <Option 
                num='4'
                numColor={(4 < current)?(colors.accentGreen):(null)}
                stage='LOADING'
                state='PENDING'
                isLast={false}/>
            <Option 
                num='5'
                numColor={(5 < current)?(colors.accentGreen):(null)}
                stage='OUT FOR DELIVERY'
                state='PENDING'
                isLast={true}/>
        </View>
    );
}

const Option = ({ num, numColor, stage, state, isLast }) => {
    return (
        <View style={(isLast)?(styles.lastOption):(styles.option)}>
            <View style={styles.optionTextContainer}>
                <Text style={[styles.optionNumber, (numColor)?({ color: numColor }):({})]}>{ num }</Text>
            </View>
            <View style={styles.optionTextContainerDate}>
                <Text style={styles.optionTextDate}>{ stage }</Text>
            </View>
            <View style={styles.optionStatusContainer}>
                <Text style={styles.optionStatusText}>{ state }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    active:{
        backgroundColor: '#F9F9F9'
    },
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    optionStatusContainer:{
        marginLeft: 0,
        flex:3
    },
    optionTextDate:{
        fontWeight:'600',
        alignSelf:'flex-start',
        textAlign:'left',
        paddingLeft:20,
        fontSize: 14
    }, 
    optionNumber:{
        fontSize: 32,
        fontWeight:'600'
    },
    optionStatusText:{
        fontSize: 12,
        alignSelf:'flex-end'
    }, 
    contentContainer: {
      paddingTop: 15,
      paddingHorizontal: 20
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
    optionTextContainer:{
      flex:1,
      display: 'flex',
    },
    optionTextContainerDate:{
        flex:3,
        display: 'flex',
        marginLeft: 0
    },
    option: {
      flexDirection: 'row',
      display:'flex',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: '#ededed',
      height: 60,
      alignItems:'center'
    },
    lastOption: {
      flexDirection: 'row',
      display:'flex',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderColor: '#ededed',
      borderBottomWidth: 0,
      height: 60,
      alignItems:'center'
    }
});