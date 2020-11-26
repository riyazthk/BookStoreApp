import {firebase} from '@react-native-firebase/database';
import {AsyncStorage} from 'react-native';
import {bookDetails} from '../dashBoard/showBooks/bookDetails';

export const addDetails = async (data) => {
  console.log('value', data);
  await firebase.database().ref('/orderDetails/').set(data);
};

export const getDetails = async () => {
  let orderDetail;
  let token = await AsyncStorage.getItem('email');
  orderDetail = await firebase
    .database()
    .ref('/orderDetails/')
    .child(JSON.stringify(token))
    .once('value', function (snapshot) {
      orderDetail = snapshot.val();
    });
  console.log('detail', orderDetail.author);

  return orderDetail;
};

export const addHistoryDetails = async (data) => {
  let token = await AsyncStorage.getItem('email');
  console.log('value', data);
  await firebase
    .database()
    .ref('/historyDetails/' + JSON.stringify(token))
    .push(data);
};

export async function getHistoryOrder() {
  let arr = [];
  let token = await AsyncStorage.getItem('email');
  await firebase
    .database()
    .ref('/historyDetails/')
    .child(JSON.stringify(token))
    .once('value', function (snapshot) {
      snapshot.forEach(function (childSnapShot) {
        arr.push(childSnapShot.val());
      });
    });
  console.log('keys', arr);
  return arr;
}
