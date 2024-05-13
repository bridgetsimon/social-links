/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkColor': 'hsl(0, 0%, 8%)',
        'backgroundColorTwo': 'hsl(0, 0%, 20%)',
        'backgroundColor' : 'hsl(0, 0%, 12%)',
        'greenColor': 'hsl(75, 94%, 57%)',
        'whiteColor': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'inter': 'inter'
      }
    },
  },
  plugins: [],
}

