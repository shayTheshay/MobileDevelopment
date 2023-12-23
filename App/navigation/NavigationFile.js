import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { Image } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreenContent';
import NoteList from '../screens/MainScreen/NoteList'; 
import NoteMap from '../screens/MainScreen/NoteMap';
import SignupScreen from '../screens/SignupScreen';
import NoteScreen from '../screens/NoteScreen';

import Ionicons from 'react-native-ionicons';



const Stack = createStackNavigator();

const Stacks =() => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown :false}}>
      
      <Stack.Screen
        name= "Login" component={Tabs}
        />

        <Stack.Screen
        name ="Tabs" component={LoginScreen}
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
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'ListNote') {
          iconName = focused
            ? require('../images/clipboardSelected.png')
            : require('../images/clipboardUnSelected.png');
        } else if (route.name === 'MapNote') {
          iconName = focused 
          ? require('../images/locationSelected.png')
          : require('../images/locationUnSelected.png');
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width:20, height:20}}  resizeMode='contain'/>;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
        <Tab.Screen name="ListNote" component={NoteList} options={{headerShown: false, }}/>
        <Tab.Screen name="MapNote" component={NoteMap} options={{headerShown:false, }}/>
    </Tab.Navigator>
  );
}
export default Stacks;