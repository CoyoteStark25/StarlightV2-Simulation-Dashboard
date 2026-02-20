export const ACCENTS = [
  'Received Pronunciation (RP)',
  'Cockney',
  'Geordie',
  'Scottish',
  'Welsh',
  'Northern Irish',
];

/** Slug for accent audio file path (e.g. "received-pronunciation-rp"). */
export function getAccentSlug(accentName) {
  return accentName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()']/g, '')
    .replace(/&/g, 'and');
}

/** Optional map: accent display name → audio filename (no path). Overrides slug when set. */
export const ACCENT_AUDIO_FILES = {
  'Received Pronunciation (RP)': 'ReceivedPronunciation.mp3',
  'Northern Irish': 'NorthernIrish.mp3',
};

export const NOISE_ENVIRONMENTS = [
  { id: 'traffic', label: 'Traffic & Roadside', icon: 'Car' },
  { id: 'market', label: 'Market & Street', icon: 'Store' },
  { id: 'construction', label: 'Construction Site', icon: 'HardHat' },
  { id: 'crowded', label: 'Crowded Event', icon: 'Users' },
  { id: 'transport', label: 'Transport Hub', icon: 'Bus' },
  { id: 'stormy', label: 'Stormy Weather', icon: 'CloudRain' },
  { id: 'emergency', label: 'Emergency Scene', icon: 'Ambulance' },
  { id: 'urban', label: 'Urban City Ambience', icon: 'Building2' },
];
