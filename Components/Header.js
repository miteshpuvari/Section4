import React from 'react';
import {View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../Constants/Colors';
const Header = props => {
    return(
        <View style={{
            ...styles.headerBase, 
            ...Platform.select({
                ios: styles.headerIOS, 
                android: styles.headerAndroid
                })
            }}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {
        backgroundColor: 'white',  
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary,         
    },
    headerTitle: {
        
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
        fontSize: 18,   
    }
});

export default Header;