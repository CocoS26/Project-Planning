import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import auth from '@react-native-firebase/auth';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
import MessagesScreen from '../screens/MessagesScreen';
import Chat from '../screens/Chat';
import { MainStackNavigator, ProduceListNavigator } from './StackNavigator';
import BottomTabNavigator from './TabNavigator';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from "../navigation/AuthProvider"; 
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';


const Stack = createStackNavigator();
const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const auth = getAuth();


  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    });
  }, []);
 



  return (
    <NavigationContainer>     
        {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>     
  );
};

export default Routes;