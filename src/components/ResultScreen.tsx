import { Home, BarChart3, ThumbsUp, ThumbsDown, Minus } from 'lucide-react';
import type { Screen, SentimentResult } from '../App';

interface ResultScreenProps {
  result: SentimentResult | null;
  onNavigate: (screen: Screen) => void;
}

export default function ResultScreen({ result, onNavigate }: ResultScreenProps) {
  if (!result) return null;

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Positif':
        return 'from-green-400 via-emerald-500 to-teal-400';
      case 'Negatif':
        return 'from-red-500 via-rose-500 to-pink-500';
      default:
        return 'from-blue-400 via-slate-500 to-purple-400';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'Positif':
        return <ThumbsUp className="w-16 h-16" />;
      case 'Negatif':
        return <ThumbsDown className="w-16 h-16" />;
      default:
        return <Minus className="w-16 h-16" />;
    }
  };

  return (
    <div className="h-full flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0E27 0%, #1a1f3a 50%, #0A0E27 100%)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-6 border-b relative z-10" style={{ borderColor: 'rgba(79, 111, 255, 0.2)' }}>
        <h1 
          className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent" 
          style={{ fontSize: '20px', fontWeight: 'bold' }}
        >
          Hasil Analisis
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-5 gap-6 relative z-10">
        {/* Result Card with MLBB style */}
        <div className="relative group">
          {/* Outer glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getSentimentColor(result.sentiment)} blur-xl opacity-50 rounded-2xl scale-105`}></div>
          
          {/* Main card */}
          <div 
            className={`relative bg-gradient-to-br ${getSentimentColor(result.sentiment)} p-1 shadow-2xl`}
            style={{ width: '350px', height: '180px', borderRadius: '20px' }}
          >
            <div className="bg-slate-900/40 backdrop-blur-sm h-full rounded-[18px] flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
              
              <div className="text-white relative z-10 drop-shadow-lg">
                {getSentimentIcon(result.sentiment)}
              </div>
              <div className="text-center relative z-10">
                <p 
                  className="text-white mb-2 drop-shadow-lg" 
                  style={{ fontSize: '26px', fontWeight: 'bold' }}
                >
                  Sentimen {result.sentiment}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-1 w-12 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-white to-white/80 rounded-full" 
                      style={{ width: `${result.confidence * 100}%` }}
                    ></div>
                  </div>
                  <p 
                    className="text-white/90" 
                    style={{ fontSize: '14px', fontWeight: '600' }}
                  >
                    {(result.confidence * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Preview with MLBB border */}
        <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-400/30 w-full max-w-sm">
          <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-[10px]">
            <p className="text-blue-300 text-sm mb-2" style={{ fontWeight: '600' }}>Review Anda:</p>
            <p className="text-slate-200 text-sm line-clamp-3">{result.review}</p>
          </div>
        </div>

        {/* Buttons with MLBB style */}
        <div className="flex flex-col gap-3">
          {/* Primary button */}
          <button
            onClick={() => onNavigate('input')}
            className="relative group overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ width: '300px', height: '52px', borderRadius: '12px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-pulse"></div>
            <div className="absolute inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-[10px] group-hover:opacity-100 opacity-90 transition-opacity"></div>
            <span className="relative z-10 text-white" style={{ fontWeight: '600' }}>Analisis Lagi</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>

          {/* Secondary buttons */}
          <button
            onClick={() => onNavigate('visualization')}
            className="relative group overflow-hidden transition-all duration-300 hover:scale-105 bg-slate-900/50 backdrop-blur-sm border-2 flex items-center justify-center gap-2"
            style={{ width: '300px', height: '52px', borderRadius: '12px', borderColor: 'rgba(79, 111, 255, 0.3)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <BarChart3 className="w-5 h-5 text-blue-400 relative z-10" />
            <span className="text-blue-100 relative z-10" style={{ fontWeight: '500' }}>Lihat Visualisasi</span>
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="relative group overflow-hidden transition-all duration-300 hover:scale-105 bg-slate-900/50 backdrop-blur-sm border-2 flex items-center justify-center gap-2"
            style={{ width: '300px', height: '52px', borderRadius: '12px', borderColor: 'rgba(79, 111, 255, 0.3)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Home className="w-5 h-5 text-purple-400 relative z-10" />
            <span className="text-blue-100 relative z-10" style={{ fontWeight: '500' }}>Kembali ke Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}