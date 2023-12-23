import React from "react"; 
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import BasePage from "../BasePage";



export default NoteListScreen= ({})=>{

    return(
        <BasePage>
            <Text style={styles.textStyle}>NoteList!</Text>
        </BasePage>

    )



}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
    }
});