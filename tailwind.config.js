/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD700",
          brown: "#5C4A36",
          ink: "#1B1B1B",
        },
        surface: {
          base: "#faf7ef",
          card: "#ffffff",
        },
        bitcoin: "#F7931A",
        rewards: "#1652F0",
        // Semantic tokens mapped to CSS variables
        border: "var(--border)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
      },

      borderRadius: {
        xl: "20px",
      },

      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.06)",
      },

      spacing: {
        cardPad: "1.25rem",
      },
    },
  },
  plugins: [],
}
