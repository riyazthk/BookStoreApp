import React, {useEffect, useState} from 'react';
import {getDetails} from '../../customerService/userDetails';
import {View, Text, Button, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const ConfirmationOrder = () => {
  const [viewBook, setViewBook] = useState();
  useEffect(() => {
    const callData = async () => {
      await getDetails().then((res) => {
        setViewBook(res);
      });
      console.log('vieweee', viewBook);
      //   viewBook.map((item, index) => {
      //     console.log('itemsssss', item);
      //   });
    };
    callData();
  }, []);
  const navigation = useNavigation();
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
                {/* <Image
                  source={viewBook.booksDetails.im}
                  style={{
                    resizeMode: 'contain',
                    height: 170,
                    position: 'relative',
                    right: 24,
                  }}
                /> */}
              </View>
              <View>
                {/* <Text style={{fontSize: 20, color: 'brown'}}>
                  {viewBook.booksDetails.title}
                </Text>
                <Text>{viewBook.booksDetails.Author}</Text>
                <Text style={{fontSize: 25}}>
                  Rs.{viewBook.booksDetails.changePrice}
                </Text>
                <View style={{paddingTop: 10}}>
                  <Button
                    title="Back To Home"
                    color="brown"
                    onPress={() => navigation.navigate('homePage')}></Button> */}
                {/* </View> */}
              </View>
            </View>
          </View>
        </Card>
      </View>
      {/* ) : null} */}
    </View>
  );
};
export default ConfirmationOrder;
