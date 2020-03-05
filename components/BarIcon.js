import * as React from 'react';
import  Icon  from 'react-native-ionicons';

export default function BarIcon(props) {
  return (
    <Icon
    name={props.name}
    onPress={props.onPress}
      size={props.size}
      style={{ marginBottom: -3 }}
      color={props.color}
    />
  );
}
