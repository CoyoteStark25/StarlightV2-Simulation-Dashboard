import AccentSection from './components/AccentSection';
import NoiseSection from './components/NoiseSection';
import ControlPanel from './components/ControlPanel';

function App() {
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
          <AccentSection />
          <NoiseSection />
        </div>
        <div className="mt-6">
          <ControlPanel />
        </div>
      </main>
    </div>
  );
}

export default App;
