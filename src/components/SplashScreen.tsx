import { useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0E27 0%, #1a1f3a 50%, #0A0E27 100%)' }}>
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="flex flex-col items-center gap-6 animate-fade-in relative z-10">
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 blur-2xl opacity-60 rounded-full scale-110 animate-pulse"></div>
          
          {/* Icon container with border */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 p-1 rounded-3xl">
            <div className="bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] rounded-3xl p-8">
              <Gamepad2 className="w-24 h-24 text-transparent bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 bg-clip-text" strokeWidth={1.5} style={{ stroke: 'url(#gamepad-gradient)' }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gamepad-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4F6FFF" />
                    <stop offset="50%" stopColor="#7B3FF2" />
                    <stop offset="100%" stopColor="#00D4FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h1 
            className="mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent" 
            style={{ fontSize: '32px', fontWeight: 'bold', textShadow: '0 0 30px rgba(79, 111, 255, 0.5)' }}
          >
            MLBB Sentiment
          </h1>
          <p 
            className="text-blue-200/90" 
            style={{ fontSize: '14px' }}
          >
            Analisis sentimen review Mobile Legends
          </p>
        </div>
        
        {/* Loading bar */}
        <div className="w-48 h-1 bg-slate-800/50 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
}