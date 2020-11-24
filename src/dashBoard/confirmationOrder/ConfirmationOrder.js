import React, {useEffect, useState} from 'react';
import {getDetails} from '../../customerService/userDetails';
import {View, Text, Button, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const ConfirmationOrder = ({route}) => {
  const [viewBook, setViewBook] = useState();
  const {books = undefined, customerDetails = undefined} = route.params ?? {};
  console.log('image', books.image);
  const navigation = useNavigation();
  return (
    <View>
      <View style={{height: '100%', backgroundColor: 'white', paddingTop: 35}}>
        <Card>
          <View style={{flexDirection: 'column'}}>
            <View style={{padding: 5}}>
              <Text style={{fontSize: 25}}>Order Summary</Text>
            </View>
            <View style={{flexDirection: 'row', paddingBottom: 15}}>
              <View>
                <Image
                  source={books.image}
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
                  {books.title}
                </Text>
                <Text>{books.author}</Text>
                <Text style={{fontSize: 25}}>Rs.{books.price}</Text>
                <View style={{paddingTop: 10}}></View>
              </View>
            </View>
            <Card.Divider style={{backgroundColor: 'brown', height: 2}} />
            <View>
              <View style={{paddingTop: 2}}>
                <Text style={{fontSize: 25, color: 'brown'}}>
                  customerDetails :
                </Text>
              </View>
              {customerDetails.map((item, index) => {
                return (
                  <View style={{flexDirection: 'row', padding: 5}}>
                    <Text style={{fontSize: 20}}>{item.key} :</Text>
                    <Text style={{fontSize: 20, paddingLeft: 10}}>
                      {item.value}
                    </Text>
                  </View>
                );
              })}
              <View style={{padding: 10}}>
                <Button
                  title="Back To Home"
                  color="brown"
                  onPress={() => navigation.navigate('homePage')}></Button>
              </View>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};
export default ConfirmationOrder;
