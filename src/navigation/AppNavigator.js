import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';

const AppNavigator = () => {
  const userIsLogged = false; 

  return (
    <NavigationContainer>
      {userIsLogged ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
