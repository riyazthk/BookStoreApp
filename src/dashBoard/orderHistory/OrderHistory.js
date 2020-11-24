const {useEffect, useState} = require('react');
const {getHistoryOrder} = require('../../customerService/userDetails');
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {bookDetails} from '../showBooks/bookDetails';
const OrderHistory = () => {
  const [viewHistory, setViewHistory] = useState([]);
  useEffect(() => {
    getHistoryOrder().then((res) => {
      console.log(res);
      setViewHistory(res);
    });
  }, []);
  return (
    <View>
      {viewHistory.map((item, index) => {
        return (
          <ScrollView>
            <Card>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={bookDetails[item.bookDetails.image].imageUrl}
                    style={{
                      resizeMode: 'contain',
                      height: 170,
                      position: 'relative',
                      right: 24,
                    }}></Image>
                </View>
                <View>
                  <Text>{item.bookDetails.title}</Text>
                  <Text>{item.bookDetails.author}</Text>
                  <Text>{item.bookDetails.price}</Text>
                </View>
              </View>
            </Card>
          </ScrollView>
        );
      })}
    </View>
  );
};
export default OrderHistory;
