/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import {Card} from 'react-native-elements';
import {getCustomerDetails} from '../../customerService/userService';

const PlaceOrder = (props) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(props.bookDetails.price);
  const [customerDetails, setCustomerDetails] = useState([]);
  const flag = Math.random();

  useEffect(() => {
    const call = async () => {
      let emailToken = await AsyncStorage.getItem('token');
      if (emailToken !== null) {
        await getCustomerDetails().then((res) => {
          Object.keys(res).map((keys, index) => {
            setCustomerDetails(res[keys]);
          });
        });
      }
    };
    call();
  }, []);

  const handleRemoveCart = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
      props.bookDetails.setQuantity(props.bookDetails.quantity - 1);
      setPrice(price - props.bookDetails.price);
      props.bookDetails.setChangePrice(price - props.bookDetails.price);
    }
  };

  const handleAddCart = () => {
    setQuantity(quantity + 1);
    props.bookDetails.setQuantity(props.bookDetails.quantity + 1);
    setPrice(price + props.bookDetails.price);
    props.bookDetails.setChangePrice(price + props.bookDetails.price);
  };

  const handlePlaceOrder = async () => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      navigation.navigate('orderSummary', {
        customerDetails: customerDetails,
        booksDetails: props.bookDetails.booksitem,
        changePrice: price,
      });
    } else {
      navigation.navigate('login', {flag: flag});
    }
  };

  return (
    <View style={{paddingTop: 25, backgroundColor: 'white', paddingBottom: 15}}>
      <Card>
        <View style={{padding: 5}}>
          <Text style={{fontSize: 25}}>MyCart({quantity})</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={props.bookDetails.booksitem.imageUrl}
              style={{
                resizeMode: 'contain',
                height: 170,
                position: 'relative',
                right: 24,
              }}
            />
          </View>
          <View>
            <Text style={{color: 'brown', fontSize: 20}}>
              {props.bookDetails.booksitem.title}
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>
              {props.bookDetails.booksitem.Author}
            </Text>
            <Text style={{fontSize: 20}}>price:{props.bookDetails.price}</Text>
            <View>
              <Text>Quantity</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{padding: 5}}>
                  <TouchableOpacity onPress={() => handleRemoveCart()}>
                    <Image
                      source={require('../../assest/remove.png')}
                      style={{height: 30, width: 30}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{padding: 5}}>
                  <Text style={{fontSize: 20}}> {price}</Text>
                </View>
                <View style={{padding: 5}}>
                  <TouchableOpacity onPress={() => handleAddCart()}>
                    <Image
                      source={require('../../assest/plus.png')}
                      style={{height: 30, width: 30}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                {props.bookDetails.showCustomerDetails === false ? (
                  <View>
                    <Button
                      title="place order"
                      color="brown"
                      onPress={() => handlePlaceOrder()}
                    />
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};
export default PlaceOrder;
