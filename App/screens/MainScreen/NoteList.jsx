import React from "react"; 
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import MainScreen from '../MainScreenContent';
import { useContext } from "react";
import { NoteContext } from "../../services/NoteContex";

export default NoteListScreen= ({route})=>{ // The List of notes
    const {addNote, notes} = useContext(NoteContext);
    console.log(notes);
    return(

        <MainScreen>
            <Text style={styles.textStyle}>NoteList!</Text>
        </MainScreen>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
    }
});