import React, {useRef, useEffect} from 'react';
import {Text, 
        View, 
        StyleSheet, 
        Alert, 
        ScrollView, 
        FlatList,
        Dimensions} from 'react-native';
import { useState } from 'react';

import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';
import MainButton from '../Components/MianButton';

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

const renderListItem = (listLenghth, itemData) => (
                        <View style={styles.listItem}>
                            <Text>#{listLenghth - itemData.index} </Text>
                            <Text> {itemData.item} </Text>
                        </View>);

const GameScreen = props => {
    const initialGuess = generateRandomeBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState( initialGuess );

    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver]);     
    
    const nextGuessHandelar = direction => {

        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('You kow that your wrong!!','it should be oposite');
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        
        const nextNumber = generateRandomeBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds +1);        
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses]);

    };

    let listContainerStyle = styles.listContainer;

    if(Dimensions.get('window').width < 350) {
        listContainerStyle = styles.listContainerBig;
    }

    return (
        <View style={styles.screen}>
            <Text>Computer guess</Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton style={styles.lower_btn} onPress={nextGuessHandelar.bind(this, 'lower') }> LOWER </MainButton>
                <MainButton  onPress={nextGuessHandelar.bind(this, 'greater')} > GRETER </MainButton>
            </Card>
            <View style={listContainerStyle}>
            {/* <ScrollView contentContainerStyle={styles.list} >
                {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
            </ScrollView> */}
            <FlatList contentContainerStyle={styles.list} 
                      keyExtractor={(item) => item} 
                      data={pastGuesses} 
                      renderItem={renderListItem.bind(this, pastGuesses.length)} 
                       />
            </View>
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
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: Dimensions.get('window').height > 600 ? 20 : 1,
        //width: 350,
       // maxWidth: '90%'
    },
    listContainer: {
        flex: 1,
        width: '60%'
    },
    listContainerBig: {
        flex: 1,
        width: '80%'
    },
    list: {
        flexGrow: 1, // flex grow is more falxibale and it's a scrolable
        // alignItems: 'center', 
        justifyContent: 'flex-end'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});

export default GameScreen;