import React from "react"; 
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import MainScreen from '../MainScreenContent';
import { useContext } from "react";


export default NoteMapScreen= ({})=>{// Map of the notes
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