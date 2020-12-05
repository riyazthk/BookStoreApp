import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {bookDetails} from '../showBooks/bookDetails';
import CustomerDetails from './CustomerDetails';
import PlaceOrder from './PlaceOrder';
const OrderPage = ({navigation, route}) => {
  const {booksitem = undefined, bookIndex = undefined} = route.params ?? {};
  const [details, setDetails] = useState(booksitem);
  console.log('as', booksitem);
  const [price, setPrice] = useState(booksitem.price);
  const [changeprice, setChangePrice] = useState(booksitem.price);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [orderSummary, setOrderSummary] = useState(false);
  const [quantity, setQuantity] = useState(1);
  console.log('index', bookIndex);
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
  console.log(bookDetails.quantity);
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <ScrollView>
        <PlaceOrder bookDetails={bookDetails} />
        {/* <CustomerDetails price={bookDetails.changeprice} /> */}
        {/* <OrderSummary bookDetails={bookDetails} /> */}
      </ScrollView>
    </View>
  );
};
export default OrderPage;
