// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
// import{StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
// import MessagesScreen from "../screens/MessagesScreen";
// import ProfileScreen from "../screens/ProfileScreen";
// import FarmListScreen from "../screens/FarmListScreen";

// const Tab = createBottomTabNavigator();

// const Tabs = () =>{
//     return(
//         <Tab.Navigator
//         screenOptions= {{
//                 showLabel: false,
//                 style:{
//                     position:'absolute',
//                     bottom: 25,
//                     left:20,
//                     right:20,
//                     elevation:0,
//                     backgroundColor: '#ffffff',
//                     borderRadius:15,
//                     height:90,
//                     ...style.shadow
//                 }
//             }}
//         >
//             <Tab.Screen name= "MessagesScreen"  component={ MessagesScreen }  options={{
//                 tabBarIcon: ({focused})=>(
//                     <View style= {{alignItems: 'center', justifyContent: 'center', top:10}}>
//                         <image
//                         source={{uri: 'https://m-cdn.phonearena.com/images/articles/394349-image/micon.jpg'}}  
//                         resizeMode='contain'
//                         style={{
//                             width: 25, 
//                             height: 25, 
//                             tintColor: focused ? '#e32f45' : '#748c94'
//                         }}
//                         />
//                         <Text style={{
//                             width: 25, 
//                             height: 25, 
//                             tintColor: focused ? '#e32f45' : '#748c94', fontSize:12
//                         }}>Messages</Text>
//                     </View>
//                 )
//                     }}
//                     />
//             <Tab.Screen name= "ProfileScreen"  component={ ProfileScreen } />
//             <Tab.Screen name= "FarmListScreen"  component={ FarmListScreen } />
//         </Tab.Navigator>
//     )
// }

// const style = StyleSheet.create({
//     shadow:{
//         shadowColor: '#7F5DF0',
//         shadowOffset:{
//             width:0,
//             height:10
//         },
//         shadowOpacity:0.25,
//         shadowRadius:3.5,
//         elevation:5
//     }
// })


// export default Tabs