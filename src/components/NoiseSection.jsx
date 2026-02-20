import {
  Car,
  Store,
  HardHat,
  Users,
  Bus,
  CloudRain,
  Ambulance,
  Building2,
  Volume2,
} from 'lucide-react';
import { NOISE_ENVIRONMENTS } from '../constants';

const ICON_MAP = {
  Car,
  Store,
  HardHat,
  Users,
  Bus,
  CloudRain,
  Ambulance,
  Building2,
};

export default function NoiseSection({
  selectedNoise,
  onNoiseSelect,
  noiseVolume,
  onNoiseVolumeChange,
  noiseOn,
  onNoiseOnToggle,
}) {
  return (
    <section
      className="rounded-xl bg-milk-warm border border-stone-200 p-6 shadow-sm"
      aria-labelledby="noise-heading"
    >
      <h2 id="noise-heading" className="text-lg font-semibold text-stone-800 mb-4">
        Select Noise Environment
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {NOISE_ENVIRONMENTS.map(({ id, label, icon }) => {
          const Icon = ICON_MAP[icon] ?? Building2;
          const isSelected = selectedNoise === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onNoiseSelect(id)}
              className={`min-h-touch flex flex-col items-center justify-center gap-1.5 rounded-lg border-2 px-3 py-4 text-sm font-medium transition-colors focus:ring-2 focus:ring-starlight-orange focus:ring-offset-2 ${
                isSelected
                  ? 'border-starlight-orange bg-starlight-orange/10 text-starlight-orange-dark'
                  : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-50'
              }`}
            >
              <Icon className="w-6 h-6 shrink-0" aria-hidden />
              <span className="text-center leading-tight">{label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-stone-600 sr-only">Noise volume</span>
        <Volume2
          className="w-5 h-5 text-stone-500 shrink-0"
          aria-hidden
        />
        <input
          type="range"
          min="0"
          max="100"
          value={noiseVolume}
          onChange={(e) => onNoiseVolumeChange(Number(e.target.value))}
          aria-label="Noise volume"
          className="flex-1 min-w-[100px] h-2 rounded-lg appearance-none bg-stone-200 cursor-pointer"
        />
        <button
          type="button"
          role="switch"
          aria-checked={noiseOn}
          aria-label="Noise on or off"
          onClick={onNoiseOnToggle}
          className={`min-h-touch min-w-[80px] inline-flex items-center justify-center rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-colors focus:ring-2 focus:ring-starlight-orange focus:ring-offset-2 ${
            noiseOn
              ? 'border-starlight-orange bg-starlight-orange text-white'
              : 'border-stone-300 bg-white text-stone-600'
          }`}
        >
          {noiseOn ? 'ON' : 'OFF'}
        </button>
      </div>
    </section>
  );
}
