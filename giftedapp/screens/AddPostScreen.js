import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
// import ImagePicker from 'react-native-image-crop-picker';
// import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

// import {
//   InputField,
//   InputWrapper,
//   AddImage,
//   SubmitBtn,
//   SubmitBtnText,
//   StatusWrapper,
// } from '../styles/AddPost';

 

const AddPostScreen = () => {
  const {user, logout} = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    console.log('Image Url: ', imageUrl);
    console.log('Post: ', post);

    firestore()
    .collection('chats')
    .add({
      userId: user.uid,
      id: post,
      category: imageUrl,
      name: firestore.Timestamp.fromDate(new Date()),
      unit: null,
      description: null,
      stock:null,
      price: null, 
    })
 




  return (
    <View style={styles.container}>
      <InputWrapper>


        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
          value={post}
          onChangeText={(content) => setPost(content)}
        />
    </InputWrapper>
    </View>
)}
  }

//         {uploading ? (
//           <StatusWrapper>
//             <Text>{transferred} % Completed!</Text>
//             <ActivityIndicator size="large" color="#0000ff" />
//           </StatusWrapper>
//         ) : (
//           <SubmitBtn onPress={submitPost}>
//             <SubmitBtnText>Post</SubmitBtnText>
//           </SubmitBtn>
//         )}
//       </InputWrapper>
//       <ActionButton buttonColor="#2e64e5">
//         <ActionButton.Item
//           buttonColor="#9b59b6"
//           title="Take Photo"
//           onPress={takePhotoFromCamera}>
//           <Icon name="camera-outline" style={styles.actionButtonIcon} />
//         </ActionButton.Item>
//         <ActionButton.Item
//           buttonColor="#3498db"
//           title="Choose Photo"
//           onPress={choosePhotoFromLibrary}>
//           <Icon name="md-images-outline" style={styles.actionButtonIcon} />
//         </ActionButton.Item>
//       </ActionButton>
//     </View>
//   );
// };

export default AddPostScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   actionButtonIcon: {
//     fontSize: 20,
//     height: 22,
//     color: 'white',
//   },
// });