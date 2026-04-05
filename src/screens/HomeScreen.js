import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  COLORS,
  recentlyPlayed,
  featuredPlaylists,
  madeForYou,
  topArtists,
  tracks,
} from '../data/mockData';
import RecentlyPlayedCard from '../components/RecentlyPlayedCard';
import PlaylistCard from '../components/PlaylistCard';
import ArtistCard from '../components/ArtistCard';
import TrackListItem from '../components/TrackListItem';
import { usePlayer } from '../context/PlayerContext';

const GREETING_OPTIONS = ['Good morning', 'Good afternoon', 'Good evening'];
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return GREETING_OPTIONS[0];
  if (hour < 18) return GREETING_OPTIONS[1];
  return GREETING_OPTIONS[2];
};

const FILTERS = ['All', 'Music', 'Podcasts'];

export default function HomeScreen({ navigation }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const { playTrack, currentTrack } = usePlayer();

  const handleTrackPress = (track) => {
    playTrack(track, tracks);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#1a4a2e', COLORS.background]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.greeting}>{getGreeting()}</Text>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="notifications-outline" size={24} color={COLORS.text} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="time-outline" size={24} color={COLORS.text} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="settings-outline" size={24} color={COLORS.text} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Filter Pills */}
          <View style={styles.filters}>
            {FILTERS.map((f) => (
              <TouchableOpacity
                key={f}
                style={[
                  styles.filterPill,
                  activeFilter === f && styles.filterPillActive,
                ]}
                onPress={() => setActiveFilter(f)}
              >
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === f && styles.filterTextActive,
                  ]}
                >
                  {f}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Recently Played Grid */}
          <View style={styles.recentGrid}>
            {recentlyPlayed.slice(0, 6).map((item) => (
              <RecentlyPlayedCard
                key={item.id}
                item={item}
                onPress={() => {}}
              />
            ))}
          </View>

          {/* Featured */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Playlists</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
            >
              {featuredPlaylists.map((item) => (
                <PlaylistCard key={item.id} item={item} size={155} onPress={() => {}} />
              ))}
            </ScrollView>
          </View>

          {/* Made For You */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Made For You</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
            >
              {madeForYou.map((item) => (
                <PlaylistCard key={item.id} item={item} size={155} onPress={() => {}} />
              ))}
            </ScrollView>
          </View>

          {/* Top Artists */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular Artists</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
            >
              {topArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} onPress={() => {}} />
              ))}
            </ScrollView>
          </View>

          {/* Popular Tracks */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular Tracks</Text>
            {tracks.map((track) => (
              <TrackListItem
                key={track.id}
                track={track}
                onPress={() => handleTrackPress(track)}
                isActive={currentTrack?.id === track.id}
              />
            ))}
          </View>

          <View style={{ height: 100 }} />
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
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconBtn: {
    padding: 8,
  },
  filters: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  filterPill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: COLORS.surfaceLight,
  },
  filterPillActive: {
    backgroundColor: COLORS.primary,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
  },
  filterTextActive: {
    color: '#000',
  },
  recentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  horizontalList: {
    paddingHorizontal: 16,
    paddingRight: 20,
  },
});
