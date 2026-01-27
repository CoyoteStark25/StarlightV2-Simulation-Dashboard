# Starlight v2 Simulation Dashboard

Phase 1 UI for testing the Starlight v2 device—a hardware device that detects the word "Help!" in noisy environments. The dashboard lets you select accent audio and noise environments (UI only; no playback logic yet).

## Tech Stack

- React 18 (Vite)
- Tailwind CSS
- Lucide React

## Setup

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

- **Accent section**: Select accent, volume slider, Mute, "Preview 'Help!'" button.
- **Noise section**: 8 environment tiles, volume slider, OFF/ON toggle.
- **Control panel**: Accent/Noise volume + Mute, Play/Stop, "Run Test" button.

Milk white / orange theme, responsive layout (2-column desktop, stacked mobile), touch-friendly controls (min 44×44px).
