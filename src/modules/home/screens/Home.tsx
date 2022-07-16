// import { AppIcon } from '@src/components';
// import icons from '@src/theme/icons';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import wallpaper from '@assets/images/wallpaper.jpg';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { AppPost } from '@src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const Home: React.FC = () => (
  <View style={styles.container}>
    {/* <Text>Home</Text> */}
    {/* <AppIcon name={icons.book} /> */}
    {/* <Entype name="home" size={24} /> */}
    {/* <TouchableOpacity
      style={styles.searchButton}
      onPress={() => console.warn('Search button clicked')}>
      <Fontisto name="search" size={25} color={'#f15454'} />
      <Text style={styles.searchButtonText}>Where are you going?</Text>
    </TouchableOpacity>
    <ImageBackground source={wallpaper} style={styles.image}>
      <Text style={styles.title}>Go Near</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.warn('Elplore button clicked')}>
        <Text style={styles.buttonText}>Explore nearby stays</Text>
      </TouchableOpacity>
    </ImageBackground> */}
    <AppPost />
  </View>
);

export default Home;
