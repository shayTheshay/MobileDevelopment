import React from "react"; 
import { StyleSheet, SafeAreaView} from 'react-native';

export default BasePage= ({children})=>{

    return(
        <SafeAreaView style={styles.container}>
            {children}
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
});