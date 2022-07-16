// import { AppIcon } from '@src/components';
// import icons from '@src/theme/icons';
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Data from '@assets/data/feed';

import {AppPost} from '@src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

const Search: React.FC = () => (
  <View style={styles.container}>
    <FlatList data={Data} renderItem={({item}) => <AppPost post={item} />} />
  </View>
);

export default Search;
