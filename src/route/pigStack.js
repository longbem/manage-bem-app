import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {nameRoute} from '@src/constants/nameRoute';

import {PigsScreen} from '@src/screens/pigs';

const Stack = createNativeStackNavigator();

export const PigStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={nameRoute.chickenScreen}
        component={PigsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
