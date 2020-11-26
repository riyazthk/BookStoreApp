import {firebase} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {AsyncStorage} from 'react-native';

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
      console.log(res);
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
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch(function (err) {
      var errorCode = err.code;
      console.log('error ', errorCode);
      var errorMessage = err.message;
      return errorCode;
    });
  await AsyncStorage.setItem('token', response.user.uid);
  //   let token = await AsyncStorage.getItem('token');
  //   console.log('token', token);
  return response;
}
let key;
export const getCustomerDetails = async () => {
  let customerDetail;
  let emailToken = await AsyncStorage.getItem('email');
  await firebase
    .database()
    .ref('/user/')
    .child(JSON.stringify(emailToken))
    .once('value', function (snapshot) {
      customerDetail = snapshot.val();
      //   key = snapshot.key();
    });
  // orderDetails.map((item, index) => {
  //   console.log('detail', item);
  // });
  console.log('detail', customerDetail.author);

  return customerDetail;
};
