import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements'

export default function OrderCard({ store, recipies, total, day, orderNumber }){
    return (<View style={styles.cardContainer}>
        <View style={styles.topContent}>
            <View style={styles.header}>
                <Text style={styles.store}> {store} </Text>
                <Text style={styles.date}> {day} </Text>
            </View>
            <View style={styles.midContent}>
                <View style={styles.recipeList}>
                    <Text style={styles.recipeHeader}> Recipes </Text>
                    <ScrollView>
                        <RecipeList recipies={recipies}/>
                    </ScrollView>
                </View>
                <View style={styles.rightContent}>
                    <Text style={styles.orderNumber}> {orderNumber} </Text>
                    <Text style={styles.fullOrderLink} onPress={() => console.log('pressed!!!')}> View Full Order </Text>
                </View>
            </View>
        </View>
        <View style={styles.bottomContent}>
            <Text style={styles.totalHeader}>Total</Text>
            <Text style={styles.total}>{ total }</Text>
            <Button buttonStyle={styles.orderAgainButton} onPress={()=>{}} title='Order Again'/>
        </View>
    </View>)
}

const RecipeList = ({recipies}) => {
    return recipies.map( (item, index) => (<Text style={(index == recipies.length-1)?(styles.lastRecipe):(styles.recipe)}>{ item }</Text>));
}

const styles = StyleSheet.create({
    cardContainer:{
        display: 'flex',
        flexDirection: 'column',
        borderRadius:5,
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        backgroundColor:'#FFF',
        margin:20
    },
    topContent:{
        paddingHorizontal:20,
        paddingTop:20,
    },
    midContent:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    rightContent:{
        alignItems:"flex-end",
    },
    bottomContent:{
        borderColor:'black',
        borderWidth: '1',
        display: 'flex',
        flexDirection:'row',
        paddingHorizontal:20,
        paddingBottom:20,
        paddingTop:10,
        justifyContent:'space-between',
        alignItems:'center',
    },
    totalHeader:{
        fontWeight:'600',
        fontSize:15
    },
    total:{
        fontWeight:'600',
        fontSize:15,
    },
    recipeList:{

    },
    recipe:{
        fontWeight:'600',
        fontSize:10,
        margin:2,
        borderBottomColor: '#EBEBEB'
    },
    lastRecipe:{
        margin:2,
        fontWeight:'600',
        fontSize:10,
    },
    recipeHeader:{
        fontWeight:'600',
        fontSize: 12,
    },
    header:{
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    store:{
        fontSize:20,
        fontWeight:'600',

    },
    date:{
        color:'#BABABA',
        fontSize:15,
    },
    orderNumber:{
        color:'#BABABA',
        fontSize:12,
    },
    fullOrderLink:{
        margin:20,
        fontSize:12,
        fontWeight:'600'
    },
    orderAgainButton:{
        borderRadius:40,
        backgroundColor:'#6CD34C',
        fontWeight:'500',
        float:'right',
        paddingHorizontal:15,
        paddingVertical:5
    },
});