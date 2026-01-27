import { useState } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';
import { ACCENTS } from '../constants';

export default function AccentSection() {
  const [accent, setAccent] = useState(ACCENTS[0]);
  const [volume, setVolume] = useState(70);
  const [mute, setMute] = useState(false);

  return (
    <section
      className="rounded-xl bg-milk-warm border border-stone-200 p-6 shadow-sm"
      aria-labelledby="accent-heading"
    >
      <h2 id="accent-heading" className="text-lg font-semibold text-stone-800 mb-4">
        Select Accent & Say &apos;Help!&apos;
      </h2>

      <fieldset className="space-y-2 mb-6">
        <legend className="sr-only">Accent selection</legend>
        {ACCENTS.map((a) => (
          <label
            key={a}
            className="flex items-center gap-3 cursor-pointer group min-h-touch py-1"
          >
            <input
              type="radio"
              name="accent"
              value={a}
              checked={accent === a}
              onChange={() => setAccent(a)}
              className="w-4 h-4 text-starlight-orange border-stone-300 focus:ring-starlight-orange"
            />
            <span className="text-stone-700 group-hover:text-stone-900">{a}</span>
          </label>
        ))}
      </fieldset>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-stone-600 sr-only">Accent volume</span>
        <Volume2
          className="w-5 h-5 text-stone-500 shrink-0"
          aria-hidden
        />
        <input
          type="range"
          min="0"
          max="100"
          value={mute ? 0 : volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          disabled={mute}
          aria-label="Accent volume"
          className="flex-1 min-w-[100px] h-2 rounded-lg appearance-none bg-stone-200 cursor-pointer disabled:opacity-50"
        />
        <button
          type="button"
          onClick={() => setMute(!mute)}
          aria-pressed={mute}
          aria-label={mute ? 'Unmute accent' : 'Mute accent'}
          className="min-h-touch min-w-touch inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 focus:ring-2 focus:ring-starlight-orange focus:ring-offset-2"
        >
          {mute ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          <span className="ml-1.5">Mute</span>
        </button>
      </div>

      <button
        type="button"
        className="min-h-[48px] min-w-touch inline-flex items-center justify-center gap-2 rounded-lg bg-starlight-green px-6 py-3 text-base font-semibold text-white hover:opacity-90 focus:ring-2 focus:ring-starlight-green focus:ring-offset-2"
        aria-label="Preview Help"
      >
        <Play className="w-5 h-5" aria-hidden />
        Preview &apos;Help!&apos;
      </button>
    </section>
  );
}
