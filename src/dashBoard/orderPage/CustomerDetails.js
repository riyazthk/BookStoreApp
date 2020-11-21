import React from 'react';
import {View, Text, Button} from 'react-native';
import {Card} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';

const CustomerDetails = (props) => {
  console.log(props.bookDetails.showCustomerDetails);
  const handleCustomerDetails = () => {
    props.bookDetails.setOrderSummary(!props.bookDetails.orderSummary);
  };
  return (
    <View>
      {props.bookDetails.showCustomerDetails === true ? (
        <View>
          <Card>
            <TextInput placeholder="name" underlineColorAndroid="black" />
            <TextInput
              placeholder="phone Number"
              underlineColorAndroid="black"
            />
            <TextInput placeholder="pincode" underlineColorAndroid="black" />
            <TextInput placeholder="locality" underlineColorAndroid="black" />
            <TextInput placeholder="Address" underlineColorAndroid="black" />
            <TextInput placeholder="city/town" underlineColorAndroid="black" />
            <TextInput placeholder="landmark" underlineColorAndroid="black" />
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
