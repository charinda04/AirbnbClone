import React from 'react';
import {Text, Image, Pressable} from 'react-native';
// import styles from './styles.js';
// import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

const days = 7;

const AppPost = () => {
  const post = {
    id: '0',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
    type: 'Private Room',
    title: 'Bright room in the heart of the city',
    bed: 2,
    bedroom: 3,
    oldPrice: 25,
    newPrice: 20,
    totalPrice: 120,
    coordinate: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  };

  //   const navigation = useNavigation();

  const goToPostPage = () => {
    // navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />

      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.newPrice} </Text>/ night
      </Text>

      {/*  Total price */}
      <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
    </Pressable>
  );
};

export default AppPost;
