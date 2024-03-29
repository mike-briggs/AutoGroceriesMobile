import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Welcome:'welcome',
          Browse:'browse',
          Search:'search',
          SignIn:'sign-in',
          Ingredients:'ingredients',
          Home: 'home',
          Search: 'search',
          Pantry: 'pantry',
        },
      },
    },
  });
}
