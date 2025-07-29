# 🐼 L8r - Your Chill Productivity Companion

A Gen Z aesthetic todo app built with React Native & Expo, featuring soft vibes, pastel colors, and gentle productivity nudges.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Expo CLI: `npm install -g @expo/cli`
- iOS Simulator (Mac) or Android Studio
- VS Code (recommended)

### Installation

1. **Create new Expo project:**

   ```bash
   npx create-expo-app L8r --template tabs@53
   cd L8r
   ```

2. **Copy all the source files** from this artifact into your project directory, maintaining the folder structure.

3. **Install dependencies:**

   ```bash
   npm install @expo/vector-icons@^14.1.0 @react-native-async-storage/async-storage@^2.2.0 expo-linear-gradient@~14.1.5 expo-haptics@~14.1.4
   ```

4. **Start development server:**

   ```bash
   npx expo start
   ```

5. **Run on device:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## 📱 Features

### ✨ Core Features

- Add, edit, delete tasks
- Mark tasks as complete with satisfying animations
- Local storage persistence
- Progress tracking with beautiful visuals

### 🎭 Vibe System

- **Chill Mode** 🌊 - Relaxed, steady progress
- **Focus Mode** 🎯 - Concentrated, goal-oriented
- **L8r Mode** 🐼 - No pressure, when you're ready

### 🎨 Aesthetic Features

- Soft pastel color palette
- Gentle micro-animations
- Haptic feedback
- Motivational quotes
- Panda companion with random messages
- Progress visualization
- Achievement system

## 🛠️ Development

### Project Structure

```
L8r/
├── app/
│   ├── _layout.tsx          # Root layout with providers
│   └── (tabs)/
│       ├── _layout.tsx      # Tab navigation
│       ├── index.tsx        # Tasks screen
│       ├── vibes.tsx        # Settings & vibe selector
│       └── stats.tsx        # Progress & achievements
├── components/
│   ├── Header.tsx           # App header with progress
│   ├── TaskInput.tsx        # Add new tasks
│   ├── TaskItem.tsx         # Individual task component
│   ├── EmptyState.tsx       # Empty state illustration
│   ├── VibeSelector.tsx     # Mood selection
│   ├── LazyQuotes.tsx       # Motivational quotes
│   ├── ProgressRing.tsx     # Circular progress
│   └── PandaAvatar.tsx      # Interactive panda companion
├── hooks/
│   ├── useTheme.tsx         # Theme & dark mode
│   ├── useTasks.tsx         # Task management
│   └── useVibes.tsx         # Vibe/mood system
├── assets/styles/
│   ├── theme.ts             # Design tokens
│   ├── home.styles.ts       # Home screen styles
│   ├── vibes.styles.ts      # Vibes screen styles
│   └── stats.styles.ts      # Stats screen styles
└── utils/
    ├── storage.ts           # AsyncStorage wrapper
    ├── animations.ts        # Animation helpers
    └── constants.ts         # App constants
```

### Customization

**Colors & Theming:**
Edit `hooks/useTheme.tsx` and `assets/styles/theme.ts`

**Vibe Modes:**
Modify `hooks/useVibes.tsx` to add new moods

**Motivational Messages:**
Update quotes in `components/LazyQuotes.tsx`

### Building for Production

```bash
# Install EAS CLI
npm install -g @expo/cli

# Build for iOS
npx expo build:ios

# Build for Android
npx expo build:android

# Or use EAS Build (recommended)
npx eas build --platform all
```

## 🎯 Gen Z Design Philosophy

### Color Psychology

- **Soft Blue** (#a8d5f0) - Calm, trustworthy
- **Lavender** (#c8b5f0) - Creative, peaceful
- **Mint Green** (#b5f0c8) - Fresh, growth
- **Pastel Pink** (#f0b5d2) - Gentle, friendly
- **Beige/Off-white** (#faf9f7) - Warm, comfortable

### Interaction Design

- Gentle haptic feedback on all interactions
- Smooth micro-animations (200-300ms)
- Rounded corners and soft shadows
- Progressive disclosure of information
- Forgiving UX with easy undo actions

### Content Tone

- Casual, friendly language
- Encouraging without being pushy
- Relatable humor and emoji usage
- Progress celebration over perfection
- Gentle accountability

## 🐛 Troubleshooting

**Expo Go Issues:**

- Clear Expo Go cache
- Restart Metro bundler: `npx expo start --clear`

**Build Errors:**

- Check Node.js version (18+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall

**Performance:**

- Use Flipper for debugging
- Monitor memory usage in large task lists
- Consider virtualization for 100+ tasks

## 🚀 Next Steps

### v1.1 Features

- [ ] Push notifications
- [ ] Task categories/tags
- [ ] Weekly/monthly views
- [ ] Data export
- [ ] Sharing functionality

### v1.2 Features

- [ ] Collaborative tasks
- [ ] Habit tracking
- [ ] Custom themes
- [ ] Widget support
- [ ] Analytics dashboard

## 💫 Contributing

This is a personal productivity app, but feel free to:

- Report bugs via GitHub issues
- Suggest new vibe modes
- Share design improvements
- Contribute motivational quotes

## 📄 License

MIT License - Build your own chill productivity app!

---

_Built with 💜 for the generation that gets things done... eventually_ 🐼✨
