import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else
    {
        return rndNum;
    }
};

const GameScreen = props => {
    const   [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

    return(
        <View styles={styles.screen}>
            <Text>Computer Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card styles={styles.buttonContainer}>
            <Button title="Lower" onPress={() => {}}/>
            <Button title="Greater" onPress={() => {}}/>
            </Card>
        </View>
    )
};

const styles= StyleSheet.create({
    screen: {
         flex: 1,
         padding: 10,
         alignItems: 'center'
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
