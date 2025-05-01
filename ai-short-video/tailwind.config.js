// tailwind.config.js
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF', // ✅ blue color
        },
      },
    },
    plugins: [],
  };
  