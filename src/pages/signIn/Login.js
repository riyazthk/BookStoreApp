/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {Card, Input} from 'react-native-elements';
import {SignIn} from '../../customerService/userService';
import {
  validateEmail,
  validatePassword,
} from '../../dashBoard/formValidation/validations';

const Login = () => {
  const [errorValue, setErrorValue] = useState([]);
  const [formValue, setFormValue] = useState([{}]);
  const [emptyValue, setEmptyValue] = useState([]);
  let arr;
  let empty;
  const flag = Math.random();
  const navigaiton = useNavigation();
  const data = {
    projectId: 2,
    projectFields: [
      {
        fieldName: 'email',
        fieldValue: 'email ',
        fieldErrorMsg: 'Enter valid email',
        isMandatory: true,
      },
      {
        fieldName: 'password',
        fieldValue: 'password ',
        fieldErrorMsg: 'Enter valid password',
        isMandatory: true,
      },
    ],
  };

  const handleFormInput = (value, index, item) => {
    let response;
    if (item.fieldName === 'email') {
      response = validateEmail(value);
    } else if (item.fieldName === 'password') {
      response = validatePassword(value);
    }
    if (response === false) {
      arr = [...errorValue];
      arr[index] = item.fieldErrorMsg;
      setErrorValue(arr);
    } else {
      arr = [...errorValue];
      arr[index] = '';
      setErrorValue(arr);
      empty = [...emptyValue];
      empty[index] = true;
      setEmptyValue(empty);
      let values = {
        key: item.fieldValue,
        value: response,
      };
      let formArr = [...formValue];
      formArr[index] = values;
      setFormValue(formArr);
    }
  };

  const handleCustomerDetails = async () => {
    let count = 0;
    let arra = [...errorValue];
    data.projectFields.map((item, index) => {
      if (formValue[index] === undefined) {
        arra[index] = 'field not be a empty';
        setErrorValue(arra);
        count = 1;
      } else {
        count = 2;
      }
    });
    if (count === 2) {
      await SignIn(formValue).then((res) => {
        navigaiton.navigate('homePage', {flag: flag});
      });
    }
  };

  return (
    <View style={{height: '100%', paddingTop: 25, backgroundColor: 'white'}}>
      <Card>
        <ScrollView>
          <View style={{padding: 10}}>
            <Text style={{textAlign: 'center', fontSize: 25, color: 'brown'}}>
              SignUp
            </Text>
          </View>
          {data.projectFields.map((item, index) => {
            return (
              <Input
                label={item.fieldValue}
                color={'brown'}
                onChangeText={(currentAddress) =>
                  handleFormInput(currentAddress, index, item)
                }
                errorMessage={errorValue[index]}
              />
            );
          })}
          <View style={{justifyContent: 'space-between'}}>
            <View style={{padding: 10}}>
              <Button
                title="login"
                color="brown"
                onPress={() => handleCustomerDetails()}
              />
            </View>
            <View style={{padding: 10}}>
              <Button
                title="signUp"
                color="brown"
                onPress={() => navigaiton.navigate('signUp')}
              />
            </View>
          </View>
        </ScrollView>
      </Card>
    </View>
  );
};

export default Login;
