import * as React from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';
import {  ScrollView } from 'react-native-gesture-handler';
import { OptionButton } from '../components/OptionButton';
import { SearchBar } from 'react-native-elements';

export default class PantryScreen extends React.Component {
  
  constructor({ navigation: { navigate } }){
    super()

    this.state = {
      pantryLoading: false,
      itemsLoading: true,
      search: '',
      pantry:[],
      spices:['Oregano','Rosemary','Chili Flakes','Salt','Pepper','Basil','Saffron','Garlic','Olive Oil','Cashews','Tomato Paste', 'Canned Tomatoes', 'Black Beans', 'Kidney Beans', 'Turmeric','Chickpeas','Brown Sugar', 'Granulated Sugar', 'White Beans', 'Icing Sugar', 'Honey', 'Peanut Butter','Almonds','Rolled Oats', 'Quinoa','Flax Seeds','Rice','Paprika','Cumin','Lentils','Vanilla','Baking Soda', 'Baking Powder','All Purpose Flour', 'Yeast', 'Coconut Milk'  ]
    };

  }

  loadPantryItems = async () => {
    this.setState({itemsLoading:true});
    try{
        let res = await fetch('https://meal-planner-qhacks-2020.appspot.com/get-pantry',{
            method:'get'
        });
        if(res.ok){
            let body = await res.json();
            this.setState({pantry:body.ingredients});
        }
        else{
            alert('Unable to load your pantry items.');
        }
    }
    catch(e){
        alert('Unable to load your pantry items.');
    }
    this.setState({itemsLoading: false});
  }

  addIngredients = async (ingredient, callBack) => {
    this.setState({pantryLoading:true});
    try{
        let res = await fetch('https://meal-planner-qhacks-2020.appspot.com/add-to-pantry',{
            method:'post',
            headers: {
                'Content-Type':'application/json',

            } ,
            body:JSON.stringify({
                ingredients: [ingredient] 
            })
        });
        if(res.ok){
            let body = await res.json();
            callBack();
        }
        else{
            alert('unable to store pantry items');
        }
    }
    catch(e){
        alert('unable to store pantry items');
    }
    this.setState({pantryLoading: false});
  }

  removeIngredients = async (ingredient, callBack) => {
    this.setState({pantryLoading:true});
    try{
        let res = await fetch('https://meal-planner-qhacks-2020.appspot.com/remove-from-pantry',{
            method:'post',
            headers: {
                'Content-Type':'application/json',

            } ,
            body:JSON.stringify({
                ingredients: [ingredient] 
            })
        });
        if(res.ok){
            let body = await res.json();
            callBack();
        }
        else{
            alert('unable to store pantry items');
        }
    }
    catch(e){
        alert('unable to store pantry items');
    }
    this.setState({pantryLoading: false});
  }

  componentDidMount(){
    this.loadPantryItems();
  }

  updateSearch = search => {
    this.setState({ search:search.toLowerCase()+'' });
  };

  updatePantry = (remove,value) => {
    if(!this.state.pantryLoading){
      if(remove){
        //Keeps elements in pantry that aren't equal to the value we want to remove
        this.removeIngredients(value, () => {
          this.setState({pantry:this.state.pantry.filter(a => a != value)})
          this.setState({search:''});
        });
      }else{
        this.addIngredients(value, () => {
          this.setState({pantry:((this.state.pantry.indexOf(value) == -1) ? this.state.pantry.concat(value) : this.state.pantry)})
          this.setState({search:''});
        });
      }
      
      console.log(this.state.pantry[0])
      console.log(value)
    }
  }

  render(){ 
    const { search,spices,pantry } = this.state;
    return(
    
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
        value={search}
        autoCapitalize="none"
        onChangeText={this.updateSearch}
        containerStyle={{backgroundColor:'white',borderBottomWidth:0,borderTopWidth:0}}
        inputContainerStyle={{backgroundColor:'rgba(0,0,0,0.05)'}}
      />
      <ScrollView>{(search.length != '') ? spices.filter(item => item.toLowerCase().includes(search)).slice(0,4).map(item =>(
          <OptionButton
          
          left={false}
          icon="add"
          color='#6CD34C'
          label={item}
          onPress={() => this.updatePantry(false,item)}
        />
        ))
        //Don't render a list if search bar is empty
        :<></>}</ScrollView>
        <View style={{padding:20}}>
        <Text style={{fontSize:24,fontWeight:'600'}}>In Pantry</Text>
        {(this.state.itemsLoading)?(<View style={{display:'flex',justifyContent:'center'}}><Text style={{ fontSize: 14, fontweight: '400' }}>LOADING ITEMS</Text></View>):((pantry.length == 0) ? <Text style={{ fontSize: 14, fontweight: '400' }}>Nothing in pantry.</Text> : <></>)}
        </View>
        
      {(pantry.length > 0) ? pantry.map(item =>{console.log(item);return (
          <OptionButton
          left={false}
          icon="remove"
          color='red'
          label={item}
          onPress={() => this.updatePantry(true,item)}
        />
        )}):<></>
        }
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
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    flex: 1,
    marginRight: 12,
    marginLeft: 12,
    textAlign:'right',
  },
  title: {

    marginTop: 16,
    fontWeight: '600',
    fontSize: 18,
  },
  optionTextContainer:{
    flex:9,
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
