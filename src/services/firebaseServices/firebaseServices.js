import storage from '@react-native-firebase/storage';
import firestore, {firebase} from '@react-native-firebase/firestore';
import storageServices from '../storageServices/storage.services';

import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import CommonServices from '../../services/commonServices/commomServices';
import moment from 'moment';
import {CommonActions} from '@react-navigation/native';
import toastServices from '../toastServices/toast.services';

//? ======================== firebase crud function are define below ========================
const uploadImage = async (image, folderName = 'photos') => {
  if (image == null) {
    return null;
  }
  const uploadUri = image;
  let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
  const extension = filename.split('.').pop();
  const name = filename.split('.').slice(0, -1).join('.');
  filename = name + Date.now() + '.' + extension;
  const storageRef = storage().ref(`${folderName}/${filename}`);
  const task = storageRef.putFile(uploadUri);
  task.on('state_changed', taskSnapshot => {
    `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`;
  });

  try {
    await task;
    const url = await storageRef.getDownloadURL();
    return url;
  } catch (e) {
    return null;
  }
};

const uploadProductImage = async image => {
  if (image == null) {
    return null;
  }
  const uploadUri = image;
  let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
  const extension = filename.split('.').pop();
  const name = filename.split('.').slice(0, -1).join('.');
  filename = name + Date.now() + '.' + extension;
  const storageRef = storage().ref(`product/${filename}`);
  const task = storageRef.putFile(uploadUri);
  task.on('state_changed', taskSnapshot => {
    `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`;
  });

  try {
    await task;
    const url = await storageRef.getDownloadURL();
    return url;
  } catch (e) {
    return null;
  }
};

const getData = async (
  collection,
  condition = false,
  value = 'non',
  operator = '==',
  equalTo = 'non',
) => {
  let list = [];
  if (condition) {
    let querySnapshot = await firestore()
      .collection(collection)
      .where(value, operator, equalTo)
      .get();
    querySnapshot.docs.map(doc => {
      list.push({...doc.data(), id: doc.id});
    });
  } else {
    let querySnapshot = await firestore().collection(collection).get();
    querySnapshot.docs.map(doc => {
      list.push({...doc.data(), id: doc.id});
    });
  }

  return list;
};

const getAllFavouriteProducts = async (idsList, collection = 'products') => {
  let productsList = [];
  let querySnapshot = await firestore().collection(collection).get();
  querySnapshot.docs.map(doc => {
    if (idsList.includes(doc.id))
      productsList.push({...doc.data(), id: doc.id});
  });

  return productsList;
};

const postData = async (collection, data) => {
  let timestamp = firestore.FieldValue.serverTimestamp();
  await firestore().collection(collection).add(data);
};

const postDataWithId = async (collection, id, data) => {
  let timestamp = firestore.FieldValue.serverTimestamp();
  await firestore().collection(collection).doc(id).set(data);
};

const updateData = async (id, collection, data) => {
  await firestore().collection(collection).doc(id).update(data);
};

const deletData = async (collection, id) => {
  await firestore().collection(collection).doc(id).delete();
  toastServices.showToast('Item deleted successfully');
  // toastServices.showToast('Item deleted successfully');
};

//? ======================== auth side all function are define below ========================
const Login = async (email, password) => {
  try {
    let res = await auth().signInWithEmailAndPassword(email, password);
    await storageServices.setKey('user_id', res.user.uid);
    return res.user.uid;
  } catch (error) {
    return 'error' + error;
  }
};

const signup = async (email, password) => {
  try {
    let res = await auth().createUserWithEmailAndPassword(email, password);
    await storageServices.setKey('user_id', res.user.uid);
    return res.user.uid;
  } catch (error) {
    return 'error: ' + error;
  }
};

const signout = async props => {
  await auth()
    .signOut()
    .then(async () => {
      console.log('User signed out!');
      await storageServices.setKey('user_id', '');
      props.navigation.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      });
      await signout();
      // await googleSignout();
    })
    .catch(async () => {
      await storageServices.setKey('user_id', '');
      props.navigation.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      });

      await signout();
      // await googleSignout();
    });
};

const getFCMToken = async id => {
  const user = await firestore().collection('Users').doc(id).get();
  let fcmToken = user.data().fcmToken;
  return fcmToken;
};

const getUserInfo = async (token = null) => {
  let id = await storageServices.getKey('userId');
  if (token) {
    id = token;
  }
  const user = await firestore().collection('users').doc(id).get();
  return user.data();
};

const storeUserInfo = async (id, data) => {
  firestore()
    .collection('users')
    .doc(id)
    .set(data)
    .then(() => {
      // Alert.alert('Data Uploaded!', 'Your data submitted  Successfully!');
    })
    .catch(error => {});
  await storageServices.setKey('user_id', id);
};

const reAuthenticate = async currentPassword => {
  let user = await auth().currentUser;
  let cred = await auth().EmailAuthProvider.credential(
    user.email,
    currentPassword,
  );
  return user.reauthenticateWithCredential(cred);
};

const checkEmail = async email => {
  let flag = false;
  let querySnapshot = await firebase
    .firestore()
    .collection('users')
    .where('email', '==', email)
    .get();
  querySnapshot.forEach(doc => {
    flag = true;
  });
  return flag;
};

const changePassword = async (currentPassword, newPassword) => {
  await reAuthenticate(currentPassword)
    .then(() => {
      let user = auth().currentUser;
      user
        .updatePassword(newPassword)
        .then(() => {})
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
};

const changeEmail = (currentPassword, newEmail) => {
  this.reauthenticate(currentPassword)
    .then(() => {
      var user = firebase.auth().currentUser;
      user
        .updateEmail(newEmail)
        .then(() => {})
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
};

const forgotPassword = async (Email, message) => {
  let res = '';
  auth()
    .sendPasswordResetEmail(Email)
    .then(function (user) {
      toastServices.showToast(
        'Please check your email  click on the link to reset your password',
      );
    })
    .catch(function (e) {
      toastServices.showToast(e);
    });
};

const createFCMToken = async () => {
  const fcmToken = await messaging().getToken();
  return fcmToken;
};

//?============================ messages functions are below ===========================

// ? here we just create new id for conversation  concate sender and receiver id
// ! paramater required sender id receiver id
const createChatID = (myId, receiverId) => {
  let id = [myId, receiverId].sort().join('_');
  return 'chatRoom_' + id;
};

//?  here  i check the conversation if already exist then return that data else
// ?  we call the function which create new collection and return us require data
// ! paramater required sender id receiver id
const checkMessagesCollection = async receiverId => {
  let myId = await storageServices.getKey('userId');
  let id = createChatID(myId, receiverId);
  let obj = {};
  let data = await firestore().collection('chat').doc(id).get();
  if (data?.exists) {
    obj = {
      convoId: data.id,
    };
  } else {
    console.log('will create coversation');
    obj = await createConversation({myId: myId, receiverId: receiverId});
  }
  return obj;
};

// ? here we we call the create id function and check the conversation with this id
// ! paramater required  sender id and receiver id
// ? and its return us an an object which contain conversation id
const createConversation = async _obj => {
  let obj = {};
  let chatId = createChatID(_obj.myId, _obj.receiverId);
  // let myData:any = await getCurrentUser(_obj.myId);
  // let receiverData:any = await getCurrentUser(_obj.receiverId);
  obj = {
    convoId: chatId,
  };
  await firestore()
    .collection('chat')
    .doc(chatId)
    .set({
      chatContainIDs: [_obj.myId, _obj.receiverId],
      lastMessage: '',
      lastMessageTime: '',
      unreadMessages: 0,
    });
  return obj;
};

// ? we user this function when we send an message
// ! paramater required conversation id and message object like
//!  obj = {
//!   text: text,
//!   created_at: timestamp,
//!   _id:  receiver id ,
//!   user: {
//!     _id: sender Id,
//!   },
//! };
const sendMessage = async (conversationID, mesageObject) => {
  // let timestamp = firestore.FieldValue.serverTimestamp();
  // let id = await storageServices.getKey('userId');
  firestore()
    .collection('chat')
    .doc(conversationID)
    .collection('messages')
    .add(mesageObject);
  await updateLastMesaage(
    conversationID,
    mesageObject.text ? mesageObject.text : 'photo',
  );
};

// ? get user all conversation
const getConversationList = async () => {
  let id = await storageServices.getKey('userId');
  let list = [];
  let myInfo = {};
  let receiverInfo = {};
  let receiverId = '';
  let idsList = [];
  let curUserinfo;
  myInfo = await getUserInfo(id);
  let querySnapshot = await firestore().collection('chat').get();
  for (let index = 0; index < querySnapshot.docs.length; index++) {
    let doc = querySnapshot.docs[index].data();
    idsList = querySnapshot.docs[index].data().chatContainIDs;
    if (idsList?.includes(id)) {
      if (idsList[0] == id) {
        curUserinfo = idsList[0];
        receiverId = idsList[1];
      } else {
        curUserinfo = idsList[1];
        receiverId = idsList[0];
      }
      receiverInfo = await getUserInfo(receiverId);
      let obj = {
        convoId: querySnapshot.docs[index].id,
        myId: id,
        recieverId: receiverId,
        profilePicture: receiverInfo?.profilePicture,
        lastMessage: doc.lastMessage,
        name: receiverInfo?.name,
        unread: doc.unreadMessages,
        messageTime: doc.lastMessageTime,
      };
      list.push(obj);
    }
  }

  return list;
};
// ? get user all conversation
const getNotification = async () => {
  let id = await storageServices.getKey('userId');
  let list = [];
  let querySnapshot = await firestore()
    .collection('notification')
    .where('to', '==', id)
    .get();
  for (let index = 0; index < querySnapshot.docs.length; index++) {
    let doc = querySnapshot.docs[index].data();
    let data = await getUserInfo(doc?.from);
    let obj = {
      title: doc?.title,
      userName: data?.name,
      profilePicture: data?.profilePicture,
      time: doc?.time,
    };
    list.push(obj);
  }

  return list;
};

// ? update conversation last message
// ! paramater required conversation id and last message
const updateLastMesaage = async (conversationID, msg) => {
  firestore()
    .collection('chat')
    .doc(conversationID)
    .update({
      lastMessage: msg,
      lastMessageTime: moment().format('YYYY-MM-DD:HH:mm:ss'),
    });
};

// ? get all messages
// ! paramater required  conversation id
const GetMessages = async conversationId => {
  let list = [];
  let querySnapshot = await firestore()
    .collection('chat')
    .doc(conversationId)
    .collection('messages')
    .orderBy('createdAt', 'desc')
    .get();
  querySnapshot.docs.map(doc => {
    list.push(doc.data());
  });
  list = list.sort((a, b) => {
    return (
      moment(b.createdAt).format('YYYYMMDDHHmmss') -
      moment(a.createdAt).format('YYYYMMDDHHmmss')
    );
  });
  return list.reverse();
};
export const appFBS = {
  uploadImage,
  getData,
  deletData,
  postData,
  updateData,
  Login,
  getUserInfo,
  signup,
  signout,
  storeUserInfo,
  changePassword,
  forgotPassword,
  getFCMToken,
  changeEmail,
  postDataWithId,
  createFCMToken,
  checkEmail,
  uploadProductImage,
  getAllFavouriteProducts,
  getNotification,
  getConversationList,
  sendMessage,
  createConversation,
  checkMessagesCollection,
  GetMessages,
};
