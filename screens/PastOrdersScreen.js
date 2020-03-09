import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import OrderCard from '../components/OrderCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function PastOrdersScreen({ navigation }){
    return (
        <View style={styles.container}>
            <ScrollView>
                <OrderCard store='Metro' recipies={['Chicken', 'Pasta', 'More Chicken']} total='42.82' day='2019-11-24' orderNumber='#08357607'/>
                <OrderCard store='Metro' recipies={['Chicken', 'Pasta', 'More Chicken']} total='42.82' day='2019-11-24' orderNumber='#08357607'/>
                <OrderCard store='Metro' recipies={['Chicken', 'Pasta', 'More Chicken']} total='42.82' day='2019-11-24' orderNumber='#08357607'/>
                <OrderCard store='Metro' recipies={['Chicken', 'Pasta', 'More Chicken']} total='42.82' day='2019-11-24' orderNumber='#08357607'/>
                <OrderCard store='Metro' recipies={['Chicken', 'Pasta', 'More Chicken']} total='42.82' day='2019-11-24' orderNumber='#08357607'/>
                <OrderCard store='Metro' recipies={['Chicken', 'Pasta', 'More Chicken']} total='42.82' day='2019-11-24' orderNumber='#08357607'/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',

    }
});