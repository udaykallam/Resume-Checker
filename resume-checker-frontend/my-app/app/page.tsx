"use client";

import { useState } from "react";
import UploadForm from "../components/UploadForm";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f0ede6] px-10 py-20 font-['Georgia',serif]">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-[#a89f8c] mb-4 font-['courier_new',monospace]">
            Career Intelligence
          </p>
          <h1 className="text-7xl font-bold leading-tight tracking-tight text-[#f0ede6]">
            Resume<br />
            <span className="text-[#c8a96e]">Score Checker</span>
          </h1>
          <div className="mt-5 h-px w-20 bg-[#c8a96e]" />
          <p className="mt-5 text-lg text-[#a89f8c] leading-relaxed max-w-xl">
            Upload your resume and paste a job description to receive an instant skills analysis and match score.
          </p>
        </div>

        <UploadForm setResult={setResult} />
        <ResultCard result={result} />

      </div>
    </main>
  );
}