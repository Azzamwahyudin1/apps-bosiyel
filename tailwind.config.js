/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        protest: ['"Protest Strike"', "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#0A1128",
          mid: "#0F1A3E",
          accent: "#243C8E",
          cyan: "#38BDF8",
          btnBlue: "#38BDF8",
        },
      },
    },
  },
  plugins: [],
};
