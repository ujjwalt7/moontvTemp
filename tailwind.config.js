/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueAcent: "#6350CF",
        greenAcent:'#4AC279',
        bl: "#0B0B10",
        // bl: "#0f1018",
        // rbl: "#0B0B10",
        grey: "#191B2A",
        greyLight: "#3D4563",
      },
    },
  },
  plugins: [],
};
