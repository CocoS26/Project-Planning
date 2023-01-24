
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-elements";

const ProduceListScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Text>Produce List</Text>
            <Button
            title = "Click Here"
            onPress={()=>alert('Button Clicked!')}
            />
        </View>
    )
}

export default ProduceListScreen

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc'
    }
})