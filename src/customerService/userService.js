import {firebase} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

export async function SignUpData(formData) {
  let response = await auth()
    .createUserWithEmailAndPassword(
      formData.formValue[3].value,
      formData.formValue[4].value,
    )
    .then(async (res) => {
      await AsyncStorage.setItem('email', res.user.uid);
      let emailToken = res.user.uid;
      firebase
        .database()
        .ref('/user/' + JSON.stringify(emailToken))
        .push(formData);
      return res;
    })
    .catch(function (err) {
      return err.message;
    });
  return response;
}

export async function SignIn(formData) {
  let response = await auth()
    .signInWithEmailAndPassword(formData[0].value, formData[1].value)
    .then(async (res) => {
      await AsyncStorage.setItem('token', res.user.uid);
    })
    .catch(function (err) {
      var errorCode = err.code;
      return errorCode;
    });
  return response;
}

let key;
export const getCustomerDetails = async () => {
  let customerDetail;
  let emailToken = await AsyncStorage.getItem('token');
  await firebase
    .database()
    .ref('/user/')
    .child(JSON.stringify(emailToken))
    .once('value', function (snapshot) {
      customerDetail = snapshot.val();
      snapshot.forEach(function (childSnapshot) {
        key = childSnapshot.key;
      });
    });
  return customerDetail;
};

export const editCustomerDetails = async (data) => {
  let emailToken = await AsyncStorage.getItem('token');
  let response = await firebase
    .database()
    .ref('/user/' + JSON.stringify(emailToken))
    .child(key)
    .update(data);
  return response;
};

export const alternateData = async (data) => {
  let emailToken = await AsyncStorage.getItem('token');
  await firebase
    .database()
    .ref('/alternate Addres/s' + JSON.stringify(emailToken))
    .set(data);
};
