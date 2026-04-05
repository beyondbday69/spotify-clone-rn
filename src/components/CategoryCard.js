import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

const CategoryCard = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: category.color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.name}>{category.name}</Text>
      <Image source={{ uri: category.image }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: 100,
    borderRadius: 8,
    margin: 6,
    overflow: 'hidden',
    padding: 12,
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    zIndex: 1,
    flex: 1,
    flexWrap: 'wrap',
  },
  image: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    width: 70,
    height: 70,
    borderRadius: 4,
    transform: [{ rotate: '25deg' }],
  },
});

export default CategoryCard;
