import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Card, Input} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';

import {
  validateFormData,
  validateMobileNumber,
  validatePinCode,
} from '../formValidation/validations';

const CustomerDetails = (props) => {
  console.log('value', props.bookDetails.booksitem.title);
  const [errorValue, setErrorValue] = useState([]);
  const [formValue, setFormValue] = useState([{}]);
  const [emptyValue, setEmptyValue] = useState([]);
  const navigaiton = useNavigation();
  let arr;
  let empty;
  let values = [];
  console.log('booo', props.price);
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
      // props.bookDetails.setOrderSummary(!props.bookDetails.orderSummary);
      navigaiton.navigate('orderSummary', {
        booksDetails: props.bookDetails.booksitem,
        changePrice: props.price,
        customerDetails: formValue,
      });
      // console.log(formValue[0].key);
      // let bookDetails = {
      //   title: props.bookDetails.booksitem.item.title,
      //   author: props.bookDetails.booksitem.item.Author,
      //   price: props.bookDetails.booksitem.item.price,
      //   image: props.bookDetails.booksitem.item.imageUrl,
      //   quantity: props.bookDetails.booksitem.item.quantity,
      // };
      // let value = {
      //   customerDetails: formValue,
      //   bookDetails: bookDetails,
      // };
      // title: props.bookDetails.booksitem.item.title,
      // author: props.bookDetails.booksitem.item.Author,
      // price: props.bookDetails.booksitem.item.price,
      // image: props.bookDetails.booksitem.item.imageUrl,
      // quantity: props.bookDetails.booksitem.item.quantity,
      //   addDetails(value);
    }
  };
  return (
    <View>
      {props.bookDetails.showCustomerDetails === true ? (
        <View>
          <Card>
            {/* <TextInput placeholder="name" underlineColorAndroid="black" />
            <TextInput
              placeholder="phone Number"
              underlineColorAndroid="black"
            />
            <TextInput placeholder="pincode" underlineColorAndroid="black" />
            <TextInput placeholder="locality" underlineColorAndroid="black" />
            <TextInput placeholder="Address" underlineColorAndroid="black" />
            <TextInput placeholder="city/town" underlineColorAndroid="black" />
            <TextInput placeholder="landmark" underlineColorAndroid="black" /> */}
            {data.projectFields.map((item, index) => {
              return (
                <Input
                  label={item.fieldValue}
                  onChangeText={(currentAddress) =>
                    handleFormInput(currentAddress, index, item)
                  }
                  errorMessage={errorValue[index]}
                />
              );
            })}
            <Button
              title="Continue"
              color="brown"
              onPress={() => handleCustomerDetails()}></Button>
          </Card>
        </View>
      ) : null}
    </View>
  );
};
export default CustomerDetails;
