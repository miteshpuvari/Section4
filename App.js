import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Components/Header';
import StartGameScreen from './Screen/StartGameScreen'; 
import GameScreen from './Screen/GameScreen';
import { useState } from 'react';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber) {
    content = <GameScreen userChice={userNumber}/>;
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
