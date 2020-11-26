import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';
import {Card, Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {SignUpData} from '../../customerService/userService';
import {
  validateFormData,
  validateMobileNumber,
  validatePinCode,
  validateEmail,
  validatePassword,
} from '../../dashBoard/formValidation/validations';
const SignUp = () => {
  const [errorValue, setErrorValue] = useState([]);
  const [formValue, setFormValue] = useState([{}]);
  const [emptyValue, setEmptyValue] = useState([]);
  const navigaiton = useNavigation();
  let arr;
  let empty;
  let values = [];
  const data = {
    projectId: 2,
    projectFields: [
      {
        fieldName: 'text',
        fieldValue: 'Name',
        fieldErrorMsg: 'Enter valid name',
        isMandatory: true,
      },
      {
        fieldName: 'numeric',
        fieldValue: 'phoneNumber',
        fieldErrorMsg: 'Enter valid number',
        isMandatory: true,
      },
      {
        fieldName: 'pincode',
        fieldValue: 'pincode ',
        fieldErrorMsg: 'Enter valid value',
        isMandatory: true,
      },
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
      {
        fieldName: 'text',
        fieldValue: 'locality ',
        fieldErrorMsg: 'Enter valid location',
        isMandatory: true,
      },
      {
        fieldName: 'text',
        fieldValue: 'Address ',
        fieldErrorMsg: 'Enter valid Address',
        isMandatory: true,
      },
      {
        fieldName: 'text',
        fieldValue: 'city',
        fieldErrorMsg: 'Enter valid city',
        isMandatory: true,
      },
      {
        fieldName: 'text',
        fieldValue: 'landMark',
        fieldErrorMsg: 'Enter valid landmark',
        isMandatory: true,
      },
    ],
  };
  const handleFormInput = (value, index, item) => {
    console.log('arrray benificia', value, index);
    let response;
    if (item.fieldName === 'text') {
      response = validateFormData(value);
    } else if (item.fieldName === 'numeric') {
      response = validateMobileNumber(value);
    } else if (item.fieldName === 'pincode') {
      response = validatePinCode(value);
    } else if (item.fieldName === 'email') {
      response = validateEmail(value);
    } else if (item.fieldName === 'password') {
      response = validatePassword(value);
    }
    console.log('xc', response);
    if (response === false) {
      arr = [...errorValue];
      arr[index] = item.fieldErrorMsg;
      console.log('value', arr);
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
      console.log(formValue);
    }
  };
  const handleCustomerDetails = async () => {
    let count = 0;
    let arra = [...errorValue];
    data.projectFields.map((item, index) => {
      console.log('index', formValue[index], index);
      if (formValue[index] === undefined) {
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
    if (count === 2) {
      console.log('count entry', formValue[3].value);
      let data = {formValue: formValue};
      await SignUpData(data).then((res) => {
        // if (res.user.uid !== null) {
        navigaiton.navigate('login');
        // }
        console.log('signUp', res);
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
        </ScrollView>
      </Card>
    </View>
  );
};
export default SignUp;
