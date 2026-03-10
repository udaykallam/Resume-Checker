export default function ResultCard({ result }: any) {
  if (!result) return null;

  const score = result.resume_score;
  const scoreColor =
    score >= 80 ? "#6fcf97" :
    score >= 50 ? "#c8a96e" :
    "#eb5757";

  return (
    <div className="mt-12 border border-[#2e2e2e] rounded-sm bg-[#161616] overflow-hidden">

      {/* Score Banner */}
      <div className="px-10 py-9 border-b border-[#2e2e2e] flex items-end justify-between">
        <div>
          <p className="text-sm tracking-[0.25em] uppercase text-[#6b6b6b] mb-2 font-['courier_new',monospace]">
            Match Score
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-8xl font-bold tracking-tight" style={{ color: scoreColor }}>
              {score}
            </span>
            <span className="text-3xl text-[#4a4a4a] font-light">%</span>
          </div>
        </div>

        {/* Score bar */}
        <div className="w-56 space-y-2 pb-2">
          <div className="w-full h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${score}%`, backgroundColor: scoreColor }}
            />
          </div>
          <p className="text-right text-sm text-[#4a4a4a] font-['courier_new',monospace]">
            {score >= 80 ? "Strong match" : score >= 50 ? "Partial match" : "Weak match"}
          </p>
        </div>
      </div>

      <div className="p-10 space-y-10">

        {/* Matched Skills */}
        <div>
          <p className="text-sm tracking-[0.25em] uppercase text-[#6b6b6b] mb-5 font-['courier_new',monospace]">
            Matched Skills
          </p>
          <div className="flex flex-wrap gap-3">
            {result.matched_skills.map((s: string, i: number) => (
              <span
                key={i}
                className="
                  px-4 py-1.5 text-sm rounded-full
                  bg-[#6fcf9715] text-[#6fcf97] border border-[#6fcf9730]
                  font-['courier_new',monospace] tracking-wide
                "
              >
                ✔ {s}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-[#2e2e2e]" />

        {/* Missing Skills */}
        <div>
          <p className="text-sm tracking-[0.25em] uppercase text-[#6b6b6b] mb-5 font-['courier_new',monospace]">
            Missing Skills
          </p>
          <div className="flex flex-wrap gap-3">
            {result.missing_skills.map((s: string, i: number) => (
              <span
                key={i}
                className="
                  px-4 py-1.5 text-sm rounded-full
                  bg-[#eb575715] text-[#eb5757] border border-[#eb575730]
                  font-['courier_new',monospace] tracking-wide
                "
              >
                ✘ {s}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-[#2e2e2e]" />

        {/* Suggestions */}
        <div>
          <p className="text-sm tracking-[0.25em] uppercase text-[#6b6b6b] mb-5 font-['courier_new',monospace]">
            Suggestions
          </p>
          <ul className="space-y-4">
            {result.suggestions.map((s: string, i: number) => (
              <li key={i} className="flex gap-4 text-base text-[#a89f8c] leading-relaxed">
                <span className="text-[#c8a96e] mt-0.5 shrink-0 font-['courier_new',monospace]">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="font-['Georgia',serif]">{s}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}