import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F2A900',
          50: '#FEF6E0',
          100: '#FDECC2',
          200: '#FBD985',
          300: '#F9C548',
          400: '#F4B417',
          500: '#F2A900',
          600: '#C98D00',
          700: '#9F7000',
          800: '#765300',
          900: '#4D3600',
        },
        secondary: {
          DEFAULT: '#1A1F2E',
          50: '#E8E9EB',
          100: '#D1D3D8',
          200: '#A3A7B1',
          300: '#757B8A',
          400: '#474F63',
          500: '#1A1F2E',
          600: '#151925',
          700: '#10131C',
          800: '#0B0D13',
          900: '#06070A',
        },
        accent: {
          DEFAULT: '#4A5568',
          50: '#EDF2F7',
          100: '#E2E8F0',
          200: '#CBD5E0',
          300: '#A0AEC0',
          400: '#718096',
          500: '#4A5568',
          600: '#2D3748',
          700: '#1A202C',
        },
        cta: {
          DEFAULT: '#EA580C',
          hover: '#DC4B07',
        },
        background: {
          white: '#FFFFFF',
          light: '#F7FAFC',
        },
      },
      fontFamily: {
        heading: ['var(--font-clash)', 'system-ui', 'sans-serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(242, 169, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(242, 169, 0, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1A1F2E 0%, #2D3748 50%, #1A1F2E 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F2A900 0%, #FBD985 50%, #F2A900 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
