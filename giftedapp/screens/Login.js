import React, { useEffect, useState } from "react";
import {createStackNavigator} from '@react-navigation/stack'
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { AuthContext } from "../navigation/AuthProvider"; 
import { useContext } from "react";

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  const  userValue  = useContext(AuthContext);
  let {signin} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


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
      <Button title="sign in" onPress={()=>signin(email,password)} style={styles.button} />
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
