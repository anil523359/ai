import plugin from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {

    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lg2: "1200px",
      xl: "1440px",
      // xxl: "1920px",
    },
    colors: {
      primary: "#2F1893",
      payroll_primary: "#011165",
      light: "#969696",
      white: "#FFFF",
    },
    extend: {
      maxWidth: {
        1920: "1920px",
      },
      boxShadow: {
        custom: "10px 10px 20px 10px #00000033",
      },
      dropShadow: {
        x: "0 0 15px rgba(255, 255, 255, 0.5)",
        telegram: "0 0 15px rgba(0, 136, 204, 0.5)",
        facebook: "0 0 15px rgba(59, 89, 152, 0.5)",
        whatsapp: "0 0 15px rgba(37, 211, 102, 0.5)",
        discord: "0 0 15px rgba(211, 99, 46, 0.5)",
        white: "0 0 10px rgba(255, 255, 255, 0.5)",
      },
      // backgroundImage: {
      //   "custom-gradient":
      //     "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
      // },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".bg-custom-gradient": {
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
