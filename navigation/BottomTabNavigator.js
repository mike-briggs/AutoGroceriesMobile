import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import BarIcon from '../components/BarIcon';
import BrowseScreen from '../screens/BrowseScreen';
import SearchScreen from '../screens/SearchScreen';
import PantryScreen from '../screens/PantryScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route),
                          headerTitleAlign:'center',
                          headerRightContainerStyle:{padding:20},
                          headerRight:()=><BarIcon size={30} onPress={() => navigation.navigate('Profile')
  }
   color={'#6CD34C'} name="person"  /> });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={BrowseScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="cart"  />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search" />,
        }}
      />
      <BottomTab.Screen
        name="Pantry"
        component={PantryScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-options" ios="ios-options-outline" android="md-options"/>,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'AutoGrocery';
    case 'Search':
      return 'Search';
    case 'Pantry':
      return 'Pantry';
    case 'Profile':
      return 'Profile';
  }
}
