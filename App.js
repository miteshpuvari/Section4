import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import Header from './Components/Header';
import StartGameScreen from './Screen/StartGameScreen'; 
import GameScreen from './Screen/GameScreen';
import GameOverScreen from './Screen/GameOverScreen';
//import { useState } from 'react';

export default function App() {

  
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);


  // start game 
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };
  
  // end of game 
  const gameOverHandelar = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
   
  if (userNumber && guessRounds <=0 ) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandelar} />;
  }else if (guessRounds > 0) {
    content = <GameOverScreen />;
  }
  
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
     screen: {
       flex: 1
     }
});
