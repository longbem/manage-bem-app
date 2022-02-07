import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './mainStack';

export const RootRoute = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
