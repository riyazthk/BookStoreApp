import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../dashBoard/homePage/HomePage';
import OrderPage from '../dashBoard/orderPage/OrderPage';
const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'homePage'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="homePage" component={HomePage} />
        <Stack.Screen name="orderPage" component={OrderPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
