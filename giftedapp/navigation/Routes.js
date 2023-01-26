import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
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