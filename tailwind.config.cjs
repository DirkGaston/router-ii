/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pokehollow: ["PokemonHollow", "sans-serif"],
        pokesolid: ["PokemonSolid", "sans-serif"],
      },
    },
  },
  plugins: [],
};
