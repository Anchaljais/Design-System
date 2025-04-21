// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Required for dark: variants
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          900: 'var(--primary-900)',
          100: 'var(--primary-100)',  // Light blue
        },
        secondary: {
          900: '#78350F',   // Dark amber
          100: '#FEF3C7',   // Light amber
        },
        // Semantic colors
        danger: {
          600: '#DC2626',   // Red
          400: '#F87171',   
        },
        success: {
          600: '#16A34A',   // Green
          400: '#4ADE80',
        },
        warning: {
          600: '#D97706',   // Amber
          400: '#FBBF24',
        },
      },
    },
  },
}