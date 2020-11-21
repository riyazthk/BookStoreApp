import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {bookDetails} from '../showBooks/bookDetails';
import CustomerDetails from './CustomerDetails';
import OrderSummary from './OrderSummary';
import PlaceOrder from './PlaceOrder';
const OrderPage = ({navigation, route}) => {
  const {booksitem = undefined} = route.params ?? {};
  const [price, setPrice] = useState(booksitem.item.price);
  const [changeprice, setChangePrice] = useState(booksitem.item.price);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [orderSummary, setOrderSummary] = useState(false);
  let bookDetails = {
    booksitem: booksitem,
    price: price,
    setPrice: setPrice,
    showCustomerDetails: showCustomerDetails,
    setShowCustomerDetails: setShowCustomerDetails,
    orderSummary: orderSummary,
    setOrderSummary: setOrderSummary,
    changeprice: changeprice,
    setChangePrice: setChangePrice,
  };
  console.log(bookDetails);
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <ScrollView>
        <PlaceOrder bookDetails={bookDetails} />
        <CustomerDetails bookDetails={bookDetails} />
        <OrderSummary bookDetails={bookDetails} />
      </ScrollView>
    </View>
  );
};
export default OrderPage;
