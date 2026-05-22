/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        'cyber-void': '#0F0726',
        'deep-indigo': '#1A0B3D',
        'matrix-green': '#00FF94',
        'matrix-dim': '#00B574',
        'glitch-pink': '#FF3366',
        'glitch-dim': '#C92651',
        'code-gray': '#4B5563',
        'muted-gray': '#9CA3AF',
        'off-white': '#F5F5F5',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        pixel: ['VT323', 'monospace'],
      },
      animation: {
        blink: 'blink 1s infinite step-end',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
        pulse: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.4' } },
      },
    },
  },
  plugins: [],
};
