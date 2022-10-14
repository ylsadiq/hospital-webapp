module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#2D89FF",
          neutral: "#3d4451",
          ghost: "#642DFF",
          "base-100": "#ffffff",
        },
        extend: {
          animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
          },
          keyframes: {
            wiggle: {
              '0%, 100%': { transform: 'rotate(-3deg)' },
              '50%': { transform: 'rotate(3deg)' },
            }
          },
        }
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
