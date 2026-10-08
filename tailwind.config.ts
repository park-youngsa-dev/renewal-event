import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.125rem" }],
        sm: ["1rem", { lineHeight: "1.375rem" }],
        base: ["1.125rem", { lineHeight: "1.625rem" }],
        lg: ["1.25rem", { lineHeight: "1.875rem" }],
        xl: ["1.375rem", { lineHeight: "1.875rem" }],
        "2xl": ["1.625rem", { lineHeight: "2.125rem" }],
        "3xl": ["2rem", { lineHeight: "2.375rem" }],
        "4xl": ["2.375rem", { lineHeight: "2.625rem" }],
      },
      fontFamily: {
        sans: ["Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
