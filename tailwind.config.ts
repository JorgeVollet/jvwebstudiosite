import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tema claro: fundo cinza claro neutro + cards brancos
        base: "#ececee",
        surface: "#ffffff",
        surface2: "#f4f5f7",
        // superfícies escuras (seções com fundo animado: Hero/About/Coverage)
        dark: "#0a0a0a",
        dark2: "#121212",
        ink: "#1a1a1a",
        muted: "#5a5a62",
        // Dourado metálico chique
        gold: {
          50: "#fbf3da",
          100: "#f4d88a",
          200: "#e5c76b",
          300: "#d4b35a",
          DEFAULT: "#c9a24b",
          600: "#b08a3a",
          700: "#8c6d2f",
          800: "#5e4a20",
          // aliases curtos usados nas classes (gold-1..gold-4)
          1: "#f4d88a",
          2: "#e5c76b",
          3: "#c9a24b",
          4: "#8c6d2f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "Space Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "gold-metal":
          "linear-gradient(135deg, #f4d88a 0%, #e5c76b 28%, #c9a24b 55%, #8c6d2f 100%)",
        "gold-shine":
          "linear-gradient(100deg, transparent 20%, rgba(255,255,255,0.55) 48%, transparent 60%)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
      },
      animation: {
        "shine": "shine 6s linear infinite",
        "float": "float 8s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
