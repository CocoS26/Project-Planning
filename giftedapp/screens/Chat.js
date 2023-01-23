import React, { useState, useEffect, useCallback, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { GiftedChat } from "react-native-gifted-chat";
import { collection, addDoc, getDocs, query, orderBy, onSnapshot, where } from 'firebase/firestore';
import firebase from 'firebase/app';
import { Firestore } from "firebase/firestore";



const Chat = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const signOutNow = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  useLayoutEffect(() => {
    
    
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL,
            }}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={signOutNow}
        >
          <Text>logout</Text>
        </TouchableOpacity>
      ),
      
    });
    const q = query(collection(db, 'chats'), where('user._id', "==" , "josh@gmail.com" ), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => 
          setMessages(
            snapshot.docs.map(doc =>  
              (
                {
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
              }
            )
            )
        ));

return () => {
  unsubscribe();
};

  }, [navigation]);


 



  useEffect(() => {
      setMessages([])
    }, []);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const { _id, createdAt, text, user,} = messages[0]
    addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
}, []);



  return (
      <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={messages => onSend(messages)}
          user={{
              _id: auth?.currentUser?.email,
              name: auth?.currentUser?.displayName,
              avatar: auth?.currentUser?.photoURL
          }}
      />
  );
};

export default Chat;
