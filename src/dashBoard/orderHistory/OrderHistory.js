/* eslint-disable react-native/no-inline-styles */
const {useEffect, useState} = require('react');
const {getHistoryOrder} = require('../../customerService/userDetails');
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

const OrderHistory = () => {
  const [viewHistory, setViewHistory] = useState([]);

  useEffect(() => {
    getHistoryOrder().then((res) => {
      console.log('call', res);
      setViewHistory(res);
    });
  }, []);

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingTop: 25}}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              fontWeight: '100',
              color: 'brown',
            }}>
            Order History
          </Text>
        </View>
        {viewHistory.map((item, index) => {
          return (
            <Card>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={item.image}
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
                    {item.title}
                  </Text>
                  <Text>{item.author}</Text>
                  <Text style={{fontSize: 20}}>{item.price}</Text>
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default OrderHistory;
