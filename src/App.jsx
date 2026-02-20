import { useState, useRef, useCallback, useEffect } from 'react';
import AccentSection from './components/AccentSection';
import NoiseSection from './components/NoiseSection';
import ControlPanel from './components/ControlPanel';
import { ACCENTS, getAccentSlug } from './constants';

function App() {
  const [selectedAccent, setSelectedAccent] = useState(ACCENTS[0]);
  const [accentVolume, setAccentVolume] = useState(70);
  const [accentMute, setAccentMute] = useState(false);
  const [selectedNoise, setSelectedNoise] = useState(null);
  const [noiseVolume, setNoiseVolume] = useState(70);
  const [noiseMute, setNoiseMute] = useState(false);
  const [noiseOn, setNoiseOn] = useState(false);

  const accentAudioRef = useRef(null);
  const noiseAudioRef = useRef(null);

  useEffect(() => {
    if (accentAudioRef.current) {
      accentAudioRef.current.volume = accentMute ? 0 : accentVolume / 100;
    }
    if (noiseAudioRef.current) {
      noiseAudioRef.current.volume = noiseMute ? 0 : noiseVolume / 100;
    }
  }, [accentVolume, accentMute, noiseVolume, noiseMute]);

  const play = useCallback(() => {
    if (!accentAudioRef.current) accentAudioRef.current = new Audio();
    if (!noiseAudioRef.current) noiseAudioRef.current = new Audio();

    const accentAudio = accentAudioRef.current;
    const noiseAudio = noiseAudioRef.current;

    const slug = getAccentSlug(selectedAccent);
    accentAudio.src = `/audio/accents/${slug}.mp3`;
    accentAudio.volume = accentMute ? 0 : accentVolume / 100;
    accentAudio.currentTime = 0;
    accentAudio.play().catch(() => {});

    if (selectedNoise && noiseOn) {
      noiseAudio.src = `/audio/noise/${selectedNoise}.mp3`;
      noiseAudio.volume = noiseMute ? 0 : noiseVolume / 100;
      noiseAudio.currentTime = 0;
      noiseAudio.loop = true;
      noiseAudio.play().catch(() => {});
    }
  }, [selectedAccent, accentVolume, accentMute, selectedNoise, noiseVolume, noiseMute, noiseOn]);

  const stop = useCallback(() => {
    if (accentAudioRef.current) {
      accentAudioRef.current.pause();
      accentAudioRef.current.currentTime = 0;
    }
    if (noiseAudioRef.current) {
      noiseAudioRef.current.pause();
      noiseAudioRef.current.currentTime = 0;
    }
  }, []);

  return (
    <div className="min-h-screen bg-milk">
      <header className="border-b border-stone-200 bg-milk-warm/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-starlight-orange-dark sm:text-2xl">
            UK Accent & Noise Simulation Dashboard
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AccentSection
            selectedAccent={selectedAccent}
            onAccentChange={setSelectedAccent}
            accentVolume={accentVolume}
            onAccentVolumeChange={setAccentVolume}
            accentMute={accentMute}
            onAccentMuteChange={setAccentMute}
            onPreviewHelp={play}
          />
          <NoiseSection
            selectedNoise={selectedNoise}
            onNoiseSelect={setSelectedNoise}
            noiseVolume={noiseVolume}
            onNoiseVolumeChange={setNoiseVolume}
            noiseOn={noiseOn}
            onNoiseOnToggle={() => setNoiseOn((v) => !v)}
          />
        </div>
        <div className="mt-6">
          <ControlPanel
            accentVolume={accentVolume}
            onAccentVolumeChange={setAccentVolume}
            accentMute={accentMute}
            onAccentMuteChange={setAccentMute}
            noiseVolume={noiseVolume}
            onNoiseVolumeChange={setNoiseVolume}
            noiseMute={noiseMute}
            onNoiseMuteChange={setNoiseMute}
            onPlay={play}
            onStop={stop}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
