/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Card, Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {
  editCustomerDetails,
  SignUpData,
  alternateData,
} from '../../customerService/userService';
import {
  validateFormData,
  validateMobileNumber,
  validatePinCode,
  validateEmail,
  validatePassword,
} from '../../dashBoard/formValidation/validations';
import {data} from './arrayData';
const SignUp = ({route}) => {
  const {
    customerDetails = undefined,
    flag = undefined,
    alternateAddress = undefined,
  } = route.params ?? {};
  const [errorValue, setErrorValue] = useState([]);
  const [formValue, setFormValue] = useState([{}]);
  const [emptyValue, setEmptyValue] = useState([]);
  const [editedValues, setEditedValues] = useState([]);
  const navigaiton = useNavigation();
  let arr;
  let empty;
  let bookData =
    customerDetails === undefined
      ? data.projectFields
      : customerDetails.formValue;
  const [handleValue, setHandleValue] = useState([]);
  const [handleBookArrayFlag, setHandleBookArrayFlag] = useState([]);
  let response;

  let boolArr = [...handleBookArrayFlag];
  let boolEdit = [...editedValues];
  // useEffect(() => {
  //   if (customerDetails !== undefined) {
  //     bookData.map((item, index) => {
  //       boolArr[index] = false;
  //       setHandleBookArrayFlag(boolArr);
  //       boolEdit[index] = item;
  //       setEditedValues(boolEdit);
  //     });
  //   }
  // }, []);
  let count = 0;
  const handleFormInput = (value, index, item) => {
    if (customerDetails !== undefined && count === 0) {
      bookData.map((item, index) => {
        boolArr[index] = false;
        setHandleBookArrayFlag(boolArr);
        boolEdit[index] = item;
        setEditedValues(boolEdit);
      });
      count = 1;
    }
    let resArr;
    resArr = [...handleValue];
    if (
      item.fieldName === 'text' ||
      item.key === 'Name' ||
      item.key === 'locality ' ||
      item.key === 'Address ' ||
      item.key === 'city' ||
      item.key === 'landMark'
    ) {
      console.log('entry');
      response = validateFormData(value);
      resArr[index] = response;
      setHandleValue(resArr);
      boolArr[index] = true;
      setHandleBookArrayFlag(boolArr);
    } else if (item.fieldName === 'numeric' || item.key === 'phoneNumber') {
      console.log('entry');
      response = validateMobileNumber(value);
      resArr[index] = response;
      setHandleValue(resArr);
      boolArr[index] = true;
      setHandleBookArrayFlag(boolArr);
    } else if (item.fieldName === 'pincode' || item.key === 'pincode ') {
      console.log('entry');
      response = validatePinCode(value);
      resArr[index] = response;
      setHandleValue(resArr);
      boolArr[index] = true;
      setHandleBookArrayFlag(boolArr);
    } else if (item.fieldName === 'email' || item.key === 'email ') {
      console.log('entry');
      response = validateEmail(value);
      resArr[index] = response;
      setHandleValue(resArr);
      boolArr[index] = true;
      setHandleBookArrayFlag(boolArr);
    } else if (item.fieldName === 'password' || item.key === 'password ') {
      console.log('entry');
      response = validatePassword(value);
      resArr[index] = response;
      setHandleValue(resArr);
      boolArr[index] = true;
      setHandleBookArrayFlag(boolArr);
    }
    if (response === false) {
      arr = [...errorValue];
      arr[index] =
        customerDetails === undefined ? item.fieldErrorMsg : 'invalid Data';
      setErrorValue(arr);
    } else {
      arr = [...errorValue];
      arr[index] = '';
      setErrorValue(arr);
      empty = [...emptyValue];
      empty[index] = true;
      setEmptyValue(empty);
      let values = {
        key: customerDetails === undefined ? item.fieldValue : item.key,
        value: handleBookArrayFlag[index] === true ? response : item.value,
      };
      if (customerDetails === undefined) {
        let formArr = [...formValue];
        formArr[index] = values;
        setFormValue(formArr);
        console.log('value', formValue);
      } else {
        editedValues.map((editedItem) => {
          if (editedItem.key === values.key) {
            editedItem.value = values.value;
          }
        });
      }
      console.log('edit valuessss', editedValues);
    }
  };
  const handleCustomerDetails = async () => {
    let count = 0;
    let arra = [...errorValue];
    data.projectFields.map((item, index) => {
      console.log('index', formValue[index], index);
      if (formValue[index] === undefined && customerDetails === undefined) {
        console.log('enter');
        arra[index] = 'field not be a empty';
        setErrorValue(arra);
        console.log(arra);
        console.log('err', errorValue);
        count = 1;
      } else {
        count = 2;
      }
      console.log('count', count);
    });
    console.log('count entry', formValue);

    if (count === 2) {
      console.log('count entry', formValue);
      if (customerDetails === undefined && alternateAddress === undefined) {
        let formData = {formValue: formValue};
        await SignUpData(formData).then((res) => {
          navigaiton.navigate('login');
          console.log('signUp', res);
        });
      } else if (
        customerDetails !== undefined &&
        alternateAddress === undefined
      ) {
        let formData = {formValue: editedValues};
        await editCustomerDetails(formData).then((res) => {
          console.log(res);
        });
        navigaiton.navigate('homePage');
      } else if (alternateAddress !== undefined) {
        let formData = {formValue: formValue};
        console.log('alternate', data);
        await alternateData(formData).then((res) => {
          console.log(res);
          navigaiton.navigate('homePage');
        });
      }
    }
  };
  return (
    <View style={{height: '100%', paddingTop: 25, backgroundColor: 'white'}}>
      <Card>
        <ScrollView>
          {customerDetails === undefined ? (
            <View>
              {alternateAddress === undefined ? (
                <View style={{padding: 10}}>
                  <Text
                    style={{textAlign: 'center', fontSize: 25, color: 'brown'}}>
                    SignUp
                  </Text>
                </View>
              ) : (
                <View style={{padding: 10}}>
                  <Text
                    style={{textAlign: 'center', fontSize: 25, color: 'brown'}}>
                    Alternate Address
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <View style={{padding: 10}}>
              <Text style={{textAlign: 'center', fontSize: 25, color: 'brown'}}>
                Edit User Detials
              </Text>
            </View>
          )}
          {bookData.map((item, index) => {
            return (
              <Input
                label={
                  customerDetails === undefined ? item.fieldValue : item.key
                }
                key={index}
                color={'brown'}
                onChangeText={(currentAddress) =>
                  handleFormInput(currentAddress, index, item)
                }
                errorMessage={errorValue[index]}
                value={
                  customerDetails === undefined
                    ? null
                    : handleBookArrayFlag[index] === true
                    ? handleValue[index]
                    : item.value
                }
              />
            );
          })}
          {customerDetails === undefined ? (
            <View>
              {alternateAddress === undefined ? (
                <View style={{justifyContent: 'space-between'}}>
                  <View style={{padding: 10}}>
                    <Button
                      title="submit"
                      color="brown"
                      onPress={() => handleCustomerDetails()}
                    />
                  </View>
                  <View style={{padding: 10}}>
                    <Button
                      title="back to login"
                      color="brown"
                      onPress={() => navigaiton.navigate('login')}
                    />
                  </View>
                </View>
              ) : (
                <View style={{padding: 10}}>
                  <Button
                    title="submit"
                    color="brown"
                    onPress={() => handleCustomerDetails()}
                  />
                </View>
              )}
            </View>
          ) : (
            <View>
              <Button
                title="submit"
                color="brown"
                onPress={() => handleCustomerDetails()}
              />
            </View>
          )}
        </ScrollView>
      </Card>
    </View>
  );
};
export default SignUp;
