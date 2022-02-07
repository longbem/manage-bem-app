import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {nameRoute} from '@src/constants/nameRoute';

import {CowScreen} from '@src/screens/cows';

const Stack = createNativeStackNavigator();

export const CowStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={nameRoute.chickenScreen}
        component={CowScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
