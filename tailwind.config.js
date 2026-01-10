/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma Design Colors - Exact matches
        'dark-blue': '#233E79',
        'cyan': '#1FB0C8',
        'gray-dark': '#4B4B4B',
        'gray-text': '#252525',
        'gray-medium': '#555',
        'gray-light': '#a1a1a1',
        'gray-bg': '#eef3f8',
        'gray-divider': '#e1e8ee',
        'gray-placeholder': '#d9d9d9',
        'gray-7e': '#7e7e7e',
        'gray-888': '#888',
        'gray-929': '#92929d',
        'gray-111': '#11142d',
        'gray-999': '#999',
        'primary-243': '#243e7a',
      },
      spacing: {
        '100': '100px',
      },
      maxWidth: {
        '1440': '1440px',
      },
      fontFamily: {
        'salsa': ['Salsa', 'sans-serif'],
        'alexandria': ['Alexandria', 'sans-serif'],
      },
      borderRadius: {
        '100': '100px',
        '150': '150px',
      },
    },
  },
  plugins: [],
}

