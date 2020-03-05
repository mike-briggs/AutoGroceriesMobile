import * as React from 'react';
import { Icon } from 'react-native-elements'

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon
      name="bowl"
      ios={props.ios}
      android={props.android}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
