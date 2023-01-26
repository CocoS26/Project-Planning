import React from "react";
import {createStackNavigator} from '@react-navigation/stack'

import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
import MessagesScreen from '../screens/MessagesScreen';
import Chat from '../screens/Chat';
import ProduceListScreen from "../screens/ProduceListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddPostScreen from "../screens/AddPostScreen";


const Stack = createStackNavigator();

const MainStackNavigator = ()=>{

    return (
        <Stack.Navigator>
        <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='Login' component={ Login } />
        <Stack.Screen name='Register' component={ Register } />
        <Stack.Screen name='MessagesScreen' component={ MessagesScreen } />
        <Stack.Screen name='Chat' component={ Chat } />
        </Stack.Navigator>
    )
}


const ProduceListNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "ProduceListScreen" component ={ ProduceListScreen } />
            <Stack.Screen name = "ProfileScreen" component ={ ProfileScreen } />
        </Stack.Navigator>
    )
}

export { MainStackNavigator, ProduceListNavigator }