"use client";

export default function ResultCards({ trend, entry, sl, tp }) {
  if (!trend) return null;

  return (
    <div className="grid grid-cols-2 gap-4 mt-6 text-white">
      <div className="bg-white/10 p-3 rounded">Trend: {trend}</div>
      <div className="bg-white/10 p-3 rounded">Entry: {entry}</div>
      <div className="bg-white/10 p-3 rounded">Stop Loss: {sl}</div>
      <div className="bg-white/10 p-3 rounded">Target: {tp}</div>
    </div>
  );
}
