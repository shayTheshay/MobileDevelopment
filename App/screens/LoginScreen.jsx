import {React, useState} from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"


const LoginScreen = ({}) => {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onPressLoginButton =async () =>{
    if(email  && password ){
      try{
        const response = await auth().signInWithEmailAndPassword(
          email,
          password
        );
        if(response.user)
           navigation.navigate('Tabs', {screen: 'Tabs'})
        else
          Alert.alert("Please check again as the input was incorrect");
      }catch(e){
        console.log("the error is: " + e);
      }

    }
    else{
      Alert.alert("OOps", "Please check your form and try again, your form is empty");
    }
     
  };

  const onPressSignupButton =() =>{
    navigation.navigate('Signup', {screen: 'Signup'});
  };

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style ={styles.headView}>
        <Text style={styles.textHead}>Welcome to the Notes APP!</Text>
      </View>

          <TextInput
            style={styles.textInputStyle}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value ={email}
            keyboardType="email-address"
          />    

          <TextInput
            style={styles.textInputStyle}
            placeholder="Password"
            onChangeText={(text) =>setPassword(text)}
            value={password}
          
          />    
        <Button 
        titleStyle = {{color: '#00BAD4'}}
        title= "Login"
        color='#DF826C'
        onPress = {onPressLoginButton}
        >
        </Button>


      <View flexDirection='row' paddingTop={10} paddingLeft={5}>
        <View >
          <Text paddingTop={7} paddingRight={2} >Don't have an account?</Text>
        </View>

        <Button 
        title = "sign up" 
        onPress={onPressSignupButton}
        color = "#c29470"
        fontSize = {35}
        opacity = {0.2}
        style = {{ elevation:0}}
        >

        </Button>
        
      </View>
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

    headView:{
      flex:0.45,
    },

    textHead: {
      fontSize: 50,
      opacity:0.7,
      flex:1,
    },

    textBottomStyle:{
      opacity:0.2,
      paddingTop:5,
    },

    textInputStyle:{
      fontSize: 18, 
      marginBottom:20,
      borderWidth:1,
      padding:5,
      flex:0.1,
      borderRadius:20,
    },

  });

export default LoginScreen;