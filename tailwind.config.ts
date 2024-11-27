import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // font sizes
      fontSize: {
        h1: ["39px", { lineHeight: "1.2" }],
        h2: ["31px", { lineHeight: "1.2" }],
        h3: ["25px", { lineHeight: "1.2" }],
        b2: ["20px", { lineHeight: "1.5" }],
        b1: ["16px", { lineHeight: "1.5" }],
        c1: ["13px", { lineHeight: "1.5" }],
      },
      colors: {
        // custom colors
        "custom-primary": {
          900: "#00112C",
          800: "#012359",
          700: "#013586",
          600: "#0247B3",
          500: "#0359E0",
          400: "#3278E5",
          300: "#6298EB",
          200: "#92B7F1",
          100: "#C2D7F7",
          50: "#F2F6FD",
        },
        "custom-secondary": {
          900: "#00272C",
          800: "#014F59",
          700: "#017786",
          600: "#029FB3",
          500: "#03C7E0",
          400: "#32D1E5",
          300: "#62DCEB",
          200: "#92E6F1",
          100: "#C2F1F7",
          50: "#F2FCFD",
        },
        "custom-tertiary": {
          900: "#322807",
          800: "#66500E",
          700: "#997916",
          600: "#CCA11D",
          500: "#FFCA25",
          400: "#FFD44E",
          300: "#FFDE77",
          200: "#FFE8A1",
          100: "#FFF2CA",
          50: "#FFFCF4",
        },
        "custom-dark": {
          900: "#050505",
          800: "#0B0B0B",
          700: "#101010",
          600: "#161616",
          500: "#1C1C1C",
          400: "#474747",
          300: "#727272",
          200: "#9D9D9D",
          100: "#C8C8C8",
          50: "#EFEFEF",
        },
        "custom-status": {
          danger: {
            500: "#CB2E27",
            50: "#FCF4F4",
          },
          warning: {
            500: "#FFAD0D",
            50: "#FFFAF2",
          },
          success: {
            500: "#2A7E2E",
            50: "#F4F8F4",
          },
          info: {
            500: "#0C6FBF",
            50: "#F2F7FB",
          },
        },
        "custom-generic": {
          black: "#1C1C1C",
          white: "#FFFFFF",
          "white-bg": "#F6F6F6",
        },
        // shadcn colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // custom typography
    plugin(function ({ addComponents }) {
      addComponents({
        ".heading-h1": {
          fontFamily: "Inter, sans-serif",
          fontSize: "39px",
          fontWeight: "300",
          lineHeight: "1.2",
        },
        ".heading-h2": {
          fontFamily: "Inter, sans-serif",
          fontSize: "31px",
          fontWeight: "600",
          lineHeight: "1.2",
        },
        ".heading-h3": {
          fontFamily: "Inter, sans-serif",
          fontSize: "25px",
          fontWeight: "500",
          lineHeight: "1.2",
        },
        ".body-b2": {
          fontFamily: "Inter, sans-serif",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "1.5",
        },
        ".body-b1": {
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "1.5",
        },
        ".caption-c1": {
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          fontWeight: "400",
          lineHeight: "1.5",
        },
      });
    }),
  ],
} satisfies Config;
