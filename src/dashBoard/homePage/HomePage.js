import {View, Text} from 'react-native';
import HeaderOptions from '../navBar/HeaderOptions';
import React, {useState} from 'react';
import ViewBooks from '../showBooks/ViewBooks';
import StatusBarView from '../statusBar/StatusBarView';
const HomePage = () => {
  const [sortingOrder, setSortingOrder] = useState([]);
  const [booleanSort, setBooleanSort] = useState(false);
  const [flag, setFlag] = useState(Math.random());
  console.log('sorted data', sortingOrder);
  return (
    <View>
      <View>
        <StatusBarView />
      </View>
      <View style={{height: '100%', backgroundColor: '#ffff'}}>
        <View style={{height: 80, backgroundColor: 'brown'}}>
          <HeaderOptions
            setSortingOrder={setSortingOrder}
            setBooleanSort={setBooleanSort}
          />
        </View>
        <View>
          <ViewBooks
            sortingOrder={sortingOrder}
            booleanSort={booleanSort}
            flag={flag}
          />
        </View>
      </View>
    </View>
  );
};
export default HomePage;
