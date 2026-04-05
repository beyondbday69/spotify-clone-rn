import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  PanResponder,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { COLORS, formatDuration } from '../data/mockData';
import { usePlayer } from '../context/PlayerContext';

const { width, height } = Dimensions.get('window');

const ProgressBar = ({ currentTime, duration, onSeek }) => {
  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <View style={progressStyles.container}>
      <View style={progressStyles.track}>
        <View style={[progressStyles.fill, { width: `${Math.min(progress * 100, 100)}%` }]} />
        <View
          style={[
            progressStyles.thumb,
            { left: `${Math.min(progress * 100, 100)}%` },
          ]}
        />
      </View>
      <View style={progressStyles.times}>
        <Text style={progressStyles.time}>{formatDuration(Math.floor(currentTime))}</Text>
        <Text style={progressStyles.time}>{formatDuration(Math.floor(duration))}</Text>
      </View>
    </View>
  );
};

const progressStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  track: {
    height: 4,
    backgroundColor: COLORS.border,
    borderRadius: 2,
    position: 'relative',
  },
  fill: {
    height: '100%',
    backgroundColor: COLORS.text,
    borderRadius: 2,
  },
  thumb: {
    position: 'absolute',
    top: -5,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.text,
    marginLeft: -7,
  },
  times: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  time: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
});

export default function PlayerScreen({ onClose }) {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    shuffle,
    repeat,
    togglePlay,
    handleNext,
    handlePrev,
    toggleShuffle,
    toggleRepeat,
    seekTo,
  } = usePlayer();

  const [liked, setLiked] = useState(false);

  if (!currentTrack) return null;

  const repeatIcon = () => {
    if (repeat === 'one') return 'repeat-once';
    return 'repeat';
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#1a4a2e', '#121212', '#121212']}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />

      <SafeAreaView style={styles.safeArea}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={onClose} style={styles.chevronBtn}>
            <Ionicons name="chevron-down" size={28} color={COLORS.text} />
          </TouchableOpacity>
          <View style={styles.topCenter}>
            <Text style={styles.playingFrom}>PLAYING FROM PLAYLIST</Text>
            <Text style={styles.contextName} numberOfLines={1}>
              Today's Top Hits
            </Text>
          </View>
          <TouchableOpacity style={styles.chevronBtn}>
            <Ionicons name="ellipsis-horizontal" size={22} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        {/* Album Art */}
        <View style={styles.artContainer}>
          <Image
            source={{ uri: currentTrack.image }}
            style={styles.albumArt}
            defaultSource={require('../../assets/icon.png')}
          />
        </View>

        {/* Track Info + Like */}
        <View style={styles.trackInfo}>
          <View style={styles.trackText}>
            <Text style={styles.trackTitle} numberOfLines={1}>
              {currentTrack.title}
            </Text>
            <Text style={styles.trackArtist} numberOfLines={1}>
              {currentTrack.artist}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.likeBtn}>
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={26}
              color={liked ? COLORS.primary : COLORS.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* Progress */}
        <ProgressBar
          currentTime={currentTime}
          duration={duration || currentTrack.duration}
          onSeek={seekTo}
        />

        {/* Controls */}
        <View style={styles.controls}>
          <TouchableOpacity onPress={toggleShuffle}>
            <Ionicons
              name="shuffle"
              size={26}
              color={shuffle ? COLORS.primary : COLORS.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePrev} style={styles.controlBtn}>
            <Ionicons name="play-skip-back" size={32} color={COLORS.text} />
          </TouchableOpacity>

          <TouchableOpacity onPress={togglePlay} style={styles.playBtn}>
            <Ionicons
              name={isPlaying ? 'pause' : 'play'}
              size={34}
              color="#000"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNext} style={styles.controlBtn}>
            <Ionicons name="play-skip-forward" size={32} color={COLORS.text} />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleRepeat}>
            <Ionicons
              name={repeatIcon()}
              size={26}
              color={repeat !== 'none' ? COLORS.primary : COLORS.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* Volume */}
        <View style={styles.volumeRow}>
          <Ionicons name="volume-low" size={18} color={COLORS.textSecondary} />
          <View style={styles.volumeTrack}>
            <View style={styles.volumeFill} />
            <View style={styles.volumeThumb} />
          </View>
          <Ionicons name="volume-high" size={18} color={COLORS.textSecondary} />
        </View>

        {/* Bottom Actions */}
        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.bottomBtn}>
            <Ionicons name="share-outline" size={22} color={COLORS.textSecondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBtn}>
            <Ionicons name="list" size={22} color={COLORS.textSecondary} />
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  chevronBtn: {
    padding: 8,
    width: 44,
    alignItems: 'center',
  },
  topCenter: {
    flex: 1,
    alignItems: 'center',
  },
  playingFrom: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textSecondary,
    letterSpacing: 1,
  },
  contextName: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 2,
  },
  artContainer: {
    width: width - 48,
    height: width - 48,
    marginVertical: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 20,
  },
  albumArt: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.surfaceLight,
  },
  trackInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  trackText: {
    flex: 1,
    marginRight: 16,
  },
  trackTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },
  trackArtist: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  likeBtn: {
    padding: 4,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
  },
  controlBtn: {
    padding: 4,
  },
  playBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.text,
    justifyContent: 'center',
    alignItems: 'center',
  },
  volumeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    gap: 10,
    marginBottom: 24,
  },
  volumeTrack: {
    flex: 1,
    height: 4,
    backgroundColor: COLORS.border,
    borderRadius: 2,
    position: 'relative',
  },
  volumeFill: {
    width: '60%',
    height: '100%',
    backgroundColor: COLORS.text,
    borderRadius: 2,
  },
  volumeThumb: {
    position: 'absolute',
    top: -5,
    left: '60%',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.text,
    marginLeft: -7,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
  },
  bottomBtn: {
    padding: 8,
  },
});
