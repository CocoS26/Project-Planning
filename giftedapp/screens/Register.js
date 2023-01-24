import React, { useContext , useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {getAuth} from 'firebase/auth'
import { StackActions } from '@react-navigation/native';
import { Container } from "../styles/MessageStyles";
import { AuthContext } from '../navigation/AuthProvider'

const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const auth = getAuth()
    const register = () =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
updateProfile(auth.currentUser, {
  displayName: name, 
  photoURL: avatar? avatar: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  //alert('Registered, please login.');
  navigation.navigate('Home')
})
// .catch((error) => {
//   alert(error.message);
// });
})
  // .catch((error) => {
  //   const errorMessage = error.message;
  //   alert(errorMessage)
  // });
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your name'
                label='Name'
                value={name}
                onChangeText={text => setName(text)} 
                required
            />
            <Input
                placeholder='Enter your email'
                label='Email'
                value={email}
                onChangeText={text => setEmail(text)} 
                required
            />
            <Input
                placeholder='Enter your password '
                label='Password'
                value={password} onChangeText={text => setPassword(text)}
                secureTextEntry 
                required
            />
            <Input
                placeholder='Enter your image url'
                label='Profile Picture'
                value = {avatar}
                onChangeText={text => setAvatar(text)} 
                required
            />
            <Button title='register' onPress={register} 
            style={styles.button} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginTop: 100,
    },
    button: {
        width: 370,
        marginTop: 10
    }
});

export default Register;
