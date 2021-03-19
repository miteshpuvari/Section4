import React, {useState, useEffect} from 'react';
import { View,
         StyleSheet, 
         Text, 
         Button, 
         TouchableWithoutFeedback,
         Keyboard,
        Alert,
        Dimensions,
        ScrollView,
        KeyboardAvoidingView} from 'react-native';

import Card from '../Components/Card';
import NumberContainer from '../Components/NumberContainer';
import Input from '../Components/Input';
import Colors from '../Constants/Colors';
import MainButton from '../Components/MainButton.android';

const StartGameScreen = props => {
    const [enterdValue, setEnterdValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();  
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    const updateLayout = () => {
        setButtonWidth(Dimensions.get('window').width / 4);
    };
    Dimensions.addEventListener('change', updateLayout);

    const numberInputhendelar = inputText => {
        setEnterdValue(inputText.replace(/[^0-9]/g, ''));  // replace the value 0 - 9 with space using that you can not insert any string or , . etc.
    };

    const resetInputHandler = () => {
        setEnterdValue('');
        setConfirmed(false);
    };

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enterdValue);
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99)
        {
            Alert.alert('Invalid Number!!', 'Number Has to be number between 1 to 99.', [{text: 'Okey', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnterdValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if(confirmed) {
            confirmedOutput = (
                    <Card style={styles.summeryContainer}> 
                        <Text>Your Selected number is</Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <MainButton onPress={() => props.onStartGame(selectedNumber)}> START GAME </MainButton>
                    </Card>
                    );
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30} >
        <TouchableWithoutFeedback 

        onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <Card style={styles.inpotContainer}>
                <Text>Select a number</Text>
                <Input style={styles.input} 
                placeholder="Enter Data" 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false}
                keyboardType="number-pad" 
                 maxLength={2}
                 onChangeText={numberInputhendelar}
                 value={enterdValue} />
                <View style={styles.buttonContainer}>
                    <View style={{width: buttonWidth}}>
                        <Button title="Reset" 
                                onPress={resetInputHandler} 
                                color={Colors.primary}/>
                    </View>
                    <View style={{width: buttonWidth}}>
                        <Button title="Confirm"
                                onPress={confirmInputHandler}
                                color={Colors.accent} /></View>
                </View>
                
            </Card>
            
            {confirmedOutput}    
        </View>
       
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
            marginTop: 10,
            fontSize: 20,
            marginVertical: 10,
    },
    inpotContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center',
        
    },
    buttonContainer: {

        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    // button1: {
    //     //width: 100, 
    //     width: Dimensions.get('window').width / 4  // this is only calculated wehen your app starts
    // },
    // button2: {
    //      //width: 100,
    //      width: Dimensions.get('window').width / 4  // this is only calculated wehen your app starts
    //  },
    input: {
        width: 150,
        textAlign: 'center'
    },
    summeryContainer: {
        marginTop:  20,
        alignItems: 'center',

    }
});


export default StartGameScreen;