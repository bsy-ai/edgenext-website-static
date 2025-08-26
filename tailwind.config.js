/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#0EB623',
        'primary-dark': '#0EA620',
      },
      boxShadow: {
        'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(14, 182, 35, 0.2)',
        'glow-lg': '0 0 30px rgba(14, 182, 35, 0.25)',
        'neo': '8px 8px 16px #e6e6e6, -8px -8px 16px #ffffff',
      },
      backgroundImage: {
        'hero-gradient': `
          radial-gradient(800px circle at 100% 0%, rgba(14, 182, 35, 0.08), transparent 80%),
          radial-gradient(600px circle at 0% 0%, rgba(14, 182, 35, 0.06), transparent 80%),
          radial-gradient(800px circle at 100% 100%, rgba(14, 182, 35, 0.08), transparent 80%),
          radial-gradient(600px circle at 0% 100%, rgba(14, 182, 35, 0.06), transparent 80%),
          linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))
        `,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        slideUp: 'slideUp 0.5s ease-out',
      },
      fontSize: {
        // Add custom heading sizes with adjusted line heights
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '500' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
};