/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Button, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import {addDetails} from '../../customerService/userDetails';
import {addHistoryDetails} from '../../customerService/userDetails';

const OrderSummary = ({route}) => {
  const {
    booksDetails = undefined,
    customerDetails = undefined,
    changePrice = undefined,
  } = route.params ?? {};
  const navigation = useNavigation();
  const flag = Math.random();

  const handleOrderBooks = () => {
    let books = {
      title: booksDetails.title,
      author: booksDetails.Author,
      image: booksDetails.imageUrl,
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
    navigation.navigate('confirmationOrder', {
      books: books,
      booksDetails: booksDetails,
      customerDetails: customerDetails,
    });
  };

  const handleEdit = (value) => {
    if (value === 'editDetails') {
      navigation.navigate('signUp', {
        customerDetails: customerDetails,
        flag: flag,
      });
    } else if (value === 'alternateAddress') {
      navigation.navigate('signUp', {alternateAddress: 'altenateAddress'});
    }
  };

  const render = (item) => {
    return (
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={{fontSize: 20}}>{item.item.key} :</Text>
        <Text style={{fontSize: 20, paddingLeft: 10}}>{item.item.value}</Text>
      </View>
    );
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
                    onPress={() => handleOrderBooks()}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <FlatList
              data={customerDetails.formValue}
              renderItem={render}
              keyExtractor={(index) => String(index)}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '30%'}}>
              <Button
                title="edit"
                color="brown"
                onPress={() => handleEdit('editDetails')}
              />
            </View>
            <View>
              <Button
                title="alternate address"
                color="brown"
                onPress={() => handleEdit('alternateAddress')}
              />
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};
export default OrderSummary;
