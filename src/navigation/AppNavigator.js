import React, { useState } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../data/mockData';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import MiniPlayer from '../components/MiniPlayer';
import PlayerScreen from '../screens/PlayerScreen';
import { usePlayer } from '../context/PlayerContext';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ onPlayerOpen }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Library') {
            iconName = focused ? 'library' : 'library-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        headerShown: false,
        tabBarBackground: () => (
          <View style={{ flex: 1, backgroundColor: COLORS.background, borderTopWidth: 0 }} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export default function AppNavigator() {
  const [playerVisible, setPlayerVisible] = useState(false);
  const { currentTrack } = usePlayer();

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <TabNavigator onPlayerOpen={() => setPlayerVisible(true)} />

        {/* Mini Player sits above tab bar */}
        {currentTrack && (
          <View style={styles.miniPlayerWrapper}>
            <MiniPlayer onPress={() => setPlayerVisible(true)} />
          </View>
        )}

        {/* Full Screen Player Modal */}
        <Modal
          visible={playerVisible}
          animationType="slide"
          presentationStyle="fullScreen"
          onRequestClose={() => setPlayerVisible(false)}
        >
          <PlayerScreen onClose={() => setPlayerVisible(false)} />
        </Modal>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  tabBar: {
    backgroundColor: COLORS.background,
    borderTopColor: 'transparent',
    borderTopWidth: 0,
    height: 60,
    paddingBottom: 8,
    paddingTop: 4,
    elevation: 0,
    shadowOpacity: 0,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
  },
  miniPlayerWrapper: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    paddingBottom: 0,
  },
});
