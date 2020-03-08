import React from 'react';
import { Text,StyleSheet,View,Image,Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


export default function TimeOption({ index, day, timeRange, hilighted, isLastOption, onPress}) {

    const press = (e) => {
        onPress();
    }

    let btnStyle = [];
    if(isLastOption){
        btnStyle.push(styles.lastOption);
    }
    else{
        btnStyle.push(styles.option);
    }

    if(hilighted){
        btnStyle.push(styles.selected);
    }

    return (
      <RectButton style={btnStyle} onPress={press}>
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>{ index }</Text>
            </View>
            <View style={styles.optionTextContainerDate}>
                <Text style={styles.optionTextDate}>{ day }</Text>
            </View>
            <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>{ timeRange }</Text>
            </View>
        </View>
      </RectButton>
    );
  }


  const styles = StyleSheet.create({
    selected:{
        backgroundColor: '#6CD34C'
    },
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
    optionTextContainer:{
      flex:1,
      display: 'flex',
    },
    optionTextContainerDate:{
        flex:1,
        display: 'flex',
        marginLeft: -30
      },
    option: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
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
        paddingHorizontal: 15,
      paddingVertical: 10,
      borderColor: '#ededed',
      borderBottomWidth: 0,
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
    optionTextDate: {
        fontSize: 18,
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
  