export const COLORS = {
  background: '#121212',
  surface: '#1E1E1E',
  surfaceLight: '#282828',
  primary: '#1DB954',
  primaryDark: '#158a3e',
  text: '#FFFFFF',
  textSecondary: '#B3B3B3',
  textMuted: '#535353',
  border: '#333333',
};

export const recentlyPlayed = [
  { id: '1', title: 'Liked Songs', subtitle: 'Playlist', image: 'https://misc.scdn.co/liked-songs/liked-songs-640.png', type: 'playlist' },
  { id: '2', title: 'Daily Mix 1', subtitle: 'Spotify', image: 'https://i.scdn.co/image/ab67706f000000027eb7c48a347f28f3e50cdd6e', type: 'playlist' },
  { id: '3', title: 'Chill Vibes', subtitle: 'Playlist', image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6', type: 'playlist' },
  { id: '4', title: 'Top Hits 2024', subtitle: 'Playlist', image: 'https://i.scdn.co/image/ab67706f000000027eb7c48a347f28f3e50cdd6e', type: 'playlist' },
  { id: '5', title: 'RapCaviar', subtitle: 'Playlist', image: 'https://i.scdn.co/image/ab67706f00000002b5e23e038e6d58a48b420d2c', type: 'playlist' },
  { id: '6', title: 'Bollywood Hits', subtitle: 'Playlist', image: 'https://i.scdn.co/image/ab67706f000000027b87cfe3ead1ebda63e70bf5', type: 'playlist' },
];

export const featuredPlaylists = [
  { id: 'f1', title: "Today's Top Hits", description: 'Jung Kook is on top of the Hottest 50!', image: 'https://i.scdn.co/image/ab67706f000000027eb7c48a347f28f3e50cdd6e', type: 'playlist' },
  { id: 'f2', title: 'RapCaviar', description: 'New music from Drake, 21 Savage, and more', image: 'https://i.scdn.co/image/ab67706f00000002b5e23e038e6d58a48b420d2c', type: 'playlist' },
  { id: 'f3', title: 'Mood Booster', description: 'Have a great day with these mood-boosting songs!', image: 'https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95', type: 'playlist' },
  { id: 'f4', title: 'Peaceful Piano', description: 'Relax and indulge with beautiful piano pieces', image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6', type: 'playlist' },
];

export const madeForYou = [
  { id: 'm1', title: 'Daily Mix 1', description: 'The Weeknd, Post Malone, and more', image: 'https://i.scdn.co/image/ab67706f000000027eb7c48a347f28f3e50cdd6e', type: 'mix' },
  { id: 'm2', title: 'Daily Mix 2', description: 'Drake, Travis Scott, and more', image: 'https://i.scdn.co/image/ab67706f00000002b5e23e038e6d58a48b420d2c', type: 'mix' },
  { id: 'm3', title: 'Daily Mix 3', description: 'Taylor Swift, Olivia Rodrigo, and more', image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6', type: 'mix' },
  { id: 'm4', title: 'Release Radar', description: 'Catch all the latest music from artists you follow', image: 'https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95', type: 'mix' },
];

export const topArtists = [
  { id: 'a1', name: 'The Weeknd', image: 'https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb', followers: '85.2M', type: 'artist' },
  { id: 'a2', name: 'Drake', image: 'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9', followers: '75.1M', type: 'artist' },
  { id: 'a3', name: 'Taylor Swift', image: 'https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3132a15fbb0', followers: '100.5M', type: 'artist' },
  { id: 'a4', name: 'Bad Bunny', image: 'https://i.scdn.co/image/ab6761610000e5eb3e3d5ffd7392a24bac09f4c6', followers: '65.8M', type: 'artist' },
];

export const tracks = [
  { id: 't1', title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: 200, image: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 't2', title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', album: 'F*CK LOVE 3', duration: 141, image: 'https://i.scdn.co/image/ab67616d0000b273ea2ce2e8855b786f0fffe4f9', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 't3', title: 'As It Was', artist: 'Harry Styles', album: "Harry's House", duration: 167, image: 'https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: 't4', title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', duration: 238, image: 'https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { id: 't5', title: 'Anti-Hero', artist: 'Taylor Swift', album: 'Midnights', duration: 200, image: 'https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { id: 't6', title: 'Flowers', artist: 'Miley Cyrus', album: 'Endless Summer Vacation', duration: 200, image: 'https://i.scdn.co/image/ab67616d0000b2736bd8dbda42fe66a31f6f5d47', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
];

export const searchCategories = [
  { id: 'c1', name: 'Podcasts', color: '#006450', image: 'https://i.scdn.co/image/ab6765630000ba8a49e67f62a58798d8c3e9e1dd' },
  { id: 'c2', name: 'Live Events', color: '#8C0131', image: 'https://i.scdn.co/image/ab6765630000ba8a684e4b1e23ce1bd2f28da62a' },
  { id: 'c3', name: 'Made For You', color: '#503750', image: 'https://i.scdn.co/image/ab6765630000ba8ae10e3404e0d4c4b38b5e3f60' },
  { id: 'c4', name: 'New Releases', color: '#477D95', image: 'https://i.scdn.co/image/ab6765630000ba8a5cff9d82a9cfb685a6f7d47e' },
  { id: 'c5', name: 'Hip-Hop', color: '#B02897', image: 'https://i.scdn.co/image/ab6765630000ba8a5b9a9a2a4b8f8e4af75de44a' },
  { id: 'c6', name: 'Pop', color: '#E61E32', image: 'https://i.scdn.co/image/ab6765630000ba8a55028f2d78b4adcc0b3f1a60' },
  { id: 'c7', name: 'R&B', color: '#477D95', image: 'https://i.scdn.co/image/ab6765630000ba8a4b3fcdd16b06b3d7e1e3b2d7' },
  { id: 'c8', name: 'Indie', color: '#608108', image: 'https://i.scdn.co/image/ab6765630000ba8a0a40c0a2c6bdc06e22484e71' },
  { id: 'c9', name: 'Workout', color: '#E8115B', image: 'https://i.scdn.co/image/ab6765630000ba8a3e1b4fb5668c34f6de81ee63' },
  { id: 'c10', name: 'Chill', color: '#1E3264', image: 'https://i.scdn.co/image/ab6765630000ba8a7e2d00e3f5d1a07b6dfad83a' },
  { id: 'c11', name: 'K-Pop', color: '#8D67AB', image: 'https://i.scdn.co/image/ab6765630000ba8a0e9c4b5cbef4b83c46aea854' },
  { id: 'c12', name: 'Latin', color: '#E8115B', image: 'https://i.scdn.co/image/ab6765630000ba8a7ef4609f8e5b8a39a4b34e77' },
];

export const libraryItems = [
  { id: 'l1', title: 'Liked Songs', subtitle: '234 songs', image: 'https://misc.scdn.co/liked-songs/liked-songs-640.png', type: 'playlist', pinned: true },
  { id: 'l2', title: 'Your Episodes', subtitle: '0 episodes', image: 'https://misc.scdn.co/your-episodes/your-episodes-640.png', type: 'podcast', pinned: true },
  { id: 'l3', title: 'Chill Vibes', subtitle: 'Playlist • Made by you', image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6', type: 'playlist', pinned: false },
  { id: 'l4', title: 'The Weeknd', subtitle: 'Artist', image: 'https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb', type: 'artist', pinned: false },
  { id: 'l5', title: 'After Hours', subtitle: 'Album • The Weeknd', image: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36', type: 'album', pinned: false },
  { id: 'l6', title: 'Hip-Hop Hits', subtitle: 'Playlist • Spotify', image: 'https://i.scdn.co/image/ab67706f00000002b5e23e038e6d58a48b420d2c', type: 'playlist', pinned: false },
];

export const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};
