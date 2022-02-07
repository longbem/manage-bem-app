import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {nameRoute} from '@src/constants/nameRoute';

import {TabBottom} from './tabsBottom';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={nameRoute.bottomTab}
        component={TabBottom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
