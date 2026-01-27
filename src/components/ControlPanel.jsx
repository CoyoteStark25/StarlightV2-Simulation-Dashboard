import { useState } from 'react';
import { Volume2, Play, Square } from 'lucide-react';

export default function ControlPanel() {
  const [accentVolume, setAccentVolume] = useState(70);
  const [accentMute, setAccentMute] = useState(false);
  const [noiseVolume, setNoiseVolume] = useState(70);
  const [noiseMute, setNoiseMute] = useState(false);

  return (
    <section
      className="rounded-xl bg-milk-warm border border-stone-200 p-6 shadow-sm"
      aria-label="Playback and volume controls"
    >
      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        <div className="flex-1 space-y-3">
          <h3 className="text-sm font-semibold text-stone-700">Accent Control</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Volume2
              className="w-5 h-5 text-stone-500 shrink-0"
              aria-hidden
            />
            <input
              type="range"
              min="0"
              max="100"
              value={accentMute ? 0 : accentVolume}
              onChange={(e) => setAccentVolume(Number(e.target.value))}
              disabled={accentMute}
              aria-label="Accent volume"
              className="flex-1 min-w-[80px] h-2 rounded-lg appearance-none bg-stone-200 cursor-pointer disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => setAccentMute(!accentMute)}
              aria-pressed={accentMute}
              aria-label={accentMute ? 'Unmute accent' : 'Mute accent'}
              className="min-h-touch min-w-touch inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 focus:ring-2 focus:ring-starlight-orange focus:ring-offset-2"
            >
              Mute
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Play"
              className="min-h-touch min-w-touch inline-flex items-center justify-center rounded-full bg-starlight-green text-white hover:opacity-90 focus:ring-2 focus:ring-starlight-green focus:ring-offset-2"
            >
              <Play className="w-6 h-6" fill="currentColor" />
            </button>
            <button
              type="button"
              aria-label="Stop"
              className="min-h-touch min-w-touch inline-flex items-center justify-center rounded-full bg-starlight-red text-white hover:opacity-90 focus:ring-2 focus:ring-starlight-red focus:ring-offset-2"
            >
              <Square className="w-5 h-5" fill="currentColor" />
            </button>
          </div>
          <button
            type="button"
            className="min-h-[52px] min-w-[160px] inline-flex items-center justify-center gap-2 rounded-lg bg-starlight-orange px-8 py-3 text-lg font-semibold text-white hover:bg-starlight-orange-dark focus:ring-2 focus:ring-starlight-orange focus:ring-offset-2"
          >
            Run Test
          </button>
        </div>

        <div className="flex-1 space-y-3">
          <h3 className="text-sm font-semibold text-stone-700">Noise Control</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Volume2
              className="w-5 h-5 text-stone-500 shrink-0"
              aria-hidden
            />
            <input
              type="range"
              min="0"
              max="100"
              value={noiseMute ? 0 : noiseVolume}
              onChange={(e) => setNoiseVolume(Number(e.target.value))}
              disabled={noiseMute}
              aria-label="Noise volume"
              className="flex-1 min-w-[80px] h-2 rounded-lg appearance-none bg-stone-200 cursor-pointer disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => setNoiseMute(!noiseMute)}
              aria-pressed={noiseMute}
              aria-label={noiseMute ? 'Unmute noise' : 'Mute noise'}
              className="min-h-touch min-w-touch inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 focus:ring-2 focus:ring-starlight-orange focus:ring-offset-2"
            >
              Mute
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
