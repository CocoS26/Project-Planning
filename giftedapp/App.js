// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack'
// import { NavigationContainer } from '@react-navigation/native';
// import Login from './screens/Login';
// import Home from './screens/Home';
// import Register from './screens/Register';
// import Chat from './screens/Chat';
// import MessagesScreen from './screens/MessagesScreen';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Tabs from './navigation/tabs';
// import AddPostScreen from './screens/AddPostScreen';
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>  
//     {/* <Tabs> */}
//       <Stack.Navigator > 
//       <Stack.Screen name='Login' component={ Login } />
//       <Stack.Screen name='Register' component={ Register } />
//       <Stack.Screen name='Home' component={ Home } />
//         <Stack.Screen name='Chat' component={ Chat } />
//         <Stack.Screen
//       name="AddPost"
//       component={AddPostScreen}
//       options={{
//         title: '',
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#2e64e515',
//           shadowColor: '#2e64e515',
//           elevation: 0,
//         },
//         headerBackTitleVisible: false,
//         headerBackImage: () => (
//           <View style={{marginLeft: 15}}>
//             <Ionicons name="arrow-back" size={25} color="#2e64e5" />
//           </View>
//         ),
//       }}
//     />
//       <Stack.Screen name='MessagesScreen' component={ MessagesScreen } />
//        <Stack.Screen
//       name="AddPost"
//       component={AddPostScreen}
//       options={{
//         title: '',
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#2e64e515',
//           shadowColor: '#2e64e515',
//           elevation: 0,
//         },
//         headerBackTitleVisible: false,
//         headerBackImage: () => (
//           <View style={{marginLeft: 15}}>
//             <Ionicons name="arrow-back" size={25} color="#2e64e5" />
//           </View>
//         ),
//       }}
//     />
//       </Stack.Navigator>
//       {/* </Tabs> */}
//     </NavigationContainer>
//     </SafeAreaProvider>
    
//   );
// };

// export default App;


import React from 'react';
import Providers from './navigation';

const App = () => {
  return <Providers />;
}

export default App;