import * as React from 'react';
import BarIcon from './BarIcon.js';

import {Text} from 'react-native';

export default function TextIcon(props) {
  return (
    <Text style={props.sheet} ><BarIcon size={props.size} name={props.name} color={props.color}/>{"    "+props.text}</Text>
    );
}