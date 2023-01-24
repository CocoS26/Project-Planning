import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {MainStackNavigator, ProduceListNavigator} from './StackNavigator';
import MessagesScreen from '../screens/MessagesScreen';
import { AuthContext } from "../navigation/AuthProvider"; 
import { useContext } from "react";

const Tab = createBottomTabNavigator();

 const BottomTabNavigator = ({email}) =>{
    console.log(email, "in TabNabig")
    return (
        <Tab.Navigator>
            <Tab.Screen name= 'MessagesScreen' component={MainStackNavigator} />
            <Tab.Screen name= 'ProduceListScreen' component={ProduceListNavigator} />
            <Tab.Screen name= 'ProfileScreen' component={ProduceListNavigator} />
        </Tab.Navigator>
    )
 }

 export default BottomTabNavigator;