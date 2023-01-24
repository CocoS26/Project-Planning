import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Firestore } from "firebase/firestore";
import { Button } from "react-native-elements";
import { Container, 
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,} from "../styles/MessageStyles";
 



const Messages = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s',
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s',
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s',
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s',
      messageTime: '1 day ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '5',
      userName: 'Christy Alex',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s',
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
  ];
  
  const MessagesScreen = ({navigation, route}) => {
     const {email} = route.params
     console.log(email,"63")
    //  useEffect(() =>{
    //   const fetchPosts = async()=>{
    //     try{
    //         Firestore()
    //         .collection('')
    //         .get()
    //         .then
    //     }
    //   } catch(e){
    //     console.log(e)
    //   }
    //  }, []);




      return (
         <Container>
          <FlatList 
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
              <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
                <UserInfo>
                  <UserImgWrapper>
                    <UserImg source={item.userImg} />
                  </UserImgWrapper>
                  <TextSection>
                    <UserInfoText>
                      <UserName>{item.userName}</UserName>
                      <PostTime>{item.messageTime}</PostTime>
                    </UserInfoText>
                    <MessageText>{item.messageText}</MessageText>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
          />
        </Container>
      );
  };
  
  export default MessagesScreen;
  
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1, 
  //     alignItems: 'center', 
  //     justifyContent: 'center'
  //   },
  // });