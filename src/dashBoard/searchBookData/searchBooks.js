import {bookDetails} from '../showBooks/bookDetails';
export const searchData = (value) => {
  var books = [];
  var searchBook = null;
  bookDetails.map((item, index) => {
    books.push(bookDetails[index]);
    searchBook = books.filter((item) => {
      return item.title.includes(value);
    });
  });
  return searchBook;
};
