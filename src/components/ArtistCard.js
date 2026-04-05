import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../data/mockData';

const ArtistCard = ({ artist, size = 130, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { width: size }]} onPress={onPress} activeOpacity={0.8}>
      <Image
        source={{ uri: artist.image }}
        style={[styles.image, { width: size, height: size }]}
        defaultSource={require('../../assets/icon.png')}
      />
      <Text style={styles.name} numberOfLines={1}>
        {artist.name}
      </Text>
      <Text style={styles.type}>Artist</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 14,
    alignItems: 'center',
  },
  image: {
    borderRadius: 999,
    backgroundColor: COLORS.surfaceLight,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 8,
    textAlign: 'center',
  },
  type: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
    textAlign: 'center',
  },
});

export default ArtistCard;
