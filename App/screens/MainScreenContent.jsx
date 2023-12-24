import React from "react"; 
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import BasePage from './BasePage';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import EventEmitter from "react-native-eventemitter";


export default MainScreen= ({children, route})=>{
    const navigation = useNavigation();

    // EventEmitter.emit('values', { data: onSubmit });
    const handleOnSubmit = (title, note) => {
        console.log(title);
        console.log(note);
    }
    
    const onButtonPressCreateNote=()=>{
        navigation.navigate('NoteScreen', {name: 'noteScreen'})
    }

    return(
        <BasePage>
            <Text style={styles.textStyle}>Welcome back User!</Text>
            {children}
            <View style={styles.floatingButtonView}>
                <TouchableOpacity
                style={styles.floatingButton}
                onPress={onButtonPressCreateNote}
                >
                    <Ionicons name ="add-circle" size={70} color="black"/>
                </TouchableOpacity>
            </View>
        </BasePage>
    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    },
    floatingButtonView:{
        flex:1,

    },

    floatingButton:{
        flex:1,
        flexDirection:'column-reverse',
        alignSelf:'flex-end'
    },
});