import {View, StatusBar} from 'react-native';
import React, {Component} from 'react';
class StatusBarView extends Component {
  render() {
    return (
      <View>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="brown"
          translucent={true}
        />
      </View>
    );
  }
}
export default StatusBarView;
