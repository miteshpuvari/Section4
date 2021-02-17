import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        textShadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        borderRadius: 10,
        shadowOpacity: 0.26,
        elevation: 10,
        backgroundColor: 'white',
        padding: 20,
    }
});

export default Card;