import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Search from './screens/Search';
// import SearchResultsMap from '../screens/SearchResultsMap';
// import {useRoute} from '@react-navigation/native';
// import {API, graphqlOperation} from 'aws-amplify';
// import {listPosts} from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();

const SearchTabNavigator = () => {
  //   const [posts, setPosts] = useState([]);

  //   const route = useRoute();
  //   const {guests, viewport} = route.params;

  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       try {
  //         const postsResult = await API.graphql(
  //           graphqlOperation(listPosts, {
  //             filter: {
  //               and: {
  //                 maxGuests: {
  //                   ge: guests,
  //                 },
  //                 latitude: {
  //                   between: [viewport.southwest.lat, viewport.northeast.lat],
  //                 },
  //                 longitude: {
  //                   between: [viewport.southwest.lng, viewport.northeast.lng],
  //                 },
  //               },
  //             },
  //           }),
  //         );

  //         setPosts(postsResult.data.listPosts.items);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };

  //     fetchPosts();
  //   }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'}>{() => <Search />}</Tab.Screen>
      <Tab.Screen name={'map'}>{() => <Search />}</Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
