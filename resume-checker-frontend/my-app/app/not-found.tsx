export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col justify-center items-center px-6 font-['Georgia',serif]">

      {/* Decorative top rule */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px w-16 bg-[#2e2e2e]" />
        <span className="text-xs tracking-[0.3em] uppercase text-[#fff] font-['courier_new',monospace]">
          Error
        </span>
        <div className="h-px w-16 bg-[#2e2e2e]" />
      </div>

      {/* 404 */}
      <h1 className="text-[10rem] font-bold leading-none tracking-tight text-[#fff] select-none">
        404
      </h1>

      {/* Gold accent line */}
      <div className="h-px w-12 bg-[#c8a96e] my-8" />

      {/* Message */}
      <p className="text-lg text-[#6b6b6b] tracking-wide text-center max-w-sm leading-relaxed">
        The page you are looking for does not exist.
      </p>

      {/* CTA */}
      <a
        href="/"
        className="
          mt-10 px-10 py-4
          border border-[#c8a96e] text-[#c8a96e]
          text-sm tracking-[0.2em] uppercase font-bold
          font-['courier_new',monospace]
          hover:bg-[#c8a96e] hover:text-[#0f0f0f]
          transition-all duration-200
        "
      >
        Go Home
      </a>

    </div>
  );
}