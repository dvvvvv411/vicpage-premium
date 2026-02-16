import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        vic: {
          blue: "hsl(var(--vic-blue))",
          "blue-light": "hsl(var(--vic-blue-light))",
          "blue-medium": "hsl(var(--vic-blue-medium))",
          indigo: "hsl(var(--vic-indigo))",
          "indigo-light": "hsl(var(--vic-indigo-light))",
          dark: "hsl(var(--vic-dark))",
          navy: "hsl(var(--vic-navy))",
          gray: "hsl(var(--vic-gray))",
          line: "hsl(var(--vic-line))",
          surface: "hsl(var(--vic-surface))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background, 0 0% 98%))",
          foreground: "hsl(var(--sidebar-foreground, 240 5.3% 26.1%))",
          primary: "hsl(var(--sidebar-primary, 240 5.9% 10%))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground, 0 0% 98%))",
          accent: "hsl(var(--sidebar-accent, 240 4.8% 95.9%))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground, 240 5.9% 10%))",
          border: "hsl(var(--sidebar-border, 220 13% 91%))",
          ring: "hsl(var(--sidebar-ring, 217.2 91.2% 59.8%))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
