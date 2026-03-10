"use client";

import { useState, useRef } from "react";
import { analyzeResume } from "@/app/services/api";

export default function UploadForm({ setResult }: any) {
  const [file, setFile] = useState<File | null>(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (!file) return alert("Please upload a resume.");
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("job_description", jd);
    setLoading(true);
    try {
      const data = await analyzeResume(formData);
      setResult(data);
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) setFile(dropped);
  };

  return (
    <div className="space-y-6">

      {/* File Drop Zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`
          relative border cursor-pointer rounded-sm p-12 text-center transition-all duration-200
          ${dragging
            ? "border-[#c8a96e] bg-[#c8a96e10]"
            : "border-[#2e2e2e] hover:border-[#c8a96e40] bg-[#161616]"
          }
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        {file ? (
          <div className="space-y-2">
            <p className="text-[#c8a96e] text-base font-['courier_new',monospace] tracking-wide">
              ✦ {file.name}
            </p>
            <p className="text-[#5a5a5a] text-sm">
              {(file.size / 1024).toFixed(1)} KB · Click to replace
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-4xl text-[#3a3a3a]">↑</div>
            <p className="text-[#6b6b6b] text-base tracking-wide">
              Drop your resume here, or <span className="text-[#c8a96e] underline underline-offset-2">browse</span>
            </p>
            <p className="text-[#3d3d3d] text-sm font-['courier_new',monospace]">PDF · DOC · DOCX</p>
          </div>
        )}
      </div>

      {/* Job Description */}
      <div className="relative">
        <label className="block text-sm tracking-[0.2em] uppercase text-[#6b6b6b] mb-3 font-['courier_new',monospace]">
          Job Description
        </label>
        <textarea
          placeholder="Paste the full job description here…"
          className="
            w-full h-56 bg-[#161616] border border-[#2e2e2e] rounded-sm
            p-5 text-base text-[#d4cfc6] placeholder-[#3d3d3d]
            focus:outline-none focus:border-[#c8a96e40]
            resize-none leading-relaxed transition-colors duration-200
            font-['Georgia',serif]
          "
          onChange={(e) => setJd(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="
          w-full py-5 bg-[#c8a96e] text-[#0f0f0f] text-base
          tracking-[0.15em] uppercase font-bold rounded-sm
          hover:bg-[#d4b87a] active:bg-[#b8995e]
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-all duration-200 font-['courier_new',monospace]
        "
      >
        {loading ? "Analyzing…" : "Analyze Resume"}
      </button>

    </div>
  );
}