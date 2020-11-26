/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {RadioButton} from 'react-native-paper';
import {ascendingOrder, descendingOrder} from '../sortingBooksData/SortingData';
import {Input} from 'react-native-elements';
import {searchData} from '../searchBookData/searchBooks';
const HeaderOptions = (props) => {
  const navigation = useNavigation();
  const [checkSearch, setCheckSearch] = useState(false);
  const handleFilter = () => {};
  const refRBSheet = useRef();

  const handlePrice = async (value) => {
    console.log('valu', value);
    if (value === 'ascending') {
      let arr = [];
      console.log(arr);
      props.setSortingOrder(null);
      arr = ascendingOrder(value);
      props.setSortingOrder(arr);
      props.setBooleanSort(true);
    } else {
      let arr = [];
      console.log(arr);
      props.setSortingOrder(null);
      arr = descendingOrder(value);
      console.log('value', arr);
      props.setSortingOrder(arr);
      props.setBooleanSort(true);
    }
  };
  const handleSearch = () => {
    setCheckSearch(!checkSearch);
    props.setBooleanSort(!props.booleanSort);
  };
  let bookArray = [];
  const handleSearchBook = (searchBook) => {
    bookArray = searchData(searchBook);
    props.setSortingOrder(bookArray);
    props.setBooleanSort(true);
  };
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
        {checkSearch === false ? (
          <View style={{width: '40%', paddingLeft: 1, paddingTop: 2}}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontWeight: '200',
                textAlign: 'center',
              }}>
              BookStore
            </Text>
          </View>
        ) : (
          <View
            style={{
              width: '42%',
              backgroundColor: 'white',
              paddingLeft: 10,
              // height: '80%',
            }}>
            <Input
              //containerStyle={{h}}
              label="search your text"
              onChangeText={(text) => handleSearchBook(text)}
            />
          </View>
        )}
        <View
          // style={{
          //   width: '42%',
          //   backgroundColor: 'white',
          //   paddingLeft: 10,
          style={{width: '12%', paddingLeft: 10}}>
          <TouchableOpacity onPress={() => handleSearch()}>
            <Image
              source={require('../../assest/search.png')}
              style={{height: 35, width: 35, tintColor: 'white'}}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '12%', paddingLeft: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('orderHistory')}>
            <Image
              source={require('../../assest/cart1.png')}
              style={{height: 35, width: 35, tintColor: 'white'}}
            />
          </TouchableOpacity>
        </View>

        <View style={{width: '12%', paddingLeft: 10}}>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Image
              source={require('../../assest/filter.png')}
              style={{
                height: 35,
                width: 35,
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '12%', paddingLeft: 10}}>
          <TouchableOpacity>
            <Image
              source={require('../../assest/account.png')}
              style={{height: 35, width: 35, tintColor: 'white'}}
            />
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={300}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            container: {
              backgroundColor: 'white',
            },
            draggableIcon: {
              display: 'flex',
            },
          }}>
          <View>
            <View style={{padding: 10}}>
              <TouchableOpacity onPress={() => handlePrice('ascending')}>
                <Text style={{fontSize: 20}}>price low to high</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity onPress={() => handlePrice('descending')}>
                <Text style={{fontSize: 20}}>price high to low</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>
    </View>
  );
};
export default HeaderOptions;
