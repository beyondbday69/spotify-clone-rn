import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../data/mockData';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

const RecentlyPlayedCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        defaultSource={require('../../assets/icon.png')}
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <View style={styles.playBtn}>
        <Ionicons name="play" size={18} color="#000" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: 54,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
    overflow: 'hidden',
  },
  image: {
    width: 54,
    height: 54,
    backgroundColor: COLORS.border,
  },
  title: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.text,
    paddingHorizontal: 10,
    lineHeight: 16,
  },
  playBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default RecentlyPlayedCard;
