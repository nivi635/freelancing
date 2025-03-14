module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Change 'Inter' to your desired font
      },
      colors: {
        primary: {
          light: '#2d3748', // Lighter shade of primary color
          DEFAULT: '#1a202c', // Main primary color
          dark: '#12161b', // Darker shade of primary color
        },
        secondary: {
          light: '#fef08a', // Lighter shade of secondary color
          DEFAULT: '#facc15', // Main secondary color (yellow)
          dark: '#ca8a04', // Darker shade of secondary color
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        white: '#ffffff',
        black: {
          DEFAULT: '#000000',
          40: 'rgba(0, 0, 0, 0.4)', // Adding black/40
        },
        blue: {
          500: '#3b82f6',
        },
        green: {
          500: '#10b981',
        },
        lime: {
          400: 'oklch(0.841 0.238 128.85)',
          500: 'oklch(0.768 0.233 130.85)',
          600: 'oklch(0.648 0.2 131.684)',
          700: 'oklch(0.532 0.157 131.589)',
        },
        brown: {
          100: '#f5f5dc',
          200: '#e7d8c1',
          300: '#d2b48c',
          400: '#c3a384',
          500: '#A52A2A', 
          600: '#8b4513',
          700: '#7b3f00',
          800: '#654321',
          900: '#4e2a1e',
        },
      },
    },
  },
  plugins: [],
};