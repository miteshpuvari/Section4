import React from 'react';
import {View, StyleSheet, Text, } from 'react-native';

const GameOverScreen = props => {
    return <View style={style.screen}>
        <Text>The Game is Over!!</Text>
    </View>
};

const style = StyleSheet.create({
     screen: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     }
});

export default GameOverScreen;