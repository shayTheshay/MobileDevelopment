import React from "react"; 
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';



export default NoteListScreen= ({})=>{

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>NoteList!</Text>
        </SafeAreaView>

    )



}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c29470',
      padding:30,
      justifyContent: 'center-around',
    },
    textStyle: {
        fontSize: 50,
    }
});