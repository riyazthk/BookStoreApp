/* eslint-disable react-native/no-inline-styles */
import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
const OrderSummary = (props) => {
  console.log(
    'summary',
    props.bookDetails.orderSummary,
    props.bookDetails.changePrice,
  );
  return (
    <View>
      {props.bookDetails.orderSummary === true ? (
        <View>
          <Card>
            <View style={{flexDirection: 'column'}}>
              <View>
                <Text>Order Summary</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={props.bookDetails.booksitem.item.imageUrl}
                    style={{
                      resizeMode: 'contain',
                      height: 170,
                      position: 'relative',
                      right: 24,
                    }}
                  />
                </View>
                <View>
                  <Text>{props.bookDetails.booksitem.item.title}</Text>
                  <Text>{props.bookDetails.booksitem.item.Author}</Text>
                  <Text>Rs.{props.bookDetails.changePrice}</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>
      ) : null}
    </View>
  );
};
export default OrderSummary;
