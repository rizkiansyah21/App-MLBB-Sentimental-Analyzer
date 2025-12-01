import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function InputReviewScreen({ onBack, onAnalyze }: any) {

  const [text, setText] = useState("");

  return (
    <div
      className="w-full h-screen flex flex-col relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A0E27 0%, #1a1f3a 50%, #0A0E27 100%)",
      }}
    >

      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* HEADER FIX RESPONSIVE */}
      <div
        className="flex items-center gap-3 px-4 py-5 border-b backdrop-blur-md sticky top-0 z-20"
        style={{
          borderColor: "rgba(79, 111, 255, 0.15)",
          background: "rgba(10,14,39,0.7)",
        }}
      >
        <button
          onClick={onBack}
          className="text-blue-300 hover:text-white transition p-2 rounded-lg hover:bg-blue-500/10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent text-xl font-bold">
          Input Review
        </h1>
      </div>

      {/* CONTENT — SCROLL AGAR TIDAK TERPOTONG */}
      <div
        className="flex-1 overflow-y-auto px-4 py-5 space-y-6 relative z-10"
        style={{ paddingBottom: "120px" }}
      >
        <div className="space-y-2">
          <p className="text-blue-200/80 text-sm">
            Masukkan review atau feedback Anda tentang MLBB:
          </p>

          {/* TEXTAREA CONTAINER RESPONSIVE */}
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-400/30">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={6}
              placeholder="Contoh: Game ini sangat seru dan balance, hero baru selalu menarik..."
              className="w-full p-3 bg-slate-900/70 rounded-xl text-blue-100 placeholder-blue-300/40 outline-none resize-none"
              style={{
                minHeight: "140px",
              }}
            />
          </div>

          {/* CHARACTER COUNTER */}
          <p className="text-blue-200/70 text-xs">
            {text.length} karakter
          </p>
        </div>
      </div>

      {/* BUTTON AREA — TETAP DIBAWAH & TIDAK TERPOTONG */}
      <div
        className="absolute bottom-0 left-0 w-full px-4 py-4 backdrop-blur-md border-t z-20"
        style={{
          borderColor: "rgba(79, 111, 255, 0.2)",
          background: "rgba(10,14,39,0.6)",
        }}
      >
        <button
          disabled={text.trim().length === 0}
          onClick={() => onAnalyze(text)}
          className="w-full py-3 rounded-xl text-white font-medium transition active:scale-95 disabled:opacity-40 bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Analisis Sekarang
        </button>
      </div>
    </div>
  );
}
