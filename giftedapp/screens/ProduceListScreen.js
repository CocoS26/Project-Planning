import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, Card } from "react-native-elements";
import axios from 'axios';


// const ProduceListScreen = ({navigation}) =>{
//     return (
//         <View style={styles.container}>
//             <Text>Produce List</Text>
//             <Button
//             title = "Click Here"
//             onPress={()=>alert('Button Clicked!')}
//             />
//         </View>
//     )
// }


const ProduceListScreen = ({}) =>{
    const [farms, setFarms] = useState([])
    const fetchAPi = async ()=>{
        let res = await axios.get('http://192.168.1.104:3000/api/farms')
        console.log(res.data)
        setFarms(res.data)}
       
    useEffect(()=>{
        fetchAPi()
    },[])
   
    return (
        <View style={styles.container} >
            <Text>Farms List</Text>
            <FlatList
            data={farms}
            renderItem={({item}) => 
            <Text style={styles.item}>{item.name}</Text>}/>

                        {/* <Text
                        
                        >
                            Farm Name: {farm.name} */}
                            {/* Address: {farm.address}
                            County: {county}
                            Country: {country}
                            Postcode: {postcode} */}
                        {/* </Text>  */}
              
         
        {/* <FlatList
        data={farms}
        renderItem={({Item})=>{
            return (
                <Text>
                    {Item.name}
                </Text>
            )
        }} /> */}
      
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
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
})