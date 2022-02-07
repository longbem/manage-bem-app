import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {nameRoute} from '@src/constants/nameRoute';

import {ChickenStack} from './chickenStack';
import {PigStack} from './pigStack';
import {CowStack} from './cowStack';

const Tabs = createBottomTabNavigator();

export const TabBottom = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name={nameRoute.chickenTab}
        component={ChickenStack}
        options={{headerShown: false}}
      />
      {/* <Tabs.Screen
        name={nameRoute.pigTab}
        component={PigStack}
        options={{headerShown: false, title: 'Bảng tính'}}
      /> */}
      {/* <Tabs.Screen
        name={nameRoute.cowTab}
        component={CowStack}
        options={{headerShown: false}}
      /> */}
    </Tabs.Navigator>
  );
};
