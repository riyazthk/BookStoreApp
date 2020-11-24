import {firebase} from '@react-native-firebase/database';
import {bookDetails} from '../dashBoard/showBooks/bookDetails';

export const addDetails = async (data) => {
  
  console.log('value', data);
  await firebase.database().ref('/orderDetails/').set(data);
};

export const getDetails = async () => {
  let orderDetail;
  orderDetail = await firebase
    .database()
    .ref('/orderDetails/')
    .once('value', function (snapshot) {
      orderDetail = snapshot.val();
    });
  // orderDetails.map((item, index) => {
  //   console.log('detail', item);
  // });
  console.log('detail', orderDetail.author);

  return orderDetail;
};

export const addHistoryDetails = async (data) => {
  console.log('value', data);
  await firebase.database().ref('/historyDetails/').push(data);
};

export async function getHistoryOrder() {
  let arr = [];
  await firebase
    .database()
    .ref('/historyDetails/')
    .once('value', function (snapshot) {
      snapshot.forEach(function (childSnapShot) {
        arr.push(childSnapShot.val());
      });
    });
  console.log('keys', arr);
  return arr;
}
