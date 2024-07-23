module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all your React components
    './public/index.html', // Include your index.html
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: { 
      backgroundImage: theme => ({
        'hero-about': "url('/public/static/media/aboutHero.png')",
      }),
      },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight reset
  },
};