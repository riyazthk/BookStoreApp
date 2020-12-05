/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import PlaceOrder from './PlaceOrder';

const OrderPage = ({route}) => {
  const {booksitem = undefined, bookIndex = undefined} = route.params ?? {};
  const [price, setPrice] = useState(booksitem.price);
  const [changeprice, setChangePrice] = useState(booksitem.price);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [orderSummary, setOrderSummary] = useState(false);
  const [quantity, setQuantity] = useState(1);
  let bookDetails = {
    bookIndex: bookIndex,
    booksitem: booksitem,
    price: price,
    setPrice: setPrice,
    showCustomerDetails: showCustomerDetails,
    setShowCustomerDetails: setShowCustomerDetails,
    orderSummary: orderSummary,
    setOrderSummary: setOrderSummary,
    changeprice: changeprice,
    setChangePrice: setChangePrice,
    quantity: quantity,
    setQuantity: setQuantity,
  };

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <ScrollView>
        <PlaceOrder bookDetails={bookDetails} />
      </ScrollView>
    </View>
  );
};
export default OrderPage;
