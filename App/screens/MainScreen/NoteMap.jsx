import React from "react"; 
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import BasePage from "../BasePage";



export default NoteMapScreen= ({})=>{

    return(
        <BasePage>
            <Text style={styles.textStyle}>NoteMap!</Text>
        </BasePage>

    )



}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
    }
});