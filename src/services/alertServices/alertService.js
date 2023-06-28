import {Alert} from 'react-native';
import storageServices from '../storageServices/storage.services';
import {appFBS} from '../firebaseServices/firebaseServices';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {ACTIONS} from '../../store/actions';

const show = (title, message) => {
  Alert.alert(title, message, [
    {
      text: 'OK',
      style: 'destructive',
    },
  ]);
};

const deleteAlert = () => {
  return new Promise((resolve, reject) => {
    Alert.alert('Delete', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          resolve();
        },
      },
    ]);
  });
};

const confirm = (message, okText, cancelText, title) => {
  return new Promise((resolve, reject) => {
    Alert.alert(
      title ? title : null,
      message,
      [
        {
          text: cancelText || 'Cancel',
          onPress: () => {
            reject();
          },
          style: 'cancel',
        },
        {text: okText || 'OK', onPress: () => resolve(true)},
      ],
      {cancelable: false},
    );
  });
};
const logoutAlert = (props, dispatch) => {
  Alert.alert('Logout', 'Do You Want To Logout ', [
    {
      text: 'Cancel',
      onPress: () => {
        return 'cancel';
      },
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => {
        logout(props, dispatch);
        // return 'done';
      },
    },
  ]);
};
const logout = async (props, dispatch) => {
  await storageServices.deleteKey('userId');
  dispatch(ACTIONS.setProfileInfo({}));
  dispatch(ACTIONS.setSignupInfo({}));
  dispatch(ACTIONS.setIsLogin(false));
  props.navigation.replace('Auth', {screen: 'Login'});
  console.log('logout success');
};

export const alertServices = {
  show,
  deleteAlert,
  confirm,
  logoutAlert,
};
