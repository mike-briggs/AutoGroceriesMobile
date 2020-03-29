import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewSignupScreen({navigation}){
    return (
        <View style={{display:'flex', flex:1, height:'100%', width:'100%'}}>
            <WebView
                source={{uri:"https://www.instacart.ca"}}
                style={{flex:1}}
            />
        </View>
    );
}

