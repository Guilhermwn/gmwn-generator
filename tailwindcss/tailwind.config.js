/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../public/**/*.html"],
  theme: {
    extend: {
      colors: {
        'turquoise': {
          '50': '#f0fdf9',
          '100': '#ccfbef',
          '200': '#98f7df',
          '300': '#5debce',
          '400': '#3ad8bc',
          '500': '#13b99e',
          '600': '#0c9582',
          '700': '#0e776a',
          '800': '#105f55',
          '900': '#134e47',
          '950': '#042f2c',
        },
        'stromboli': {
          '50': '#f2f7f5',
          '100': '#dfece4',
          '200': '#c2d8cd',
          '300': '#98bdac',
          '400': '#6b9c87',
          '500': '#4b7e6a',
          '600': '#396655',
          '700': '#2c5044',
          '800': '#254036',
          '900': '#1f352e',
          '950': '#111d19',
        },
        'gothic': {
          '50': '#f4f7f7',
          '100': '#e2e9eb',
          '200': '#c8d5d9',
          '300': '#a2b7be',
          '400': '#6e8d98',
          '500': '#597681',
          '600': '#4c636e',
          '700': '#42535c',
          '800': '#3c484e',
          '900': '#353e44',
          '950': '#20272c',
        },
        'emerald': {
          '50': '#eefff5',
          '100': '#d8ffea',
          '200': '#b4fed5',
          '300': '#7afbb6',
          '400': '#39ef8d',
          '500': '#0fd86d',
          '600': '#06ca62',
          '700': '#088d47',
          '800': '#0d6e3c',
          '900': '#0d5a33',
          '950': '#00331a',
        },
      },
    },
  },
  plugins: [],
}
