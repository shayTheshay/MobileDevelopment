import React from "react"; 
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';



export default NoteMapScreen= ({})=>{

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>NoteMap!</Text>
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