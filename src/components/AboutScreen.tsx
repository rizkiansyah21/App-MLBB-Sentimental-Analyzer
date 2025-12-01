import { ArrowLeft, Users, Target, Zap } from 'lucide-react';

interface AboutScreenProps {
  onBack: () => void;
}

export default function AboutScreen({ onBack }: AboutScreenProps) {
  const teamMembers = [
    { name: 'Erwin Dwi Wahyudi', role: 'Frontend Developer' },
    { name: 'Agis Adityo Vangka', role: 'Data Scientist' },
    { name: 'Rizkiansyah', role: 'UI/UX Designer' },
    { name: 'Gusty Erlana Aldiansyah', role: 'Project Manager' },
  ];

  return (
    <div className="h-full flex flex-col relative overflow-hidden overflow-y-auto" style={{ background: 'linear-gradient(135deg, #0A0E27 0%, #1a1f3a 50%, #0A0E27 100%)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-6 border-b sticky top-0 backdrop-blur-sm z-10" style={{ borderColor: 'rgba(79, 111, 255, 0.2)', background: 'rgba(10, 14, 39, 0.8)' }}>
        <button
          onClick={onBack}
          className="text-blue-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-blue-500/10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 
          className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent" 
          style={{ fontSize: '22px', fontWeight: 'bold' }}
        >
          Tentang Aplikasi
        </h1>
      </div>

      <div className="flex-1 px-5 py-6 space-y-6 relative z-10">
        {/* Description */}
        <div className="space-y-4">
          <p className="text-blue-100/90 leading-relaxed" style={{ fontSize: '15px' }}>
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent" style={{ fontWeight: '600' }}>MLBB Sentiment Analyzer</span> adalah aplikasi yang dirancang untuk menganalisis sentimen dari review dan feedback komunitas Mobile Legends: Bang Bang.
          </p>
          <p className="text-blue-100/80 leading-relaxed" style={{ fontSize: '15px' }}>
            Aplikasi ini menggunakan teknologi Natural Language Processing untuk memahami apakah review yang diberikan memiliki sentimen positif, negatif, atau netral.
          </p>
        </div>

        {/* Features with MLBB border */}
        <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-cyan-400/40">
          <div className="bg-slate-900/80 backdrop-blur-sm p-4" style={{ borderRadius: '10px' }}>
            <h3 className="text-blue-200 mb-4 flex items-center gap-2" style={{ fontSize: '18px', fontWeight: '600' }}>
              <Zap className="w-5 h-5 text-yellow-400" />
              Fitur Utama
            </h3>
            <ul className="space-y-2 text-blue-100/80" style={{ fontSize: '14px' }}>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✦</span>
                <span>Analisis sentimen real-time dengan confidence score</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✦</span>
                <span>Visualisasi data dengan berbagai jenis chart</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✦</span>
                <span>Penyimpanan riwayat analisis hingga 20 review terakhir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✦</span>
                <span>Interface mobile-friendly dengan desain modern</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission with MLBB border */}
        <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-purple-500/30">
          <div className="bg-slate-900/80 backdrop-blur-sm p-4" style={{ borderRadius: '10px' }}>
            <h3 className="text-purple-200 mb-3 flex items-center gap-2" style={{ fontSize: '18px', fontWeight: '600' }}>
              <Target className="w-5 h-5 text-purple-400" />
              Tujuan
            </h3>
            <p className="text-blue-100/80" style={{ fontSize: '14px' }}>
              Membantu developer dan komunitas MLBB untuk lebih memahami persepsi pemain terhadap game, sehingga dapat meningkatkan kualitas dan pengalaman bermain.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="space-y-4">
          <h3 className="text-blue-200 flex items-center gap-2" style={{ fontSize: '18px', fontWeight: '600' }}>
            <Users className="w-5 h-5 text-green-400" />
            Anggota Tim
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="relative p-[2px] rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-400/20 hover:from-blue-500/40 hover:via-purple-500/40 hover:to-cyan-400/40 transition-all duration-300"
              >
                <div 
                  className="bg-slate-900/80 backdrop-blur-sm p-3 h-full"
                  style={{ borderRadius: '10px' }}
                >
                  <p className="text-white mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                    {member.name}
                  </p>
                  <p className="text-blue-300/60" style={{ fontSize: '12px' }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Version */}
        <div className="text-center py-4">
          <p className="text-blue-300/40" style={{ fontSize: '12px' }}>
            Version 1.0.0 • 2025
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="px-5 py-6 border-t relative z-10" style={{ borderColor: 'rgba(79, 111, 255, 0.2)' }}>
        <button
          onClick={onBack}
          className="relative group overflow-hidden transition-all duration-300 hover:scale-105 mx-auto block"
          style={{ width: '300px', height: '52px', borderRadius: '12px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-pulse"></div>
          <div className="absolute inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-[10px] group-hover:opacity-100 opacity-90 transition-opacity"></div>
          <span className="relative z-10 text-white" style={{ fontWeight: '600' }}>Kembali ke Home</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>
      </div>
    </div>
  );
}