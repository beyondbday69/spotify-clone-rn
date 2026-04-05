import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../data/mockData';

const PlaylistCard = ({ item, size = 150, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { width: size }]} onPress={onPress} activeOpacity={0.8}>
      <Image
        source={{ uri: item.image }}
        style={[styles.image, { width: size, height: size }]}
        defaultSource={require('../../assets/icon.png')}
      />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      {item.description ? (
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 14,
  },
  image: {
    borderRadius: 4,
    backgroundColor: COLORS.surfaceLight,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 8,
  },
  description: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
    lineHeight: 16,
  },
});

export default PlaylistCard;
