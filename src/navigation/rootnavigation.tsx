import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login/Login';
import Registration from '../screens/registration/Registration';
import Rootdrawer from './rootdrawer';
import DetailsScreen from '../screens/ProductDetails/DetailScreen';


 const Rootnavigation = () => {
  const Stack = createStackNavigator();
  return (
       <NavigationContainer>       
        <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen name="Login" component={Login}options={{headerShown:false}} />
              <Stack.Screen name="Registration" component={Registration} />
              <Stack.Screen name="Root" component={Rootdrawer}options={{headerShown:false}}/> 
              <Stack.Screen name="DetailsScreen" component={DetailsScreen} />   
        </Stack.Navigator>
        </NavigationContainer> 
  );
};

export default Rootnavigation;


