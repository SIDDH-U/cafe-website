/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF7',
          100: '#FFF9F0',
          200: '#FBF4E8', // Main background cream
          300: '#F5EAD6',
          400: '#EBD9BD',
          border: '#E8DFC8',
        },
        sage: {
          50: '#F2F6F1',
          100: '#DFE9DE',
          200: '#BFD3BD',
          300: '#9FB89C',
          400: '#7E9B7B',
          500: '#5E7A58', // Main Sage Green panel
          600: '#4D6748',
          700: '#3D5339',
          800: '#2D3E2A',
        },
        forest: {
          600: '#38553B',
          700: '#2F4A32', // Deep forest green
          800: '#243B27',
          900: '#1A2D1C',
          darkest: '#1F2A1E', // Main dark heading text
        },
        terracotta: {
          50: '#FDF4F0',
          100: '#F9E2D8',
          200: '#F3C1AF',
          300: '#EC9D82',
          400: '#DE7552',
          500: '#C4572F', // Main Terracotta accent
          600: '#B04A25',
          700: '#943B1B',
        },
        coffee: {
          body: '#4A4A3F',
          muted: '#76756B',
          gold: '#C99E5C',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"DM Sans"', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', '"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(47, 74, 50, 0.08)',
        'soft-lg': '0 20px 40px -15px rgba(47, 74, 50, 0.12)',
        'plate': '0 25px 45px -12px rgba(31, 42, 30, 0.28)',
        'floating': '0 15px 35px -5px rgba(196, 87, 47, 0.25)',
      },
      borderRadius: {
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
      }
    },
  },
  plugins: [],
}
