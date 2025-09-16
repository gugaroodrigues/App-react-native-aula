import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import CreateUser from '../screens/User/createUser';
import appHome from '../screens/Home/appHome'

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="createUser" component={CreateUser} />
    <Stack.Screen name="appHome" component={appHome} />

  </Stack.Navigator>
);

export default AuthStack;
