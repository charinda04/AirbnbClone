import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Explore from './screens/Explore';
import SearchTabNavigator from './SearchTabNavigator';
// import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name={'SearchResults'}
        component={SearchTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
      <Stack.Screen
        name={'Welcome'}
        component={Explore}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
