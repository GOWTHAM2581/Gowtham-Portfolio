/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables manual dark mode toggle (via adding/removing 'dark' class)
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        neonslate: {
          primary: '#F97316', // Orange accent color
          secondary: '#38BDF8', // Light blue
          accent: '#38BDF8',
          neutral: '#111827', // Navbar and dark base
          'base-100': '#1E293B', // Background for dark mode
          'base-content': '#E5E7EB', // Text color
        },
      },
      'light', // Include light theme for toggle if needed
      'dark', // Include dark theme for fallback
    ],
  },
};
