module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5D54C1",
        secondary: "#FFE5E6",
        Tertiary: "#D9EEFF",
        AccentYellow: "#FFEBA3",
        Accent2: "#6C5FF3",
        Accent3: "#FFC6BB",
        Accent4: "#8D83FF",
        GradientsLightblueColor1: "E7F5FF",
        GradientsLightblueColor2: "CAE8FF",
        GradientsPinkColor1: "#FDF8F8",
        GradientsPinkColor2: "#FFE5E6",
        GradientsPurpleColor1: "#F6F1FA",
        GradientsPurpleColor2: "#E9E0F3",
      },
    },

    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
