import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { StackActions } from "@react-navigation/native";
import { MessagesScreen } from './MessagesScreen' 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(email,"18")
        navigation.navigate("MessagesScreen", {email:email});
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
 

  return (
    <> 
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="sign in" onPress={signin} style={styles.button} />
      <Button
        title="register"
        onPress={() => navigation.navigate("Register")}
        style={styles.button}
      />
    </View>

    </>
   
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: 100,
  },
  button: {
    width: 370,
    marginTop: 10,
  },
});

export default Login;


// import React, {useContext, useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   Platform,
//   StyleSheet,
//   ScrollView
// } from 'react-native';
// import FormInput from '../components/FormInput';
// import FormButton from '../components/FormButton';
// import SocialButton from '../components/SocialButton.js';
// import {AuthContext} from '../navigation/AuthProvider';

// const LoginScreen = ({navigation}) => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const {login} = useContext(AuthContext);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image
//         source={{uri:'https://static.doofinder.com/main-files/uploads/2019/03/marketplace-e-commerce-1.jpg'}}
//         style={styles.logo}
//       />
//       <Text style={styles.text}>Farmly</Text>

//       <FormInput
//         labelValue={email}
//         onChangeText={(userEmail) => setEmail(userEmail)}
//         placeholderText="Email"
//         iconType="user"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         autoCorrect={false}
//       />

//       <FormInput
//         labelValue={password}
//         onChangeText={(userPassword) => setPassword(userPassword)}
//         placeholderText="Password"
//         iconType="lock"
//         secureTextEntry={true}
//       />

//       <FormButton
//         buttonTitle="Sign In"
//         onPress={() => login(email, password)}
//       />

//       <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
//         <Text style={styles.navButtonText}>Forgot Password?</Text>
//       </TouchableOpacity>

   

//       <TouchableOpacity
//         style={styles.forgotButton}
//         onPress={() => navigation.navigate('Register')}>
//         <Text style={styles.navButtonText}>
//           Don't have an acount? Create here
//         </Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     paddingTop: 50
//   },
//   logo: {
//     height: 150,
//     width: 150,
//     resizeMode: 'cover',
//   },
//   text: {
//     fontFamily: 'Kufam-SemiBoldItalic',
//     fontSize: 28,
//     marginBottom: 10,
//     color: '#051d5f',
//   },
//   navButton: {
//     marginTop: 15,
//   },
//   forgotButton: {
//     marginVertical: 35,
//   },
//   navButtonText: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#2e64e5',
//     fontFamily: 'Lato-Regular',
//   },
// });