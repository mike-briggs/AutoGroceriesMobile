import * as React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { OptionButton } from '../components/OptionButton';
import { SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-ionicons'


export default class StartingIngrdients extends React.Component {

    constructor({ navigation }) {
        super()

        navigation.setOptions({
            headerTitle: "Add Ingredients",
            headerTitleAlign: 'center',
            headerRightContainerStyle: { paddingRight: 20 },
            headerRight: null,
            navigation:navigation,
            headerLeft: null
        });

        this.state = {
            pantryLoading: false,
            itemsLoading: true,
            search: '',
            pantry: [],
            spices: ['Oregano', 'Rosemary', 'Chili Flakes', 'Salt', 'Pepper', 'Basil', 'Saffron', 'Garlic', 'Olive Oil', 'Cashews', 'Tomato Paste', 'Canned Tomatoes', 'Black Beans', 'Kidney Beans', 'Turmeric', 'Chickpeas', 'Brown Sugar', 'Granulated Sugar', 'White Beans', 'Icing Sugar', 'Honey', 'Peanut Butter', 'Almonds', 'Rolled Oats', 'Quinoa', 'Flax Seeds', 'Rice', 'Paprika', 'Cumin', 'Lentils', 'Vanilla', 'Baking Soda', 'Baking Powder', 'All Purpose Flour', 'Yeast', 'Coconut Milk']
        };

    }

    loadPantryItems = async () => {
        this.setState({itemsLoading:true});
        try{
            let res = await fetch('https://meal-planner-qhacks-2020.appspot.com/get-user-pantry',{
                method:'get'
            });
            console.log(res);
            if(res.ok){
                let body = await res.json();
                console.log(body);
            }
            else{
                //alert('Unable to load your pantry items.');
            }
        }
        catch(e){
            alert('Unable to load your pantry items.');
            console.log('error');
            console.log(e);
        }
        this.setState({itemsLoading: false});
    }

    componentDidMount(){
        this.loadPantryItems();
    }

    addIngredients = async () => {
        const ingredients = this.state.pantry;
        this.setState({pantryLoading:true});
        try{
            let res = await fetch('https://meal-planner-qhacks-2020.appspot.com/add-user-pantry',{
                method:'post',
                headers: {
                    'Content-Type':'application/json',

                } ,
                body:JSON.stringify({
                    new_pantry_items: this.state.pantry
                })
            });
            console.log(res);
            if(res.ok){
                let body = await res.json();
                console.log(body);
                this.props.navigation.navigate('root');
            }
            else{
                alert('unable to store pantry items');
            }
        }
        catch(e){
            console.log('error');
            console.log(e);
        }
        this.setState({pantryLoading: false});
    }

    updateSearch = search => {
        let s = search.toLowerCase()
        this.setState({ search: s });
    };

    updatePantry = (remove, value) => {
        let editedList = []
        if (remove) {
            //Remove element by splicing at the index of the value we want to remove
            editedList = this.state.pantry
            editedList.splice(editedList.indexOf(value), 1) 
            
            this.setState({ pantry: editedList })
           //Optionally reset search after adding item
           // this.setState({ search: '' })
        } else {
            //Check if ingredient is already in pantry (index is -1)
            this.setState({ pantry: ((this.state.pantry.indexOf(value) == -1) ? this.state.pantry.concat(value) : this.state.pantry) })
            //Remove ingredient from list of options 
            editedList = this.state.spices
            editedList.splice(editedList.indexOf(value), 1) 
            this.setState({ spices: editedList})

            this.setState({ search: '' })
        }

        console.log(this.state.pantry[0])
        console.log(value)
    }

    render() {
        const { search, spices, pantry } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ flexDirection: 'column', display: 'flex', marginLeft: 20, marginBottom: 32 }}>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>Add Ingredients</Text>
                            <Text style={styles.p}>Search for things you already own and we won't add them at checkout.</Text>
                        </View>

                    </View>
                    <View >

                        <SearchBar
                            placeholder="Search Ingredients"
                            lightTheme="light"
                            round
                            value={search.toLowerCase()}
                            onChangeText={this.updateSearch}
                            containerStyle={{ backgroundColor: 'white', borderBottomWidth: 0, borderTopWidth: 0 }}
                            inputContainerStyle={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                        />
                        {(search.length != '') ? spices.filter(item => item.toLowerCase().includes(search)).slice(0, 4).map(item => (
                            <OptionButton

                                left={false}
                                icon="add"
                                color='#6CD34C'
                                label={item}
                                onPress={() => this.updatePantry(false, item)}
                            />
                        ))
                            //Render a list if search bar is empty
                            : spices.slice(0, 5).map(item => (
                                <OptionButton
    
                                    left={false}
                                    icon="add"
                                    color='#6CD34C'
                                    label={item}
                                    onPress={() => this.updatePantry(false, item)}
                                />
                            ))}
                        <View style={{ padding: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '600' }}>In Pantry</Text>
                            {(this.state.itemsLoading)?(<View style={{display:'flex',justifyContent:'center'}}><Text style={{ fontSize: 14, fontweight: '400' }}>LOADING ITEMS</Text></View>):((pantry.length == 0) ? <Text style={{ fontSize: 14, fontweight: '400' }}>Nothing in pantry.</Text> : <></>)}
                        </View>
                        <View style={{paddingBottom:40}}>
                        {(pantry.length > 0) ? pantry.map(item => (
                            <OptionButton
                                left={false}
                                icon="remove"
                                color='red'
                                label={item}
                                onPress={() => this.updatePantry(true, item)}
                            />
                        )) : <></>
                        }
                        </View>
                        
                    </View>

                    <View >


                        {/*<OptionButton
        left={false}
        icon="add"
        label="Oregano"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
      left={false}
        icon="add"
        label="Basil"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
      left={false}
        icon="add"
        label="Salt"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
      <OptionButton
      left={false}
        icon="add"
        label="Pepper"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
      <OptionButton
      left={false}
        icon="add"
        label="Oil"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />*/}
                    </View>

                </ScrollView>
                <View style={styles.tabBarInfoContainer}>
                <View style={{flex:1}}>

                </View>
                <View style={{flex:1}}>
                <Button
                        onPress={() => {this.addIngredients()}}
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
                                name={(this.state.pantryLoading)?"hourglass":"arrow-forward"}
                                size={18}
                                color="white"
                                style={{paddingLeft:10, paddingTop:2}}
                            />
                        }
                        iconRight
                        title={(this.state.pantryLoading)?"LOADING":"ALL DONE"}
                    /> 
                </View>
            
            </View>

            </View>
        );
    }
}

/*function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
      <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
        <View style={styles.optionIconContainer}>
          <Icon name={'add'} size={22} color="rgba(0,0,0,0.90)" />
        </View>
        
      </View>
    </RectButton>
  );
}*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    tabBarInfoContainer: {
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
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        flex: 1,
        marginRight: 12,
        marginLeft: 12,
        textAlign: 'right',
    },
    title: {

        marginTop: 16,
        fontWeight: '600',
        fontSize: 18,
    },
    optionTextContainer: {
        flex: 9,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
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
        borderBottomWidth: StyleSheet.hairlineWidth,
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
    },
});
