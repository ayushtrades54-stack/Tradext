"use client";
import { useState } from "react";

export default function UploadBox() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const analyze = async () => {
    if (!file) return alert("Please upload a chart image");

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data.analysis || "No analysis received");
  };

  return (
    <div className="bg-white/10 p-6 rounded-xl text-center text-white">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={analyze}
        className="mt-4 px-4 py-2 bg-blue-500 rounded"
      >
        Analyze with AI
      </button>

      {result && <p className="mt-4">{result}</p>}
    </div>
  );
}
