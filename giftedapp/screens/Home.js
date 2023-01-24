import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";


const Home= ({ navigation }) =>{
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
        title ="I am a farmer"
        onPress={()=> navigation.navigate('Login')} 
        Style ={styles.button}
        />
         <Button
        title ="I am a customer"
        onPress={()=> navigation.navigate('Login')} 
        Style ={styles.button}
        />
      </View>
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
  
  export default Home;