module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Scan all relevant files in the src directory
    './public/index.html',             // Include the main HTML file if needed
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#6a4feb',
        color2:'#190445'
      },
    },
  },
  plugins: [],
};
