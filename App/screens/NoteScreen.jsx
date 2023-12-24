import React, { useState, useContext, useEffect } from "react"; 
import {View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import BasePage from "./BasePage";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import EventEmitter from "react-native-eventemitter";
import { NoteContext } from "../services/NoteContex";

 const NoteScreen= ({route , navigation })=>{

    const {addNote, notes} = useContext(NoteContext);
    
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');

    const onPressSubmitButton =()=>{
        if(!title.trim() && !body.trim()){
            Alert.alert('Hey!', 'the note is empty :(');
        }

        addNote({title, body});
        navigation.goBack();
    }

    const onPressCancelButton =()=>{
        navigation.goBack();
    }

    const handleOnChangeText=(text, valueOf)=>{
        if(valueOf ==='Title') setTitle(text);
        if(valueOf ==='note') setBody(text);
    };


    return(
        <BasePage>
            <Text style={styles.textStyle}>Edit your notes!</Text>

            <TextInput placeholder="Title" style={[styles.Input, styles.title]}
                onChangeText={text => handleOnChangeText(text, 'Title')} value ={title}
            ></TextInput>

            <TextInput multiline placeholder="Note" style={[styles.Input, styles.note]}
                onChangeText={text => handleOnChangeText(text, 'note')} value ={body}
            ></TextInput>
            

            <View style={styles.buttonViewStyle}>
                <Button  
                style = {styles.buttonStyle}       
                titleStyle = {{color: '#00BAD4'}}
                title= "Submit"
                color='#DF826C'
                onPress = {onPressSubmitButton}
                ></Button>

                <Button         
                titleStyle = {{color: '#00BAD4'}}
                title= "Cancel"
                color='#DF826C'
                onPress = {onPressCancelButton}
                
                ></Button>
            </View>
        </BasePage>

    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
    },
    Input: {
        borderBottomWidth: 2,
        fontSize:20,
        marginBottom:5,
    },
    title: {
        fontWeight:'bold'

    }, 
    note: {
        flex:1,
    },buttonViewStyle: {
        borderWidth:2,

    }, buttonStyle: {
        borderWidth:2,
        borderColor:'#00BAD4',
        marginBottom:12
    }

});


export default NoteScreen;