import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {nameRoute} from '@src/constants/nameRoute';

import {ChickenScreen} from '@src/screens/chickens';

const Stack = createNativeStackNavigator();

export const ChickenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={nameRoute.chickenScreen}
        component={ChickenScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
