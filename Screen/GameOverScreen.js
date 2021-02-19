import React from 'react';
import {View, Text, Button, Image, Dimensions, ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';

import Colors from '../Constants/Colors';
import MainButton from '../Components/MianButton';

const GameOverScreen = props => {
    return <View style={style.screen}>
        <Text>The Game is Over!!</Text>
        <View style={style.imageContainer} >
        <Image 
        
        // source={require('../assets/tree.png')}
        
        // also you can set image from web view using url of the image
        source={{uri: 'https://images.squarespace-cdn.com/content/v1/5c09a1565417fc01fb86eaf9/1548092802241-HO16B8LUSSZA1VX4ZEW9/ke17ZwdGBToddI8pDm48kPnHaqX1Q253z26mJp-11Th7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQ93lJt6wopCJh7TMDDA2cGQDtuyOIsUBADKzjul-0ytA_BAmoM8KfSaR3f6p1HyQw/Summit%2BMountains%2BPhoto%2Bcopy.jpg?format=1500w'}} 
        style={style.image}
        resizeMode="cover" />
        </View>

        <Text>Your phone needed  <Text style={style.highlight} >{props.roundsNumber}</Text> rounds to guess the number 
                                <Text style={style.highlight} >{props.userNumber}</Text> </Text>
        <MainButton title="NEW GAME" onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
    
};

const style = StyleSheet.create({
     screen: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
     },
     imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,  // height and with is both same so that we use width deminsion
        borderRadius: Dimensions.get('window').width * 0.7 / 2,  // the border radios is half of the height and width than perfact circale is drow
        borderWidth: 4,
        borderBottomColor: 'black',
        alignItems: 'center',
        overflow: 'hidden', // when the image is uot off the container than is cut off and set in perfact size
        marginVertical: Dimensions.get('window').height / 40
     },
     image: {
         width: '100%',
         height: '100%',
         borderRadius: 200,
         alignContent: 'center',
         alignItems: 'center'
     },
     highlight: {
         color: Colors.primary,
     },
     

});

export default GameOverScreen;