import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "2.25rem"
      },
      screens: {
        "2xl": "1440px"
      }
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"]
      },
      colors: {
        navy: {
          950: "#021B3A",
          900: "#062B5F",
          800: "#073B7A",
          700: "#0A4A92"
        },
        cyan: {
          500: "#19BDEB",
          600: "#0AA8D6"
        },
        teal: {
          500: "#14B8A6",
          600: "#0F9F90"
        },
        green: {
          500: "#7AC943"
        },
        surface: {
          soft: "#F6FAFE",
          blue: "#EEF8FF"
        },
        slate: {
          950: "#0F172A",
          700: "#334155",
          500: "#64748B"
        }
      },
      boxShadow: {
        soft: "0 16px 45px rgba(2, 27, 58, 0.08)",
        card: "0 12px 30px rgba(6, 43, 95, 0.1)",
        glow: "0 24px 70px rgba(25, 189, 235, 0.22)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      backgroundImage: {
        "navy-radial": "radial-gradient(circle at 20% 20%, rgba(25,189,235,.22), transparent 26%), linear-gradient(135deg, #021B3A, #062B5F)"
      }
    }
  },
  plugins: []
};

export default config;
