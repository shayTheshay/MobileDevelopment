import React from "react"; 
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import MainScreen from '../MainScreenContent';


export default NoteMapScreen= ({})=>{

    return(
        <MainScreen>
            <Text style={styles.textStyle}>NoteMap!</Text>
        </MainScreen>

    )



}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
    }
});