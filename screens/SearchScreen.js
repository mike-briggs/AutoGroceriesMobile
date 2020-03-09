import * as React from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import TextIcon from '../components/TextIcon'
import { OptionButton } from '../components/OptionButton';
import { SearchBar } from 'react-native-elements';

export default class SearchScreen extends React.Component {
  
  constructor({ navigation }){
    super()

    this.state = {
      search: '',
      pantry:[],
      filtered:[],
      spices:['Butter Chicken','Pasta','Tacos','Power Bowl'],
      navigation:navigation
    };

    
    
        console.log(this.state.filtered)
        console.log(this.state.filtered)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "query": "chicken", "cuisine": "", "intolerences": "", "diet": "" });


        var requestOptions2 = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://api.spoonacular.com/recipes/search?apiKey=b99ab6f1589c4bde9e171cdcf1602c8f")
            .then(response => response.text())
            .then((result) => {

                var json = JSON.parse(result);

                this.setState({filtered:json})
                console.log('hello')
                console.log(this.state.filtered)
            })
            .catch(error => console.log('error', error));
        
    
  }

  updateSearch = search => {
    let s = search.toLowerCase()
    this.setState({ search:s });
  };

  updatePantry = (remove,value) => {
    
    this.setState({pantry:this.state.pantry.concat(value)})
    console.log(this.state.pantry[0])
    console.log(value)
  }

  render(){ 
    const { search,spices,pantry,filtered } = this.state;
    return(
    
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{ flexDirection: 'column', display: 'flex', marginLeft: 20, marginBottom: 32 }}>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Search Recipes</Text>
          <Text style={styles.p}>Search your favourite meals!</Text>
        </View>

      </View>
      <View>
      
      <SearchBar
        placeholder="Search Ingredients"
        onChangeText={this.updateSearch}
        selectionColor='#000'

        value={search}
        lightTheme='light'
        containerStyle={{backgroundColor:'white',borderBottomWidth:0,borderTopWidth:0}}
        inputContainerStyle={{backgroundColor:'rgba(0,0,0,0.05)'}}
      />
      </View>
      <View>

        {(search.length != '') ? filtered.filter(item => item.toLowerCase().includes(search)).slice(0,4).map(item =>(
          <OptionButton
          left={false}
          icon="arrow-forward"
          label={item.title}
          onPress={() => this.props.navigation.navigate('Recipe',{title:item.title})}
        />
        )):spices.slice(0,5).sort().map(item =>(
          <OptionButton
          left={false}
          icon="arrow-forward"
          label={item}
          onPress={() => this.props.navigation.navigate('Recipe',{title:item})}
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
