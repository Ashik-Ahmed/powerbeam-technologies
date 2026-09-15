/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}","./components/**/*.{js,jsx}","./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { display: ["var(--font-display)","sans-serif"], sans: ["var(--font-body)","sans-serif"] },
      colors: {
        ink: {950:"#04070F",900:"#071127",800:"#0B1B3D",700:"#13264F",600:"#1B3568"},
        solar: {300:"#FFE45C",400:"#FFD60A",500:"#FFB800",600:"#FF8A00",700:"#E56A00"},
        volt: {300:"#7CFFC4",400:"#2DFF9E",500:"#00E676",600:"#00B35C"},
      },
      boxShadow: { glow:"0 0 40px -8px rgba(255,184,0,.55)", card:"0 20px 60px -20px rgba(4,7,15,.55)", soft:"0 10px 40px -12px rgba(11,27,61,.25)" },
      backgroundImage: {
        "grid-white":"linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
        "hero-glow":"radial-gradient(60% 60% at 70% 20%, rgba(255,184,0,.25), transparent 70%),radial-gradient(50% 50% at 20% 80%, rgba(0,230,118,.18), transparent 70%)",
        "solar-gradient":"linear-gradient(135deg,#FFD60A 0%,#FF8A00 55%,#FF5C00 100%)"
      },
      keyframes: {
        marquee:{from:{transform:"translateX(0)"},to:{transform:"translateX(-50%)"}},
        float:{ "0%,100%":{transform:"translateY(0)"},"50%":{transform:"translateY(-14px)"} },
        spinSlow:{to:{transform:"rotate(360deg)"}},
        pulseGlow:{ "0%,100%":{opacity:.6},"50%":{opacity:1} }
      },
      animation: { marquee:"marquee 28s linear infinite", float:"float 6s ease-in-out infinite", spinSlow:"spinSlow 24s linear infinite" }
    },
  },
  plugins: [],
};