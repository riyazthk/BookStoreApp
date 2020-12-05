/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ascendingOrder, descendingOrder} from '../sortingBooksData/SortingData';
import {Input} from 'react-native-elements';
import {searchData} from '../searchBookData/searchBooks';
import {Avatar} from 'react-native-paper';
import {getCustomerDetails} from '../../customerService/userService';
import AsyncStorage from '@react-native-community/async-storage';

const HeaderOptions = (props) => {
  const navigation = useNavigation();
  const [checkSearch, setCheckSearch] = useState(false);
  const [booleanRbSheet, setBooleanRbSheet] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [checkLogin, setCheckLogin] = useState(true);
  const [checkEmailToken, setCheckEmailToken] = useState(null);
  const refRBSheet = useRef();
  console.log('ll', checkLogin);
  useEffect(() => {
    console.log('enter');
    const callDetails = async () => {
      console.log('entry');
      setCheckEmailToken(await AsyncStorage.getItem('token'));
      if (checkEmailToken !== null) {
        getCustomerDetails().then((res) => {
          Object.keys(res).map((keys, index) => {
            console.log('consol', res[keys].formValue);
            setUserDetails(res[keys].formValue);
          });
          // console.log('user', userDetails);
        });
        setCheckLogin(false);
      }
    };
    callDetails();
  }, [checkEmailToken, userDetails]);

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

    props.setBooleanSort(false);
  };
  let bookArray = [];
  const handleSearchBook = (searchBook) => {
    bookArray = searchData(searchBook);
    props.setSortingOrder(bookArray);
    props.setBooleanSort(true);
  };
  const handleRawBottomSheet = (value) => {
    if (value === 'account') {
      setBooleanRbSheet(true);
      refRBSheet.current.open();
    } else {
      setBooleanRbSheet(false);
      refRBSheet.current.open();
    }
    console.log('rbsheet', booleanRbSheet);
  };
  const handleSignOut = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userAccountDetails');
    await AsyncStorage.removeItem('email');
    navigation.navigate('login');
  };
  return (
    <View style={{paddingTop: 28, paddingLeft: 10, paddingRight: 5}}>
      <View
        style={{
          flexDirection: 'row',
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
            }}>
            <Input
              label="search your text"
              onChangeText={(text) => handleSearchBook(text)}
            />
          </View>
        )}
        <View style={{width: '12%', paddingLeft: 10}}>
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
          <TouchableOpacity onPress={() => handleRawBottomSheet('filter')}>
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
          <TouchableOpacity onPress={() => handleRawBottomSheet('account')}>
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
            {booleanRbSheet === false ? (
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
            ) : (
              <View>
                {checkLogin === false ? (
                  <View style={{flexDirection: 'row'}}>
                    <View style={{padding: 20}}>
                      <Avatar.Image
                        size={65}
                        source={require('../../assest/account.png')}
                        style={{backgroundColor: 'white'}}
                      />
                    </View>
                    <View
                      style={{padding: 20, justifyContent: 'space-between'}}>
                      <Text style={{fontSize: 20}}>
                        Name :{userDetails[0].value}
                      </Text>
                      <Text style={{fontSize: 20}}>
                        Email :{userDetails[3].value}
                      </Text>
                      <Text style={{fontSize: 20}}>
                        phoneNumber :{userDetails[1].value}
                      </Text>
                      <View style={{paddingTop: 10}}>
                        <Button
                          title="logout"
                          color="brown"
                          onPress={() => handleSignOut()}
                        />
                      </View>
                    </View>
                  </View>
                ) : (
                  <View>
                    <Text>hello</Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </RBSheet>
      </View>
    </View>
  );
};
export default HeaderOptions;
