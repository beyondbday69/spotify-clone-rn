# 🎵 Spotify Clone - React Native

A full Spotify UI clone built with Expo & React Native.

---

## 🚀 GitHub se APK Build Karna (Step by Step)

### Step 1 — Expo Account Banao
1. https://expo.dev pe jao aur free account banao
2. Login karo

### Step 2 — EXPO_TOKEN Generate Karo
1. https://expo.dev/accounts/[username]/settings/access-tokens pe jao
2. **"Create Token"** click karo
3. Token copy karo (ek hi baar dikhega!)

### Step 3 — GitHub Secret Add Karo
1. GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. **"New repository secret"** click karo
3. Name: `EXPO_TOKEN`
4. Value: upar wala copied token paste karo
5. Save karo ✅

### Step 4 — EAS Project ID Setup Karo
```bash
# Apne machine pe ye commands chalao (ek baar)
npm install -g eas-cli
eas login
cd spotify-rn
eas init
```
Ye `app.json` mein `projectId` automatically fill kar dega.

### Step 5 — Push Karo, APK Ban Jayega!
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/[username]/[repo].git
git push -u origin main
```

GitHub Actions automatically trigger hoga → EAS APK build karega → Download link milega!

---

## 📥 APK Download Karna
1. https://expo.dev/accounts/[username]/projects/spotify-clone-rn/builds pe jao
2. Build complete hone ke baad **Download** button dikhe ga
3. Phone pe install karo!

---

## ⚡ Manual Build (bina push ke)
GitHub pe **Actions** tab → **"Build Android APK"** → **"Run workflow"** → **"Run workflow"** click karo

---

## 🗂 Project Structure
```
spotify-rn/
├── App.js
├── app.json
├── eas.json
├── .github/
│   └── workflows/
│       └── build-apk.yml    ← GitHub Actions
└── src/
    ├── navigation/
    ├── screens/
    │   ├── HomeScreen.js
    │   ├── SearchScreen.js
    │   ├── LibraryScreen.js
    │   └── PlayerScreen.js
    ├── components/
    │   ├── MiniPlayer.js
    │   ├── TrackListItem.js
    │   ├── PlaylistCard.js
    │   ├── ArtistCard.js
    │   ├── CategoryCard.js
    │   └── RecentlyPlayedCard.js
    ├── context/
    │   └── PlayerContext.js
    └── data/
        └── mockData.js
```

---

## 🛠 Local Development
```bash
npm install
npx expo start
```

## 📱 Screens
- **Home** — Recently played, Featured playlists, Made for you, Artists, Tracks
- **Search** — Category grid, Live search
- **Library** — Your playlists, albums, artists
- **Player** — Full screen player with controls, progress, shuffle, repeat
