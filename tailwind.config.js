/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'victoria': {
          '50': '#f1f4fc',
          '100': '#e6ebf9',
          '200': '#d1d9f4',
          '300': '#b5c1ec',
          '400': '#97a0e2',
          '500': '#7e83d6',
          '600': '#6764c7',
          '700': '#5753af',
          '800': '#434184',
          '900': '#3e3f71',
          '950': '#252442',
      },
      },
    },
  },
  plugins: [],
}

