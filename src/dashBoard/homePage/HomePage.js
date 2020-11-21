import {View, Text} from 'react-native';
import HeaderOptions from '../navBar/HeaderOptions';
import React from 'react';
import ViewBooks from '../showBooks/ViewBooks';
import StatusBarView from '../statusBar/StatusBarView';
const HomePage = () => {
  return (
    <View>
      <View>
        <StatusBarView />
      </View>
      <View style={{height: '100%', backgroundColor: '#ffff'}}>
        <View style={{height: 80, backgroundColor: 'brown'}}>
          <HeaderOptions />
        </View>
        <View>
          <ViewBooks />
        </View>
      </View>
    </View>
  );
};
export default HomePage;
