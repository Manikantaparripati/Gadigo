/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#818cf8',
          hover: '#6366f1',
          glow: 'rgba(129,140,248,0.25)',
        },
        accent: '#fbbf24',
        navy: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1a1040 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(129,140,248,0.08), rgba(99,102,241,0.04))',
        'cta-gradient': 'linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        'premium': '0 25px 50px -12px rgba(0,0,0,0.6)',
        'glow': '0 0 40px rgba(129,140,248,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.2,0.8,0.2,1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
