/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'glory': {
        50: '#f3f7fc',
        100: '#e5f0f9',
        200: '#c6dff1',
        300: '#94c6e5',
        400: '#5ba9d5',
        500: '#368dc1',
        600: '#2877ac',
        700: '#205b84',
        800: '#1e4d6e',
        900: '#1e415c',
      },
      'gray': {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}