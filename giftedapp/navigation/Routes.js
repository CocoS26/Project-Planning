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


const Stack = createStackNavigator();
const Routes = () => {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 
  // const signin = () => {
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(email,"18")
  //       setEmail(email)
  //       navigation.navigate("MessagesScreen", {email:email});
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       alert(errorMessage);
  //     });
   
  // };
  
console.log(email,"48888")
 
  return (
    <NavigationContainer>     
      <MainStackNavigator />
        {/* <AppStack /> */}
    </NavigationContainer>     
  );
};

export default Routes;