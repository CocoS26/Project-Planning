import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import Chat from './screens/Chat';
import MessagesScreen from './screens/MessagesScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>  
    {/* <Tabs> */}
      <Stack.Navigator > 
      <Stack.Screen name='Login' component={ Login } />
      <Stack.Screen name='Register' component={ Register } />
      <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='Chat' component={ Chat } />
      <Stack.Screen name='MessagesScreen' component={ MessagesScreen } />
      </Stack.Navigator>
      {/* </Tabs> */}
    </NavigationContainer>
    </SafeAreaProvider>
    
  );
};

export default App;
