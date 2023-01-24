import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
import MessagesScreen from '../screens/MessagesScreen';
import Chat from '../screens/Chat';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createStackNavigator();
const Routes = () => {
//       const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signin = () => {
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(email,"18")
//         navigation.navigate("MessagesScreen", {email:email});
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         alert(errorMessage);
//       });
//   };
 
//   const {user, setUser} = useContext(AuthContext);
//   const [initializing, setInitializing] = useState(true);

//   const onAuthStateChanged = (user) => {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

  return (
    <NavigationContainer>
        {/* < Stack.Navigator >  */}
      {/* {email ? <AppStack /> : <AuthStack />} */}
        {/* <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='Login' component={ Login } />
        <Stack.Screen name='Register' component={ Register } />
        <Stack.Screen name='MessagesScreen' component={ MessagesScreen } />
        <Stack.Screen name='Chat' component={ Chat } />
        
        </Stack.Navigator> */}
        <AppStack />
    </NavigationContainer>
  );
};

export default Routes;