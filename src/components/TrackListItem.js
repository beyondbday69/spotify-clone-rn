import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, formatDuration } from '../data/mockData';

const TrackListItem = ({ track, onPress, isActive }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Image
        source={{ uri: track.image }}
        style={styles.image}
        defaultSource={require('../../assets/icon.png')}
      />
      <View style={styles.info}>
        <Text
          style={[styles.title, isActive && { color: COLORS.primary }]}
          numberOfLines={1}
        >
          {track.title}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {track.artist}
        </Text>
      </View>
      <Text style={styles.duration}>{formatDuration(track.duration)}</Text>
      <TouchableOpacity style={styles.moreBtn} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.textSecondary} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    backgroundColor: COLORS.surfaceLight,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.text,
  },
  artist: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  duration: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginRight: 8,
  },
  moreBtn: {
    padding: 4,
  },
});

export default TrackListItem;
