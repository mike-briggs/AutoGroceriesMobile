import React,{useEffect} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import units from '../constants/Units.js';
import OrderList from '../components/OrderList.js';
import { RecipeCard } from '../components/RecipeCard';
import Icon from 'react-native-ionicons';
import {Button} from 'react-native-elements';
import IngredientItem from '../components/IngredientItem';
import { RectButton } from 'react-native-gesture-handler';
import {  InstagramLoader } from 'react-native-easy-content-loader';

export default function OrderDetails({ navigation,route }){
    navigation.setOptions({headerTitleAlign:'center'})
    const[currentOrder,setCurrentOrder] = React.useState(JSON.stringify(route.params.order))
    const [cart, setCart] = React.useState();
    let orderTotal = 0;
    const [ deleteLoading, setDeleteLoading ] = React.useState(false);
    const [ clearLoading, setClearLoading ] = React.useState(false);


    const getCart = async () => {
        try{
            const res = await fetch('https://meal-planner-qhacks-2020.appspot.com/get-cart',{method:'get'});
            const body = await res.json();
            setCart(body);
        }
        catch(e){
            alert('unable to get cart, please connect to the internet or log in again');
        }

    }

    const deleteFromCart = async (id, index) => {
        if(!deleteLoading){
            setDeleteLoading(true);
            fetch('https://meal-planner-qhacks-2020.appspot.com/remove-from-cart',{
                method:'post',
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({id:id})}).then(res => {
                let tmpCart = cart;
                tmpCart.splice(index, 1);
                setCart(tmpCart);
                setDeleteLoading(false);
                alert('item deleted');
            }).catch((e)=>{setDeleteLoading(false);alert('unable to delete from cart')});
        }
    } 

    const clearCart = async () => {
        if(!clearLoading){
            setClearLoading(true);
            try{
                let res = await fetch('https://meal-planner-qhacks-2020.appspot.com/clear-cart',{
                    method:'get',
                    headers: {
                        'Content-Type':'application/json',

                    },
                });
                if(res.ok){
                    let body = await res.json();
                    navigation.navigate('CheckEmail');
                    setClearLoading(false);
                }
                else{
                    alert('unable to place order');
                    setClearLoading(false);
                }
            }catch(e){
                alert('unable to place order');
                setClearLoading(false);
            }
        }
    }

    useEffect(()=>{
        getCart();
       
        setCurrentOrder(JSON.stringify(route.params.order))

    },[]);
    return (
        <View style={styles.container}>
            <ScrollView>
                {(cart)?cart.map((item, index)=>{
                    let subOrderTotal = 0;

                    return (<View style={styles.card}>
                        <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', marginVertical:10}}>
                            <Text style={[styles.orderTitle, {flex:3}]}>{item.recipe.title}</Text>
                            <View style={[styles.btnContainer, {flex:1}]}>
                                <RectButton onPress={() => deleteFromCart(item.recipe.id, index)} style={styles.btn}>
                                    <Icon name="remove" size={26} color="red" />
                                </RectButton>
                            </View> 
                        </View>
                        {item.ingredients.map((ingredient, index, arr) => {
                            let addition = parseFloat(ingredient.price.substring(1, ingredient.price.length))
                            subOrderTotal += addition;
                            orderTotal += addition;
                            return (<IngredientItem ingredient={{name:ingredient.name, quantity:ingredient.source_value.measures.metric, price:ingredient.price}} style={(index != arr.length-1)?(styles.mid):({})}/>);
                        })}
                        <View style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <Text style={styles.subTotal}>Bulk Ingredient Price: ${subOrderTotal.toFixed(2)}</Text>
                            <Text style={styles.servings}>Approx $ / Serving: ${(subOrderTotal/15).toFixed(2)}</Text>
                        </View>
                    </View>
                )}):<View><InstagramLoader active /><InstagramLoader active /><InstagramLoader active /></View>}
                <View style={styles.orderTotal}>
                    <View style={styles.textContainer}>
                        <Text style={styles.orderTitle}>Order Total:</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.orderDetail}>${ orderTotal.toFixed(2) }</Text>
                    </View>
                </View>
                {/*<View>
                    {(false)?cart.map(item => 
                    (
                        <TouchableOpacity key={item.id} style={{ width: '100%' }} onPress={() => navigation.navigate('Recipe', {readyTime:item.readyInMinutes, servings:item.servings, id:item.id, title: item.title, image: baseUri + '' + item.imageUrls })}><RecipeCard image={baseUri + '' + item.imageUrls} title={item.title} readyTime={item.readyInMinutes} servings={item.servings}/></TouchableOpacity>)):<Text>Loading ...</Text>}
                    {(route.params.order.results!=null)?route.params.order.results.map(item=>(<TouchableOpacity key={item.id} style={{ width: '100%' }} onPress={() => navigation.navigate('Recipe', {title:item.title,image:JSON.stringify(route.params.imageUrl) +''+item.imageUrls})}><RecipeCard image={route.params.imageUrl +''+item.imageUrls} title={item.title}/></TouchableOpacity>)):<Text>No Recipes in Cart</Text>}
                </View>*/}
            </ScrollView>
            <View style={styles.tabBarInfoContainer}>
                <View style={{flex:1}}>

                </View>
                <View style={{flex:1,alignSelf:'flex-end',width:'50%',margin:15}}>
                    {(orderTotal===0) ? <Button
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
                                        size={16}
                                        color="white"
                                        style={{paddingLeft:10, paddingTop:2}}
                                    />
                                }
                                iconRight
                                title="ADD RECIPES"
                            />:<Button
                            onPress={()=>clearCart()}
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
                                    size={16}
                                    color="white"
                                    style={{paddingLeft:10, paddingTop:2}}
                                />
                            }
                            iconRight
                            title="PLACE ORDER"
                        />}
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
    btnContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    btn:{
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
        backgroundColor:'#fff',
        borderRadius:15,
        padding: 2,
        paddingHorizontal:6
    },
    card: {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
        backgroundColor:'#fff',
        width:'100%',
        height: 'auto',
        borderRadius:10,
        marginVertical: 20,
        paddingHorizontal: 10
    },
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
        alignSelf: 'flex-end',
        marginTop: 1,
        fontWeight: '600'
    },
    subTotal:{
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: '600'
    }, 
    servings:{
        fontSize: 14,
        marginTop: 10,
        marginBottom: 20,
        fontWeight: '400'
    }, 
    orderTitle:{
        fontSize: 24,
        alignSelf: 'flex-start',
        marginTop: 1,
        fontWeight: '600'
    }, 

    orderTotal:{
        display:'flex',
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
        borderBottomColor: '#ccc', paddingBottom: 100, borderBottomWidth: StyleSheet.hairlineWidth 
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
    mid:{
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1.5,
        width:'100%'
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