import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        
      },
      colors: {
        companyColor: "#ffc020",
        primaryColor: '#1a2b6d',
        footer: '#EAEAEA',
        inputColor: '#F8F8F8',
        bodyColor: "#e2e8f0"
      
      },
      fontFamily:{
        sans:['Inter', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
export default config
