import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, searchCategories, tracks } from '../data/mockData';
import CategoryCard from '../components/CategoryCard';
import TrackListItem from '../components/TrackListItem';
import { usePlayer } from '../context/PlayerContext';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { playTrack, currentTrack } = usePlayer();

  const filteredTracks = query.length > 0
    ? tracks.filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.artist.toLowerCase().includes(query.toLowerCase()) ||
          t.album.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleTrackPress = (track) => {
    playTrack(track, filteredTracks.length > 0 ? filteredTracks : tracks);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Search</Text>
        </View>

        {/* Search Bar */}
        <View style={[styles.searchBar, isFocused && styles.searchBarFocused]}>
          <Ionicons name="search" size={20} color={isFocused ? COLORS.text : COLORS.textMuted} />
          <TextInput
            style={styles.input}
            placeholder="What do you want to listen to?"
            placeholderTextColor={COLORS.textMuted}
            value={query}
            onChangeText={setQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            returnKeyType="search"
            autoCorrect={false}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')}>
              <Ionicons name="close-circle" size={20} color={COLORS.textMuted} />
            </TouchableOpacity>
          )}
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {query.length === 0 ? (
            <>
              <Text style={styles.sectionTitle}>Browse all</Text>
              <View style={styles.categoriesGrid}>
                {searchCategories.map((cat) => (
                  <CategoryCard key={cat.id} category={cat} onPress={() => {}} />
                ))}
              </View>
            </>
          ) : (
            <>
              {filteredTracks.length > 0 ? (
                <>
                  <Text style={styles.sectionTitle}>Songs</Text>
                  {filteredTracks.map((track) => (
                    <TrackListItem
                      key={track.id}
                      track={track}
                      onPress={() => handleTrackPress(track)}
                      isActive={currentTrack?.id === track.id}
                    />
                  ))}
                </>
              ) : (
                <View style={styles.noResults}>
                  <Text style={styles.noResultsText}>No results found for</Text>
                  <Text style={styles.noResultsQuery}>"{query}"</Text>
                  <Text style={styles.noResultsHint}>
                    Please make sure your words are spelled correctly, or use fewer or different keywords.
                  </Text>
                </View>
              )}
            </>
          )}
          <View style={{ height: 120 }} />
        </ScrollView>
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
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.text,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
  },
  searchBarFocused: {
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    paddingHorizontal: 16,
    marginBottom: 12,
    marginTop: 8,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  noResults: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 32,
  },
  noResultsText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  noResultsQuery: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 4,
    textAlign: 'center',
  },
  noResultsHint: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 16,
    textAlign: 'center',
    lineHeight: 20,
  },
});
