/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brush: ['"Caveat Brush", cursive'],
        mono: ['"IBM Plex Mono", monospace'],
        sans: ['"IBM Plex Sans", sans-serif'],
        serif: ['"IBM Plex Serif", serif'],
      },
    },
  },
  plugins: [],
};
