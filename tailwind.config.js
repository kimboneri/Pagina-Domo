/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px', 
      xl: '1280px', 
      '2xl': '1650px', 
    },
    
    extend: {
      backgroundImage: {
      'god-publi': "url('../public/assets/publicidad/NMwFZ00J50ctQEHdRGGg7IBg.jfif')",
      'banner-footer':"url('../public/assets/tlou-hub-cross-link-banner-desktop-01-en-24jan23.webp')",
      }
    },
    fontFamily: {
      "Poppins":['Concert One'],
      "LilitaOne":['Lilita One'],
      "Montserrat":['Montserrat'],
      "Lorepsum":['Lorepsum'],
      "Brogles":['Brogles'],
      "Minecrafter":['Minecrafter'],
    }
  },
  plugins: [daisyui],
}

