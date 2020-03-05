import * as React from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';
import {  ScrollView } from 'react-native-gesture-handler';
import { OptionButton } from '../components/OptionButton';
import { SearchBar } from 'react-native-elements';

export default class PantryScreen extends React.Component {
  
  constructor({ navigation: { navigate } }){
    super()

    this.state = {
      search: '',
      pantry:[],
      spices:['Oregano','Rosemary','Chili Flakes','Salt','Pepper','Basil','Saffron']
    };

  }

  updateSearch = search => {
    this.setState({ search });
  };

  updatePantry = (remove,value) => {
    if(remove){
      //Keeps elements in pantry that aren't equal to the value we want to remove
      this.setState({pantry:this.state.pantry.filter(a => a !== value)})
    }
    this.setState({pantry:this.state.pantry.concat(value)})
    console.log(this.state.pantry[0])
    console.log(value)
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
      <View>
      {(pantry.length > 0) ? pantry.map(item =>(
          <OptionButton
          left={false}
          icon="add"
          label={item}
          onPress={() => this.updatePantry(true,item)}
        />
        )):<></>
        }
      <SearchBar
        placeholder="Search Ingredients"
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{backgroundColor:'white',border:'none'}}
        inputContainerStyle={{backgroundColor:'rgba(0,0,0,0.05)'}}
      />
      </View>
      <View>

        {(search.length != '') ? spices.filter(item => item.toLowerCase().includes(search)).slice(0,4).map(item =>(
          <OptionButton
          left={false}
          icon="add"
          label={item}
          onPress={() => this.updatePantry(false,item)}
        />
        )):spices.slice(0,5).sort().map(item =>(
          <OptionButton
          left={false}
          icon="add"
          label={item}
          onPress={() =>this.updatePantry(false,item)}
        />
        ))}
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
