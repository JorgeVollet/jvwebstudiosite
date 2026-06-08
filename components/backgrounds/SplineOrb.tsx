"use client";

/** Orb reativo (Spline) como background. Forçado escuro pelo overlay preto. */
export default function SplineOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden bg-black ${className}`}>
      <iframe
        src="https://my.spline.design/reactiveorb-s0GzgSco0uSVSXvwMHuJvPQs"
        frameBorder="0"
        width="100%"
        height="100%"
        title="JV orb"
        className="absolute inset-0 h-full w-full"
        style={{
          filter: "grayscale(1) brightness(0.9) contrast(1.1)",
          transform: "scale(1.4)",
          transformOrigin: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />
      {/* tinte dourado bem sutil */}
      <div className="absolute inset-0 mix-blend-overlay" style={{ background: "radial-gradient(circle at 70% 40%, rgba(201,162,75,0.12), transparent 60%)" }} />
    </div>
  );
}
