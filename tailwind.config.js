/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        milk: {
          DEFAULT: '#faf8f5',
          warm: '#f5f2ed',
        },
        starlight: {
          orange: '#e86b2a',
          'orange-dark': '#d45a1f',
          green: '#22c55e',
          red: '#ef4444',
        },
      },
      minWidth: {
        'touch': '44px',
      },
      minHeight: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
}
