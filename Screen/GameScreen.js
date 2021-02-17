import React, {useRef} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import { useState } from 'react';

import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';

const generateRandomeBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomeBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomeBetween(1, 100, props.userChoice));

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    
    const nextGuessHandelar = direction => {

        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('You are wrong!!');
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        
        const nextNumber = generateRandomeBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);

    };

    return (
        <View style={styles.screen}>
            <Text>Computer guess</Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandelar.bind(this, 'lower') } />
                <Button title="GRETER" onPress={nextGuessHandelar.bind(this, 'greater')} />
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;