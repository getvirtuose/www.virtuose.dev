const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge:
    process.env.NODE_ENV === "production"
      ? ["./src/**/*.html", "./src/**/*.tsx"]
      : [],
  theme: {
    extend: {
      colors: {
        "warm-gray": colors.warmGray,
        teal: colors.teal,
      },
      padding: {
        full: "100%",
      },
      maxWidth: {
        24: "6rem",
        16: "4rem",
      },
      screens: {
        xs: { raw: "(max-width: 320px)" },
        "small-height": { raw: "(max-height: 640px)" },
      },
      fontSize: {
        "3xs": [".50rem", "0.50rem"],
        "2xs": [".65rem", "0.65rem"],
      },
      keyframes: {
        headShake: {
          "0%": {
            transform: "translateX(0)",
          },
          "6.5%": {
            transform: "translateX(-6px) rotateY(-9deg)",
          },
          "18.5%": {
            transform: "translateX(5px) rotateY(7deg)",
          },
          "31.5%": {
            transform: "translateX(-3px) rotateY(-5deg)",
          },
          "43.5%": {
            transform: "translateX(2px) rotateY(3deg)",
          },
          "50%": {
            transform: "translateX(0)",
          },
        },
        bounceHarder: {
          "0%, 100%": {
            transform: "translateY(-50%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        bounceHarder: "bounceHarder 500ms infinite",
        headShake: "headShake 1s ease-in-out infinite",
        headShakeOnce: "headShake 1s ease-in-out",
      },
    },
  },
  variants: {
    animation: ["hover", "focus"],
    extend: {
      padding: ["hover"],
      display: ["group-hover"],
      transform: ["group-hover"],
      translate: ["group-hover"],
      scale: ["group-hover"],
      zIndex: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
