import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../dashBoard/homePage/HomePage';
import OrderPage from '../dashBoard/orderPage/OrderPage';
import OrderSummary from '../dashBoard/orderSummary/OrderSummary';
import ConfirmationOrder from '../dashBoard/confirmationOrder/ConfirmationOrder';
import OrderHistory from '../dashBoard/orderHistory/OrderHistory';

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'homePage'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="homePage" component={HomePage} />
        <Stack.Screen name="orderPage" component={OrderPage} />
        <Stack.Screen name="orderSummary" component={OrderSummary} />
        <Stack.Screen name="confirmationOrder" component={ConfirmationOrder} />
        <Stack.Screen name="orderHistory" component={OrderHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
