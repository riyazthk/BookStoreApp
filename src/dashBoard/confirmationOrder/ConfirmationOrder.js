/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, Image, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';

const ConfirmationOrder = ({route}) => {
  const {books = undefined, customerDetails = undefined} = route.params ?? {};

  const viewBook = customerDetails.formValue;
  const navigation = useNavigation();

  const render = (item, index) => {
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
        <ScrollView>
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
                  <Text style={{fontSize: 25}}>Rs.{books.price}</Text>
                  <Text>{books.author}</Text>
                  <View style={{paddingTop: 10}} />
                </View>
              </View>
              <Card.Divider style={{backgroundColor: 'brown', height: 2}} />
              <View>
                <View style={{paddingTop: 2}}>
                  <Text style={{fontSize: 25, color: 'brown'}}>
                    customerDetails :
                  </Text>
                </View>
                <FlatList
                  data={viewBook}
                  renderItem={render}
                  keyExtractor={(index) => String(index)}
                />
                <View style={{padding: 10}}>
                  <Button
                    title="Back To Home"
                    color="brown"
                    onPress={() => navigation.navigate('homePage')}
                  />
                </View>
              </View>
            </View>
          </Card>
        </ScrollView>
      </View>
    </View>
  );
};
export default ConfirmationOrder;
