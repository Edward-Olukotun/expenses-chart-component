/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'new': 'hsl(10, 79%, 65%)',
        'teal': 'hsl(186, 34%, 60%)',
        'Cream': 'hsl(27, 66%, 92%)',
        'brown': 'hsl(28, 10%, 53%)',
        'Dbrown': 'hsl(25, 47%, 15%)',
        'Mbrown': 'hsl(28, 10%, 53%)',
      },
    },
  },
  plugins: [],
}
