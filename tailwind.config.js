const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        // blue primary
        primary: {
          50: '#f2f9ff',
          100: '#e6f3ff',
          200: '#bfe1ff',
          300: '#99ceff',
          400: '#4daaff',
          500: '#0085ff',
          600: '#0078e6',
          700: '#0064bf',
          800: '#005099',
          900: '#00417d',
        },
        // white
        neutral: {
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#e6e6e6',
          700: '#bfbfbf',
          800: '#999999',
          900: '#7d7d7d',
        },
        // grey - icons and subtitle text
        'storm-dust': {
          50: '#f7f7f7',
          100: '#f0f0f0',
          200: '#d9d9d9',
          300: '#c2c2c2',
          400: '#949494',
          500: '#666666',
          600: '#5c5c5c',
          700: '#4d4d4d',
          800: '#3d3d3d',
          900: '#323232',
        },
        // title text - black
        'mine-shaft': {
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#cccccc',
          300: '#adadad',
          400: '#707070',
          500: '#333333',
          600: '#2e2e2e',
          700: '#262626',
          800: '#1f1f1f',
          900: '#191919',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
};
