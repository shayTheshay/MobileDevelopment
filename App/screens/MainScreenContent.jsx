import React from "react"; 
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import BasePage from './BasePage';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



export default MainScreen= ({children})=>{
    const navigation = useNavigation();


    const onButtonPressCreateNote=()=>{
        navigation.navigate('NoteScreen', {screen: 'NoteScreen'})
    }

    return(
        <BasePage>
            <Text style={styles.textStyle}>Welcom User! Great to see you again!</Text>
            {children}
            <View style={styles.floatingButtonView}>
                <TouchableOpacity
                style={styles.floatingButton}
                onPress={onButtonPressCreateNote}
                >
                    <Ionicons name ="add-circle" size={70  } color="black"/>
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