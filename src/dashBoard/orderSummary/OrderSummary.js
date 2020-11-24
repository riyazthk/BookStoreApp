/* eslint-disable react-native/no-inline-styles */
import {useLinkProps, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {Card} from 'react-native-elements';
import {getDetails} from '../../customerService/userDetails';
import {addDetails} from '../../customerService/userDetails';
import {addHistoryDetails} from '../../customerService/userDetails';
import {bookDetails} from '../showBooks/bookDetails';
//import {bookDetails} from '../showBooks/bookDetails';
const OrderSummary = ({route}) => {
  const {
    booksDetails = undefined,
    customerDetails = undefined,
    changePrice = undefined,
  } = route.params ?? {};
  console.log('dee', booksDetails.imageUrl, changePrice, customerDetails);
  const navigation = useNavigation();
  const handleOrderBooks = () => {
    let books = {
      title: booksDetails.title,
      author: booksDetails.Author,
      image: bookDetails.imageUrl,
      price: changePrice,
    };
    let value = {
      title: booksDetails.title,
      author: booksDetails.Author,
      image: booksDetails.imageUrl,
      price: changePrice,
      customerDetails: customerDetails,
    };
    addDetails(value);
    addHistoryDetails(value);
    navigation.navigate('confirmationOrder');
  };
  return (
    <View>
      <View style={{height: '100%', backgroundColor: 'white', paddingTop: 35}}>
        <Card>
          <View style={{flexDirection: 'column'}}>
            <View style={{padding: 5}}>
              <Text style={{fontSize: 25}}>Order Summary</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  source={booksDetails.imageUrl}
                  style={{
                    resizeMode: 'contain',
                    height: 170,
                    position: 'relative',
                    right: 24,
                  }}
                />
              </View>
              <View>
                <Text style={{fontSize: 20, color: 'brown'}}>
                  {booksDetails.title}
                </Text>
                <Text>{booksDetails.Author}</Text>
                <Text style={{fontSize: 25}}>Rs.{changePrice}</Text>
                <View style={{paddingTop: 10}}>
                  <Button
                    title="confirm Order"
                    color="brown"
                    onPress={() => handleOrderBooks()}></Button>
                </View>
              </View>
            </View>
          </View>
        </Card>
      </View>
      {/* ) : null} */}
    </View>
  );
};
export default OrderSummary;
