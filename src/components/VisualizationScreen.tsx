import { ArrowLeft } from 'lucide-react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar,
  LineChart, Line,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import type { SentimentResult } from '../App';

interface VisualizationScreenProps {
  history: SentimentResult[];
  onBack: () => void;
}

export default function VisualizationScreen({ history, onBack }: VisualizationScreenProps) {

  // ============================
  // DATA MAPPING
  // ============================
  const sentimentCounts = history.reduce((acc, result) => {
    acc[result.sentiment] = (acc[result.sentiment] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieData = [
    { name: 'Positif', value: sentimentCounts['Positif'] || 0, color: '#10b981' },
    { name: 'Negatif', value: sentimentCounts['Negatif'] || 0, color: '#ef4444' },
    { name: 'Netral', value: sentimentCounts['Netral'] || 0, color: '#8b5cf6' },
  ].filter(item => item.value > 0);

  const barData = [
    { sentiment: 'Positif', jumlah: sentimentCounts['Positif'] || 0 },
    { sentiment: 'Negatif', jumlah: sentimentCounts['Negatif'] || 0 },
    { sentiment: 'Netral', jumlah: sentimentCounts['Netral'] || 0 }
  ];

  const lineData = history.slice(-10).map((result, index) => ({
    review: `#${index + 1}`,
    confidence: Number((result.confidence * 100).toFixed(1))
  }));

  const hasData = history.length > 0;

  // ============================
  // PIE LABEL FIX RESPONSIVE
  // ============================
  const RADIAN = Math.PI / 180;
  const renderLabel = ({
    cx, cy, midAngle, percent
  }: any) => {
    const radius = 45;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        fontSize={12}
        fontWeight={600}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {(percent * 100).toFixed(0)}%
      </text>
    );
  };

  return (
    <div
      className="h-full flex flex-col relative overflow-y-auto"
      style={{
        background: "linear-gradient(135deg, #0A0E27 0%, #1a1f3a 50%, #0A0E27 100%)",
      }}
    >

      {/* DECORATION */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <div
        className="flex items-center gap-3 px-5 py-6 border-b sticky top-0 backdrop-blur-sm z-10"
        style={{
          borderColor: 'rgba(79, 111, 255, 0.2)',
          background: 'rgba(10, 14, 39, 0.75)',
        }}
      >
        <button
          onClick={onBack}
          className="text-blue-300 hover:text-white p-2 rounded-lg hover:bg-blue-500/10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1
          className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-bold text-[20px]"
        >
          Visualisasi Data
        </h1>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-4 py-5 space-y-8 relative z-10">

        {!hasData ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-blue-200/60 text-center text-sm">
              Belum ada data analisis.<br />Mulai analisis review untuk melihat visualisasi.
            </p>
          </div>
        ) : (
          <>

            {/* ============================
                PIE CHART - FULL RESPONSIVE
            ============================= */}
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-400/20">
              <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl">

                <h3 className="text-blue-200 mb-2 font-semibold text-sm">
                  Distribusi Sentimen
                </h3>

                <div style={{ width: "100%", height: "260px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="55%"
                        outerRadius="70%"
                        labelLine={false}
                        label={renderLabel}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>

                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(10,14,39,0.85)",
                          borderRadius: 8,
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                        itemStyle={{
                          color: "#fff",
                          fontWeight: 600,
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

              </div>
            </div>

            {/* ============================
                BAR CHART - FULL RESPONSIVE
            ============================= */}
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-400/20">
              <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl">

                <h3 className="text-blue-200 mb-2 font-semibold text-sm">
                  Jumlah per Sentimen
                </h3>

                <div style={{ width: "100%", height: "260px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(79,111,255,0.1)" />
                      <XAxis dataKey="sentiment" stroke="#e0eaff" fontSize={12} />
                      <YAxis stroke="#e0eaff" fontSize={12} />

                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(10,14,39,0.85)",
                          borderRadius: 8,
                          border: "1px solid rgba(255,255,255,0.3)",
                        }}
                        itemStyle={{ color: "#fff", fontWeight: 600 }}
                      />

                      <Bar dataKey="jumlah" radius={[6, 6, 0, 0]}>
                        {barData.map((entry, index) => (
                          <Cell
                            key={index}
                            fill={
                              entry.sentiment === "Positif"
                                ? "#10b981"
                                : entry.sentiment === "Negatif"
                                ? "#ef4444"
                                : "#8b5cf6"
                            }
                          />
                        ))}
                      </Bar>

                    </BarChart>
                  </ResponsiveContainer>
                </div>

              </div>
            </div>

            {/* ============================
                LINE CHART - FULL RESPONSIVE
            ============================= */}
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-400/20">
              <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl">

                <h3 className="text-blue-200 mb-2 font-semibold text-sm">
                  Tren Confidence (%)
                </h3>

                <div style={{ width: "100%", height: "260px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData}>

                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(79,111,255,0.1)" />
                      <XAxis dataKey="review" stroke="#e0eaff" fontSize={12} />
                      <YAxis stroke="#e0eaff" fontSize={12} />

                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(10,14,39,0.85)",
                          borderRadius: 8,
                          border: "1px solid rgba(255,255,255,0.3)",
                        }}
                        itemStyle={{ color: "#fff", fontWeight: 600 }}
                      />

                      <Line
                        type="monotone"
                        dataKey="confidence"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        dot={{ r: 4, fill: "#8b5cf6" }}
                      />

                    </LineChart>
                  </ResponsiveContainer>
                </div>

              </div>
            </div>

            {/* ============================
                STATISTIK BOX
            ============================= */}
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-400/20">
              <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl">

                <h3 className="text-blue-200 mb-3 font-semibold text-base">
                  Statistik
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-blue-500/5">
                    <span className="text-blue-200/80">Total Review:</span>
                    <span className="text-white px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                      {history.length}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-green-500/5">
                    <span className="text-blue-200/80">Positif:</span>
                    <span className="text-green-400 px-3 py-1 rounded-lg bg-green-500/20 font-semibold">
                      {sentimentCounts["Positif"] || 0}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-red-500/5">
                    <span className="text-blue-200/80">Negatif:</span>
                    <span className="text-red-400 px-3 py-1 rounded-lg bg-red-500/20 font-semibold">
                      {sentimentCounts["Negatif"] || 0}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-purple-500/5">
                    <span className="text-blue-200/80">Netral:</span>
                    <span className="text-purple-400 px-3 py-1 rounded-lg bg-purple-500/20 font-semibold">
                      {sentimentCounts["Netral"] || 0}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </>
        )}

      </div>

      {/* FOOTER BUTTON */}
      <div
        className="px-5 py-6 border-t relative z-10"
        style={{ borderColor: 'rgba(79,111,255,0.2)' }}
      >
        <button
          onClick={onBack}
          className="relative group overflow-hidden transition-all duration-300 hover:scale-105 bg-slate-900/50 backdrop-blur-sm border-2 mx-auto block"
          style={{
            width: "90%",
            maxWidth: 300,
            height: 52,
            borderRadius: 12,
            borderColor: "rgba(79,111,255,0.3)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition"></div>
          <span className="text-blue-100 relative z-10 font-medium">Kembali</span>
        </button>
      </div>

    </div>
  );
}
