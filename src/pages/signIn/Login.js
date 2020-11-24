import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {Card, Input} from 'react-native-elements';
import {
  validateEmail,
  validateFormData,
  validatePassword,
} from '../../dashBoard/formValidation/validations';
import ViewBooks from '../../dashBoard/showBooks/ViewBooks';
const Login = () => {
  const [errorValue, setErrorValue] = useState([]);
  const [formValue, setFormValue] = useState([{}]);
  const [emptyValue, setEmptyValue] = useState([]);
  let arr;
  let empty;

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
    console.log('arrray benificia', value, index);
    let response;
    if (item.fieldName === 'email') {
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
  const handleCustomerDetails = () => {
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
      console.log('count entry', count);
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