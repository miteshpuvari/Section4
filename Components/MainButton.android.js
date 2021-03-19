// Building Custome Button Compunent

import React from 'react';
import {View, 
        Text, 
        StyleSheet, 
        TouchableOpacity, 
        Platform,
        TouchableNativeFeedback
        } from 'react-native';

import Colors from '../Constants/Colors';

const MainButton = props => {

    let ButtonComponent = TouchableOpacity;

    if(Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return ( 
    <View style={styles.buttonContainer}>
    <ButtonComponent activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.button} >
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </ButtonComponent>
    </View> 
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: 'center'
    },
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

export default MainButton;