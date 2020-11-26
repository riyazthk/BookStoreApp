/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {bookDetails} from './bookDetails';
import {} from 'react-native-gesture-handler';
import {Card} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {getHistoryOrder} from '../../customerService/userDetails';

const ViewBooks = (props) => {
  const [describeNote, setDescribeNote] = useState();
  const refRBSheet = useRef();
  const navigaiton = useNavigation();
  const filterBooksData =
    props.booleanSort === false ? bookDetails : props.sortingOrder;
  console.log('sorting data', props.sortingOrder, props.booleanSort);
  useEffect(() => {
    getHistoryOrder().then((res) => {});
  }, [props.flag]);

  const renderItem = (booksitem) => {
    return (
      <View>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <Card
            containerStyle={{
              width: 170,
            }}>
            <View>
              <Image
                source={booksitem.item.imageUrl}
                style={{
                  resizeMode: 'contain',
                  height: 170,
                  position: 'relative',
                  right: 24,
                }}
              />
            </View>
            <View style={{width: '110%'}}>
              <Text style={{color: 'brown', fontSize: 15}}>
                {booksitem.item.title}
              </Text>
              <Text style={{color: 'grey', fontSize: 12}}>
                {booksitem.item.Author}
              </Text>
              <Text style={{fontSize: 20}}>price:{booksitem.item.price}</Text>
            </View>
            <View style={{flexDirection: 'column', paddingTop: 5}}>
              <View style={{padding: 5}}>
                <Button
                  title="ADD To Bag"
                  color="brown"
                  onPress={() =>
                    navigaiton.navigate('orderPage', {
                      booksitem: booksitem.item,
                      bookIndex: booksitem.index,
                    })
                  }
                />
              </View>
              <View style={{padding: 5}}>
                <Button title="WhishList" color="brown" />
              </View>
            </View>
          </Card>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={300}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
                //marginBottom: '13%',
                //borderRadius: 10,
              },
              container: {
                backgroundColor: '#e35656',
              },
              draggableIcon: {
                display: 'flex',
              },
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>
              Book Description:{booksitem.item.description}
            </Text>
          </RBSheet>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{}}>
      <FlatList
        data={filterBooksData}
        renderItem={renderItem}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          //backgroundColor: 'violet',
          //justifyContent: 'space-between',
          //padding: 10,
        }}
        keyExtractor={(index) => index}
      />
    </View>
  );
};
export default ViewBooks;
