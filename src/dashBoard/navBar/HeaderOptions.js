import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {} from 'react-native-gesture-handler';
const HeaderOptions = () => {
  return (
    <View style={{paddingTop: 28, paddingLeft: 10, paddingRight: 5}}>
      <View
        style={{
          flexDirection: 'row',
          //padding: 10,
          //justifyContent: 'space-around',
        }}>
        <View style={{width: '10%'}}>
          <Image
            source={require('../../assest/book.png')}
            style={{height: 35, width: 35, tintColor: 'white'}}
          />
        </View>
        <View style={{width: '25%', paddingLeft: 1, paddingTop: 2}}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: '200',
              //textAlign: 'center',
            }}>
            BookStore
          </Text>
        </View>
        <View
          style={{
            width: '50%',
            backgroundColor: 'white',
            paddingLeft: 10,
          }}>
          <Text style={{textAlign: 'left', paddingTop:5}}>
            Search your books..
          </Text>
        </View>
        <View style={{width: '12%', paddingLeft: 10}}>
          <Image
            source={require('../../assest/cart1.png')}
            style={{height: 35, width: 35, tintColor: 'white'}}
          />
        </View>
      </View>
    </View>
  );
};
export default HeaderOptions;
