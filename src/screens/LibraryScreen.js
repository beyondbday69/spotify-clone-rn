import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, libraryItems } from '../data/mockData';

const FILTER_CHIPS = ['Playlists', 'Albums', 'Artists', 'Podcasts'];

const typeIcon = (type) => {
  switch (type) {
    case 'playlist': return 'musical-notes';
    case 'album': return 'disc';
    case 'artist': return 'person';
    case 'podcast': return 'mic';
    default: return 'musical-notes';
  }
};

const LibraryItem = ({ item }) => (
  <TouchableOpacity style={styles.itemRow} activeOpacity={0.7}>
    {item.type === 'artist' ? (
      <Image source={{ uri: item.image }} style={styles.artistImage} defaultSource={require('../../assets/icon.png')} />
    ) : item.id === 'l1' ? (
      <View style={styles.likedSongsImage}>
        <Ionicons name="heart" size={24} color="#fff" />
      </View>
    ) : (
      <Image source={{ uri: item.image }} style={styles.image} defaultSource={require('../../assets/icon.png')} />
    )}
    <View style={styles.itemInfo}>
      <Text style={[styles.itemTitle, item.pinned && { color: COLORS.text }]} numberOfLines={1}>
        {item.title}
      </Text>
      <View style={styles.itemMeta}>
        {item.pinned && (
          <>
            <Ionicons name="pin" size={11} color={COLORS.primary} />
            <Text style={[styles.itemSubtitle, { color: COLORS.primary, marginLeft: 3 }]}>Pinned • </Text>
          </>
        )}
        <Text style={styles.itemSubtitle} numberOfLines={1}>{item.subtitle}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.moreBtn} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
      <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.textSecondary} />
    </TouchableOpacity>
  </TouchableOpacity>
);

export default function LibraryScreen() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // list or grid

  const filtered = activeFilter
    ? libraryItems.filter((i) => i.type === activeFilter.toLowerCase().slice(0, -1))
    : libraryItems;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.profileBtn}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>Y</Text>
            </View>
            <Text style={styles.title}>Your Library</Text>
          </TouchableOpacity>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="search" size={24} color={COLORS.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="add" size={28} color={COLORS.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Filter Chips */}
        <View style={styles.chipRow}>
          {FILTER_CHIPS.map((chip) => (
            <TouchableOpacity
              key={chip}
              style={[
                styles.chip,
                activeFilter === chip && styles.chipActive,
              ]}
              onPress={() => setActiveFilter(activeFilter === chip ? null : chip)}
            >
              <Text
                style={[styles.chipText, activeFilter === chip && styles.chipTextActive]}
              >
                {chip}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Sort Bar */}
        <View style={styles.sortBar}>
          <TouchableOpacity style={styles.sortBtn}>
            <Ionicons name="swap-vertical" size={16} color={COLORS.textSecondary} />
            <Text style={styles.sortText}>Recents</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}>
            <Ionicons
              name={viewMode === 'list' ? 'list' : 'grid'}
              size={22}
              color={COLORS.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* List */}
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <LibraryItem item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListFooterComponent={<View style={{ height: 120 }} />}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  profileBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#9B59B6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 4,
  },
  iconBtn: {
    padding: 6,
  },
  chipRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: COLORS.surfaceLight,
  },
  chipActive: {
    backgroundColor: '#E8F5E9',
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
  },
  chipTextActive: {
    color: '#000',
  },
  sortBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sortText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  listContent: {
    paddingTop: 4,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: COLORS.surfaceLight,
  },
  artistImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.surfaceLight,
  },
  likedSongsImage: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#4b367c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.text,
  },
  itemMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  itemSubtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  moreBtn: {
    padding: 4,
  },
});
