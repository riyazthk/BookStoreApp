import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Card} from 'react-native-elements';
const PlaceOrder = (props) => {
  console.log(
    'place order ',
    props.bookDetails.price,
    props.bookDetails.changePrice,
  );
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(props.bookDetails.price);
  const handleRemoveCart = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
      setPrice(price - props.bookDetails.price);
      props.bookDetails.setChangePrice(price - props.bookDetails.price);
    }
  };
  const handleAddCart = () => {
    setQuantity(quantity + 1);
    setPrice(price + props.bookDetails.price);
    props.bookDetails.setChangePrice(price + props.bookDetails.price);
  };
  const handlePlaceOrder = () => {
    props.bookDetails.setShowCustomerDetails(
      !props.bookDetails.showCustomerDetails,
    );
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
            <Text style={{color: 'brown', fontSize: 15}}>
              {props.bookDetails.booksitem.item.title}
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>
              {props.bookDetails.booksitem.item.Author}
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
                  <Button
                    title="place order"
                    color="brown"
                    onPress={() => handlePlaceOrder()}></Button>
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
