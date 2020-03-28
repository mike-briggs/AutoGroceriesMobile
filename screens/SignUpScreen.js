import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-ionicons'
import { Input, Button } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser';

export default function SignUpScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/*<View style={styles.welcomeContainer}>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>Welcome to Auto Grocery</Text>
                <Text style={{ fontSize: 14, fontweight: '400' }}>Create your account below.</Text>
            </View>*/}
            <View style={{ flex: 1 }}>

            </View>
            <View style={{ flex: 10 }}>
                <View style={{ padding: 20 }}>
                    <Input
                        label="Email Address"
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={{ borderBottomWidth: 0, borderRadius: 30, fontSize: 1, height: 48, backgroundColor: 'rgba(0,0,0,0.05)' }}
                        leftIcon={
                            <Icon
                                name='send'
                                size={20}
                                color='#6CD34C'
                                style={{ paddingRight: 10 }}
                            />
                        }
                    />
                    <Input
                        label="Username"
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={{ borderBottomWidth: 0, borderRadius: 30, fontSize: 1, height: 48, backgroundColor: 'rgba(0,0,0,0.05)' }}
                        leftIcon={
                            <Icon
                                name='person'
                                size={20}
                                color='#6CD34C'
                                style={{ paddingRight: 10 }}
                            />
                        }
                    />
                    <Input
                        label="Password"
                        labelStyle={styles.inputLabel}
                        secureTextEntry={true}
                        inputContainerStyle={{ borderBottomWidth: 0, borderRadius: 30, fontSize: 1, height: 48, backgroundColor: 'rgba(0,0,0,0.05)' }}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={20}
                                color='#6CD34C'
                                style={{ paddingRight: 10 }}
                            />
                        }
                    />
                    <Input
                        label="Confirm Password"
                        secureTextEntry={true}
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={{ borderBottomWidth: 0, borderRadius: 30, fontSize: 1, height: 48, backgroundColor: 'rgba(0,0,0,0.05)' }}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={20}
                                color='#6CD34C'
                                style={{ paddingRight: 10 }}
                            />
                        }
                    />

                </View>
                <View style={styles.tabBarInfoContainer}>
                    <View style={{ flex: 1 }}>
                        <Button
                            onPress={() => navigation.navigate('Ingredients')
                            }
                            buttonStyle={{ borderRadius: 40, backgroundColor: '#6CD34C', fontWeight: '500', float: 'right', padding: 15 }}
                            icon={
                                <Icon
                                    name="arrow-forward"
                                    size={18}
                                    color="white"
                                    style={{ paddingLeft: 10, paddingTop: 2 }}
                                />
                            }
                            iconRight
                            title='SIGN UP'
                        />
                    </View>


                </View>

                <View style={{ textAlign: 'center', paddingTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >

                    <Text style={{ textAlign: 'center' }}>Already own an account?</Text>
                    </TouchableOpacity>

                </View>

                
            </View>
            <View style={{ flex: 1 }}>

            </View>

        </View>
    );
}

SignUpScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    inputContainer: {
        paddingBottom: 15,
        borderBottomWidth:0
    },
    inputLabel: {
        paddingVertical: 10,
        color: '#808080',
        
    },
    category: {
        marginHorizontal: 20,
        flexDirection: 'row',
        textAlign: 'left'
    },
    categoryCard: {

    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 15,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    BrowseScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 20,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        bottom: 0,
        margin: 10,
        left: 0,
        right: 0,
        flex:1,
        padding:30,
        flexDirection:'column',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 6,
            },
            android: {
                elevation: 7,
            },
        }),
        backgroundColor: 'transparent',
        paddingVertical: 0,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

