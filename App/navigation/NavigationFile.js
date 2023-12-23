import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';


import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreenContent';
import NoteList from '../screens/MainScreen/NoteList'; 
import NoteMap from '../screens/MainScreen/NoteMap';
import SignupScreen from '../screens/SignupScreen';
import NoteScreen from '../screens/NoteScreen';


const Stack = createStackNavigator();

const Stacks =() => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown :false}}>
      
      <Stack.Screen
        name= "Login" component={LoginScreen}
        />

        <Stack.Screen
        name ="Tabs" component={Tabs}
        />

        <Stack.Screen
        name ="Signup" component={SignupScreen}
        />

        <Stack.Screen
        name ="NoteScreen" component={NoteScreen}
        />
    </Stack.Navigator>


  );

}

const Tab = createBottomTabNavigator();


const Tabs= () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="List Node" component={NoteList} options={{headerShown: false, }}/>
        <Tab.Screen name="Map mode" component={NoteMap} options={{headerShown:false, }}/>
    </Tab.Navigator>
  );
}
export default Stacks;