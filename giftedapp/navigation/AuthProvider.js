import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { getAuth } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  let isLoggedIn = user!==null;
  


return (
    <AuthContext.Provider 
    value={{
      user,
      setUser, 
      signin: async(email, password)=> {
        const auth= getAuth()
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (e) {
          console.log(e);
        }
      },
    }}>
    {children}</AuthContext.Provider>
)

}