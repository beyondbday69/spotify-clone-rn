import 'react-native-gesture-handler';
import React from 'react';
import { PlayerProvider } from './src/context/PlayerContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <PlayerProvider>
      <AppNavigator />
    </PlayerProvider>
  );
}
