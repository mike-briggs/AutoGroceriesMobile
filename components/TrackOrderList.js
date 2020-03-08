import React from 'react';
import colors from '../constants/Colors';

export default TrackOrderList = ({ current }) => {

    return (
        <View style={styles.contentContainer}>
            <Option 
                num='1'
                numColor={(num < current)?(colors.accentGreen):(null)}
                stage='RECIEVED'
                state='COMPLETE'
                isLast={false}/>
            <Option 
                num='2'
                numColor={(num < current)?(colors.accentGreen):(null)}
                stage='GATHERING'
                state='IN PROGRESS'
                isLast={false}/>
            <Option 
                num='3'
                numColor={(num < current)?(colors.accentGreen):(null)}
                stage='PACKING'
                state='PENDING'
                isLast={false}/>
            <Option 
                num='4'
                numColor={(num < current)?(colors.accentGreen):(null)}
                stage='LOADING'
                state='PENDING'
                isLast={false}/>
            <Option 
                num='5'
                numColor={(num < current)?(colors.accentGreen):(null)}
                stage='OUT FOR DELIVERY'
                state='PENDING'
                isLast={false}/>
        </View>
    );
}

const Option = ({ num, numColor, stage, state, isLast }) => {
    return (
        <View style={(isLast)?(styles.lastOption):(styles.option)}>
            <View style={styles.optionTextContainer}>
                <Text style={[styles.optionText, (numColor)?({ color: numColor }):({})]}>{ num }</Text>
            </View>
            <View style={styles.optionTextContainerDate}>
                <Text style={styles.optionTextDate}>{ stage }</Text>
            </View>
            <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>{ state }</Text>
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
    lastOption: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderColor: '#ededed',
      borderBottomWidth: 0,
    }
});