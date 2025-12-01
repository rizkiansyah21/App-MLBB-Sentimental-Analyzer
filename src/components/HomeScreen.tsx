import { BarChart3, Info } from 'lucide-react';
import type { Screen } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="h-full flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0E27 0%, #1a1f3a 50%, #0A0E27 100%)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-5 relative z-10">
        <div className="text-center mb-12">
          <h1 
            className="mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent" 
            style={{ fontSize: '28px', fontWeight: 'bold', textShadow: '0 0 30px rgba(79, 111, 255, 0.3)' }}
          >
            MLBB Sentiment Analyzer
          </h1>
          <p 
            className="text-blue-200/80" 
            style={{ fontSize: '16px' }}
          >
            Analisis sentimen review dan feedback<br />dari komunitas Mobile Legends
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full items-center">
          {/* Primary button with MLBB gradient */}
          <button
            onClick={() => onNavigate('input')}
            className="relative group overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ width: '300px', height: '52px', borderRadius: '12px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-pulse"></div>
            <div className="absolute inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-[10px] group-hover:opacity-100 opacity-90 transition-opacity"></div>
            <span className="relative z-10 text-white" style={{ fontWeight: '600' }}>Mulai Analisis</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>

          {/* Secondary button with border glow */}
          <button
            onClick={() => onNavigate('visualization')}
            className="relative group overflow-hidden transition-all duration-300 hover:scale-105 bg-slate-900/50 backdrop-blur-sm border-2 flex items-center justify-center gap-2"
            style={{ width: '300px', height: '52px', borderRadius: '12px', borderColor: 'rgba(79, 111, 255, 0.3)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <BarChart3 className="w-5 h-5 text-blue-400 relative z-10" />
            <span className="text-blue-100 relative z-10" style={{ fontWeight: '500' }}>Visualisasi Data</span>
          </button>

          {/* Tertiary button with border glow */}
          <button
            onClick={() => onNavigate('about')}
            className="relative group overflow-hidden transition-all duration-300 hover:scale-105 bg-slate-900/50 backdrop-blur-sm border-2 flex items-center justify-center gap-2"
            style={{ width: '300px', height: '52px', borderRadius: '12px', borderColor: 'rgba(79, 111, 255, 0.3)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Info className="w-5 h-5 text-purple-400 relative z-10" />
            <span className="text-blue-100 relative z-10" style={{ fontWeight: '500' }}>Tentang Aplikasi</span>
          </button>
        </div>
      </div>
    </div>
  );
}