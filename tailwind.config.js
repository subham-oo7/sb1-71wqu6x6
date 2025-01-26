/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(147, 51, 234)',
        'primary-foreground': '#ffffff',
        accent: 'rgb(88, 28, 135)',
        'accent-foreground': '#ffffff',
        background: '#000000',
        input: 'rgb(147, 51, 234)',
      },
    },
  },
  plugins: [],
};