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
  let arr = [];
  let books = [];
  books = bookDetails;
  arr = books.sort(function (a, b) {
    return b.price - a.price;
  });
  return arr;
};
