/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          "100": "#23272f",
          "200": "rgba(30, 30, 30, 0.87)",
          "300": "rgba(255, 255, 255, 0.15)",
        },
        lightgray: "#d3d3d3",
        black: "#000",
        white: "#fff",
        darkslategray: "#3f4655",
        paleturquoise: "rgba(184, 255, 242, 0.33)",
        lightcyan: "#e8fffb",
        whitesmoke: "#f6f6f6",
        cornflowerblue: "#4c79cf",
        lightseagreen: "#01ae8f",
        darkseagreen: '#009076',
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
    },
  },
  plugins: [],
}
