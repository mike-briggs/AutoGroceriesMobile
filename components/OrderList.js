import * as React from 'react';
import IngredientItem from './IngredientItem.js';
import { StyleSheet, Text, View } from 'react-native';

export default function OrderList({ ingredients,navigation }){
    const { MeatContent, PantryContent, ProduceContent, FrozenContent } = unpack(ingredients);

    console.log(MeatContent);
    return (
        <View style={styles.wrapper}>
            {(MeatContent())?(
                <View style={styles.section}>
                    <Text style={styles.title}>Meat</Text>
                    <MeatContent />
                </View>
            ):(null)}
            {(PantryContent())?(
            <View style={styles.section}>
                <Text style={styles.title}>Pantry</Text>
                <PantryContent />
            </View>
            ):(null)}
            {(ProduceContent())?(
            <View style={styles.section}>
                <Text style={styles.title}>Produce</Text>
                <ProduceContent />
            </View>
            ):(null)}
            {(FrozenContent())?(
            <View style={styles.section}>
                <Text style={styles.title}>Frozen</Text>
                <FrozenContent />
            </View>
            ):(null)}
        </View>
    );
}

const unpack = ({ meat, pantry, produce, frozen }) => {
    const mapper = (input) => {
        if(input){
            return () => {
                let mapped = input.map( item => (<IngredientItem ingredient={item} style={(input.indexOf(item) != input.length-1)?(styles.mid):({})}/>))
                if(mapped.length > 0)
                    return mapped;
            };
        }
    }

    return {
        MeatContent: mapper(meat),
        PantryContent: mapper(pantry),
        ProduceContent: mapper(produce),
        FrozenContent: mapper(frozen)
    }
}

const styles = StyleSheet.create({
    wrapper:{
        paddingTop: 10,
    },
    title: {
        marginTop: 0,
        fontWeight: '600',
        fontSize: 24,
    },
    section:{
        flexDirection: 'column',
        display: 'flex',
        marginLeft: 20,
        marginBottom: 32,
        paddingBottom: 20
    },
    mid:{
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1.5,
        width:'100%'
    }
});