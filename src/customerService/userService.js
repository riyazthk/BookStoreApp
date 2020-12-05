import {firebase} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

export async function SignUpData(formData) {
  //let email = await AsyncStorage.getItem('email');
  console.log(formData);

  let response = await auth()
    .createUserWithEmailAndPassword(
      formData.formValue[3].value,
      formData.formValue[4].value,
    )
    .then(async (res) => {
      console.log('res', res.user.uid);
      await AsyncStorage.setItem('email', res.user.uid);
      let emailToken = res.user.uid;
      firebase
        .database()
        .ref('/user/' + JSON.stringify(emailToken))
        .push(formData);
      console.log('asd', res);
      return res;
    })
    .catch(function (err) {
      console.log(err.message);
      return err.message;
    });
  console.log(response);
  return response;
}
export async function SignIn(formData) {
  let response = await auth()
    .signInWithEmailAndPassword(formData[0].value, formData[1].value)
    .then(async (res) => {
      console.log(res);
      await AsyncStorage.setItem('token', res.user.uid);
    })
    .catch(function (err) {
      var errorCode = err.code;
      console.log('error ', errorCode);
      // var errorMessage = err.message;
      return errorCode;
    });
  return response;
}
let key;
export const getCustomerDetails = async () => {
  let customerDetail;
  let emailToken = await AsyncStorage.getItem('token');
  console.log('email', emailToken);
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
  console.log('cusss', customerDetail);
  return customerDetail;
};

export const editCustomerDetails = async (data) => {
  let emailToken = await AsyncStorage.getItem('token');
  let response = await firebase
    .database()
    .ref('/user/' + JSON.stringify(emailToken))
    .child(key)
    .update(data);
  console.log('as', response);
  return response;
};

export const alternateData = async (data) => {
  let emailToken = await AsyncStorage.getItem('token');
  await firebase
    .database()
    .ref('/alternate Addres/s' + JSON.stringify(emailToken))
    .set(data);
};
