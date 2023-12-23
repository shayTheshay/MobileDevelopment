import {React, useState} from "react"; 
import {View, StyleSheet, SafeAreaView, Text, Button, TextInput, Alert} from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import BasePage from "./BasePage";



export default SignupScreen= ({})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRentered, setPasswordRentered] = useState('');
    const navigation = useNavigation();
    
    const authentication = getAuth();

    const onPressLogInButton =()=>{
        navigation.navigate('Login', {screen: 'Login'});
    }

    const onPressSignUpButton= async(email, password, passwordRentered)=>{
        if(password != passwordRentered){
        Alert.alert("Mismatch", "make sure that both passwords are the SAME");
        }else
            if(email && password && passwordRentered){
                try{
                    const response = await createUserWithEmailAndPassword(authentication, email, password);
                    if(response.user) {
                        navigation.navigate('Tabs', {screen: 'Tabs'});
                    }
                }catch(e){
                    Alert.alert("This is the error", e.message);
                }
            } else
        {
            Alert.alert("Error", "Please make sure your details are entered because someinput is empty.")
        }
    }

    return(
        <BasePage>
            <Text style={styles.textHeaderStyle}>Sign up</Text>
            
            <View style={styles.viewTextStyle}>
                <Text style = {styles.textStyle}>Already a member?</Text>
                <Button 
                title = "Log in" 
                onPress={onPressLogInButton}
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
                onChangeText={(text)=>setEmail(text)}
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
                onPress = {() => onPressSignUpButton(email, password, passwordRentered)}
                >
                </Button>
            </View>
        </BasePage>
    )
}

const styles = StyleSheet.create({
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