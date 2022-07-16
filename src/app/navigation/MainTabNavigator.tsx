import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Cards from '@src/modules/airbnb/screens/Cards';
import Profile from '@src/modules/profile/screens/Profile';
import Search from '@src/modules/explore/screens/Search';

import {CARDS, HOME, PROFILE} from './route.actions';
import DestinationSearchScreen from '@src/modules/explore/screens/DestinationSearch/DestinationSearch';
import Guests from '@src/modules/explore/screens/Guests';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from '@src/modules/explore/ExploreNavigator';
import Explore from '@src/modules/explore/screens/Explore';

const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarAllowFontScaling: false,
  // tabBarLabelStyle: styles.labelStyles,
  tabBarActiveTintColor: '#f15454',
  // tabBarStyle: styles.generalStyles,
  tabBarLabelPosition: 'below-icon',
};

const MainTabNavigator: React.FC = () => {
  const TabStack = createBottomTabNavigator();

  return (
    <TabStack.Navigator screenOptions={tabBarOptions}>
      <TabStack.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <TabStack.Screen
        name={'Saved'}
        component={Explore}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <TabStack.Screen
        name={'Airbnb'}
        component={Explore}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <TabStack.Screen
        name={'Messages'}
        component={Explore}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <TabStack.Screen
        name={'profile'}
        component={Explore}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
      {/* <TabStack.Screen name={HOME} component={Guests} />
      <TabStack.Screen name={CARDS} component={Cards} />
      <TabStack.Screen name={PROFILE} component={Profile} /> */}
    </TabStack.Navigator>
  );
};

export default MainTabNavigator;
