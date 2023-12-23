import {React, useState} from "react"; 
import {View, StyleSheet, SafeAreaView, Text, Button, TextInput, Alert} from 'react-native';
import {auth,  FirebaseAuthTypes } from '@react-native-firebase/auth';
import db from "@react-native-firebase/database";


export default SignupScreen= ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRentered, setPasswordRentered] = useState('');

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeaderStyle}>Sign up</Text>
            
            <View style={styles.viewTextStyle}>
                <Text style = {styles.textStyle}>Already a member?</Text>
                <Button 
                title = "Log in" 
                onPress={onPressSignInButton}
                color = "#c29470"
                fontSize = {35}
                opacity = {0.2}
                style = {{ elevation:0}}
                >
                </Button>
            </View>
            <View style={styles.viewEnterSingUp}>
                <Text style={styles.textTitleMiddle}>Enter your email address</Text>
                <TextInput
                style={styles.textInputStyle}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value ={email}
                keyboardType="email-address"
                />    
                <Text style={styles.textTitleMiddle}>Enter your password</Text>
                <TextInput
                style={styles.textInputStyle}
                placeholder="Password"
                onChangeText={(text) =>setPassword(text)}
                value={password}
                />
                <Text style={styles.textTitleMiddle}>Renter your password for confirmation</Text>
                <TextInput
                style={styles.textInputStyle}
                placeholder="Password"
                onChangeText={(text) =>setPasswordRentered(text)}
                value={passwordRentered}
                />
                <Button 
                titleStyle = {{color: '#00BAD4'}}
                title= "Sign up"
                color='#DF826C'
                onPress = {onPressSignUpButton}
                >
                </Button>
            </View>
        </SafeAreaView>
    )
}



const onPressSignInButton =()=>{
    navigation.navigate('Login', {screen: 'Login'});
}

const onPressSignUpButton= async(email, password, passwordRentered)=>{
    if((password == passwordRentered) && password && email){
        try{
            const response = await auth().createUserWithEmailAndPassword(email, password);
        
            if(response.user) {
                Console.log(response.User);
            }
        }catch(e){
            Alert.alert("This is the error", e);
        }
        
        

    } else
    {
        Alert.alert("please make you to check for mismatch in the password, or the input is empty.")
    }
}

const createProfile = async (response: FirebaseAuthTypes.UserCredential) => {

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c29470',
        padding:50,
        
        justifyContent: 'center-around',
    },
    textHeaderStyle: {
        fontSize: 50,
        alignSelf:'center'
    },
    textStyle: {
        fontSize:20,        
    },
    viewTextStyle: {
        flex:0.3,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'baseline',
    },
    viewEnterSingUp:{
               
        flex:1,
    },
    textInputStyle:{
        fontSize: 25, 
        marginBottom:20,
        borderWidth:1,
        padding:5,
        borderRadius:20,
       
      },
      textTitleMiddle:{
        paddingStart:10,

      }
  

});