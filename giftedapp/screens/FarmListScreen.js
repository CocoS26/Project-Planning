
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-elements";

const FarmListScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Text>Farm List</Text>
            <Button
            title = "Click Here"
            onPress={()=>alert('Button Clicked!')}
            />
        </View>
    )
}

export default FarmListScreen

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc'
    }
})