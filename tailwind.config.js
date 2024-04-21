/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./code/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        ping: {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: "0"
          }
      }
    },
    colors: {
      "body-color": "hsl(219, 4%, 4%)",
      "light-white-color": "hsl(219, 8%, 75%)",
      "light-color": "hsl(219, 4%, 55%)",
      "test-color": "rgb(132 204 22)",
      "first-color": "hsl(219, 69%, 56%)",
      "nav-color": "rgb(15 23 42)",
      "white": "#fff",
      "container-color": "hsl(219, 4%, 7%)",
      "bor-color": "hsl(158, 85%, 42%)"
    },
    fontSize: {
      base: "1.25rem",
      'h1-f-pc': "1.5rem",
      'small-font-size': ".938rem",
      'normal-font-size': ".813rem",
      "smaller-font-size": " .75rem"
    },
    container: {
      center: "true",
    },
  },
  plugins: [],
}
};
