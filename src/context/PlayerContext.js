import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Audio } from 'expo-av';
import { tracks } from '../data/mockData';

const PlayerContext = createContext();

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) throw new Error('usePlayer must be used within PlayerProvider');
  return context;
};

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [queue, setQueue] = useState(tracks);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState('none'); // none, one, all
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const soundRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });

    return () => {
      if (soundRef.current) soundRef.current.unloadAsync();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const loadAndPlay = async (track) => {
    try {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
      if (intervalRef.current) clearInterval(intervalRef.current);

      const { sound } = await Audio.Sound.createAsync(
        { uri: track.url },
        { shouldPlay: true }
      );
      soundRef.current = sound;
      setCurrentTrack(track);
      setIsPlaying(true);
      setIsPlayerVisible(true);
      setCurrentTime(0);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setCurrentTime(status.positionMillis / 1000);
          setDuration(status.durationMillis / 1000 || track.duration);
          if (status.didJustFinish) {
            handleNext();
          }
        }
      });
    } catch (e) {
      console.error('Error loading audio:', e);
      setCurrentTrack(track);
      setIsPlaying(false);
      setIsPlayerVisible(true);
      setDuration(track.duration);
    }
  };

  const playTrack = async (track, newQueue = null) => {
    if (newQueue) setQueue(newQueue);
    await loadAndPlay(track);
  };

  const togglePlay = async () => {
    if (!soundRef.current) return;
    if (isPlaying) {
      await soundRef.current.pauseAsync();
    } else {
      await soundRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = async () => {
    const idx = queue.findIndex((t) => t.id === currentTrack?.id);
    let nextIdx;
    if (shuffle) {
      nextIdx = Math.floor(Math.random() * queue.length);
    } else {
      nextIdx = (idx + 1) % queue.length;
    }
    if (repeat === 'one') {
      seekTo(0);
      if (soundRef.current) soundRef.current.playAsync();
      return;
    }
    await loadAndPlay(queue[nextIdx]);
  };

  const handlePrev = async () => {
    if (currentTime > 3) {
      seekTo(0);
      return;
    }
    const idx = queue.findIndex((t) => t.id === currentTrack?.id);
    const prevIdx = idx === 0 ? queue.length - 1 : idx - 1;
    await loadAndPlay(queue[prevIdx]);
  };

  const seekTo = async (secs) => {
    if (soundRef.current) {
      await soundRef.current.setPositionAsync(secs * 1000);
      setCurrentTime(secs);
    }
  };

  const toggleShuffle = () => setShuffle(!shuffle);
  const toggleRepeat = () => {
    const modes = ['none', 'all', 'one'];
    const current = modes.indexOf(repeat);
    setRepeat(modes[(current + 1) % modes.length]);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        queue,
        shuffle,
        repeat,
        isPlayerVisible,
        playTrack,
        togglePlay,
        handleNext,
        handlePrev,
        seekTo,
        toggleShuffle,
        toggleRepeat,
        setIsPlayerVisible,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
