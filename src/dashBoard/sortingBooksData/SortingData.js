import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {bookDetails} from '../showBooks/bookDetails';

export const ascendingOrder = () => {
  let arr = [];
  let books = [];
  books = bookDetails;
  arr = books.sort(function (a, b) {
    return a.price - b.price;
  });
  return arr;
};

export const descendingOrder = () => {
  console.log('entry');
  let arr = [];
  let books = [];
  books = bookDetails;
  arr = books.sort(function (a, b) {
    return b.price - a.price;
  });
  console.log(arr);
  return arr;
};
