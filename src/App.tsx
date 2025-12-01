import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import InputReviewScreen from './components/InputReviewScreen';
import ResultScreen from './components/ResultScreen';
import VisualizationScreen from './components/VisualizationScreen';
import AboutScreen from './components/AboutScreen';

export type Screen = 'splash' | 'home' | 'input' | 'result' | 'visualization' | 'about';

export interface SentimentResult {
  sentiment: 'Positif' | 'Negatif' | 'Netral';
  confidence: number;
  review: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [sentimentResult, setSentimentResult] = useState<SentimentResult | null>(null);
  const [reviewHistory, setReviewHistory] = useState<SentimentResult[]>([]);

  const analyzeSentiment = (review: string): SentimentResult => {
    const positiveWords = ['bagus', 'keren', 'mantap', 'seru', 'love', 'terbaik', 'hebat', 'jago', 'pro', 'savage', 'legend', 'mythic', 'skill', 'balance', 'recommended', 'asik', 'oke', 'ok', 'jos', 'top', 'epic', 'smooth', 'lancar', 'stabil'];
    const negativeWords = [
      // Kata-kata negatif umum
      'jelek', 'buruk', 'lag', 'toxic', 'noob', 'feeder', 'afk', 'cheat', 'bosan', 'sampah', 'payah', 'lemot', 'bug',
      // Nama binatang untuk makian
      'anjing', 'asu', 'babi', 'monyet', 'anjir', 'bangsat', 'kampret', 'kunyuk', 'bajingan',
      // Kata-kata kasar merendahkan
      'bodoh', 'tolol', 'goblok', 'idiot', 'dungu', 'geblek', 'tai', 'taik', 'kontol', 'memek', 'pepek',
      'bangke', 'jancok', 'cok', 'ngentot', 'entot', 'kimak', 'perek', 'lonte', 'pelacur',
      // Kata-kata menjelekkan
      'parah', 'busuk', 'rusak', 'hancur', 'kacau', 'berantakan', 'zonk', 'cupu', 'ampas',
      'curang', 'penipu', 'bohong', 'maling', 'pencuri', 'brengsek', 'sialan', 'sial', 'terkutuk',
      // Kata-kata merendahkan skill
      'norak', 'newbie', 'amatir', 'kere', 'miskin', 'rendah', 'hina', 'nista', 'ngeselin', 'kesel',
      // Kata negatif gaming
      'buta', 'lemah', 'slow', 'lambat', 'useless', 'tidak berguna', 'gagal', 'kalah', 'norak',
      'error', 'crash', 'freeze', 'patah', 'overprice', 'mahal', 'ribet', 'susah', 'sulit',
      'unfair', 'tidak adil', 'imba', 'overpowered', 'weak', 'loyo', 'gabisa', 'ga bisa'
    ];
    // Kata-kata netral yang tidak mempengaruhi sentimen
    const neutralWords = [
      'ini', 'itu', 'yang', 'dan', 'atau', 'tapi', 'tetapi', 'dengan', 'untuk', 'dari', 'ke', 'di', 'pada',
      'adalah', 'ada', 'tidak', 'juga', 'saja', 'kan', 'lah', 'kah', 'pun', 'nya', 'mu', 'ku',
      'tank', 'fighter', 'marksman', 'mage', 'assassin', 'support', 'hero', 'skin', 'map', 'lane',
      'item', 'buff', 'jungle', 'push', 'gank', 'team', 'match', 'game', 'player', 'damage',
      'kadang', 'sering', 'selalu', 'pernah', 'belum', 'sudah', 'sedang', 'akan', 'bisa', 'dapat',
      'montage', 'gameplay', 'meta', 'nerf', 'buff', 'update', 'patch', 'build', 'combo', 'ulti'
    ];
    
    const lowerReview = review.toLowerCase();
    let positiveCount = 0;
    let negativeCount = 0;
    
    positiveWords.forEach(word => {
      if (lowerReview.includes(word)) positiveCount++;
    });
    
    negativeWords.forEach(word => {
      if (lowerReview.includes(word)) negativeCount++;
    });
    
    let sentiment: 'Positif' | 'Negatif' | 'Netral';
    let confidence: number;
    
    // Jika ada kata memuji DAN merendahkan, maka netral
    if (positiveCount > 0 && negativeCount > 0) {
      sentiment = 'Netral';
      confidence = 0.55 + Math.random() * 0.15;
    } else if (positiveCount > negativeCount) {
      sentiment = 'Positif';
      confidence = Math.min(0.65 + (positiveCount * 0.08), 0.98);
    } else if (negativeCount > positiveCount) {
      sentiment = 'Negatif';
      confidence = Math.min(0.65 + (negativeCount * 0.08), 0.98);
    } else {
      sentiment = 'Netral';
      confidence = 0.50 + Math.random() * 0.15;
    }
    
    return { sentiment, confidence, review };
  };

  const handleAnalyze = (review: string) => {
    const result = analyzeSentiment(review);
    setSentimentResult(result);
    setReviewHistory(prev => [result, ...prev].slice(0, 20));
    setCurrentScreen('result');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #060920 0%, #0A0E27 50%, #060920 100%)' }}>
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div 
        className="relative overflow-hidden shadow-2xl"
        style={{ width: '390px', height: '844px', maxWidth: '100%' }}
      >
        {/* Phone border with MLBB gradient */}
        <div className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-cyan-400/50 pointer-events-none z-20"></div>
        <div className="absolute inset-[2px] rounded-3xl overflow-hidden">
          {currentScreen === 'splash' && <SplashScreen onComplete={() => setCurrentScreen('home')} />}
          {currentScreen === 'home' && <HomeScreen onNavigate={setCurrentScreen} />}
          {currentScreen === 'input' && <InputReviewScreen onAnalyze={handleAnalyze} onBack={() => setCurrentScreen('home')} />}
          {currentScreen === 'result' && <ResultScreen result={sentimentResult} onNavigate={setCurrentScreen} />}
          {currentScreen === 'visualization' && <VisualizationScreen history={reviewHistory} onBack={() => setCurrentScreen('home')} />}
          {currentScreen === 'about' && <AboutScreen onBack={() => setCurrentScreen('home')} />}
        </div>
      </div>
    </div>
  );
}