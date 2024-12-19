/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}



module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        slideIn: 'slideIn 1s ease-out',
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
