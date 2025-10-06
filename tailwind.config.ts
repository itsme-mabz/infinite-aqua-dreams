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
      colors: {
        ivory: {
          DEFAULT: 'hsl(45, 15%, 97%)', // A warm, clean off-white
          50: 'hsl(45, 15%, 99%)',
          100: 'hsl(45, 15%, 96%)',
          200: 'hsl(45, 15%, 92%)',
          300: 'hsl(45, 15%, 88%)',
          400: 'hsl(45, 15%, 80%)',
          500: 'hsl(45, 15%, 70%)',
          600: 'hsl(45, 15%, 55%)',
          700: 'hsl(45, 15%, 40%)',
          800: 'hsl(45, 15%, 25%)',
          900: 'hsl(45, 15%, 15%)',
        },
        beige: {
          DEFAULT: 'hsl(35, 25%, 90%)', // A warm, subtle beige
          50: 'hsl(35, 25%, 98%)',
          100: 'hsl(35, 25%, 95%)',
          200: 'hsl(35, 25%, 88%)',
          300: 'hsl(35, 25%, 80%)',
          400: 'hsl(35, 25%, 70%)',
          500: 'hsl(35, 25%, 60%)',
          600: 'hsl(35, 25%, 50%)',
          700: 'hsl(35, 25%, 40%)',
          800: 'hsl(35, 25%, 30%)',
          900: 'hsl(35, 25%, 20%)',
        },
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
          DEFAULT: "#003989",
          foreground: "#003989",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['General Sans', 'system-ui', 'sans-serif'],
        dmsans: ['General Sans', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: 'fadeIn 0.6s ease-out',
        slideIn: 'slideIn 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
