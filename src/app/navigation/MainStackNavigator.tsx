import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/routers';

import MainTabNavigator from './MainTabNavigator';
import {DESTINATION_SEARCH, GUESTS, MAIN_TAB_NAVIGATOR} from './route.actions';
import DestinationSearch from '@src/modules/explore/screens/DestinationSearch/DestinationSearch';
import Guests from '@src/modules/explore/screens/Guests';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, 'MAIN_STACK_NAVIGATOR'>;
}

const MainStackNavigator: React.FC<Props> = (): JSX.Element => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      initialRouteName={MAIN_TAB_NAVIGATOR}
      // screenOptions={{headerShown: false}}
    >
      <MainStack.Screen
        name={MAIN_TAB_NAVIGATOR}
        component={MainTabNavigator}
      />
      <MainStack.Screen
        name={DESTINATION_SEARCH}
        component={DestinationSearch}
        options={{
          title: 'Search your destination',
        }}
      />

      <MainStack.Screen
        name={GUESTS}
        component={Guests}
        options={{
          title: 'How many people?',
        }}
      />

      {/* <MainStack.Screen
        name={'Post'}
        component={PostScreen}
        options={{
          title: 'Accommodation',
        }}
      /> */}
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
