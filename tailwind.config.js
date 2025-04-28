/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'small': '8px',
        'medium': '16px',
        'large': '24px',
        'round': '9999px',
      },
      colors: {
        /* Primitives */
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        neutral: {
          lightest: 'var(--color-neutral-lightest)',
          lighter: 'var(--color-neutral-lighter)',
          light: 'var(--color-neutral-light)',
          base: 'var(--color-neutral-base)',
          dark: 'var(--color-neutral-dark)',
          darker: 'var(--color-neutral-darker)',
          darkest: 'var(--color-neutral-darkest)',
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
        },
        primary: {
          lightest: 'var(--color-primary-lightest)',
          lighter: 'var(--color-primary-lighter)',
          light: 'var(--color-primary-light)',
          base: 'var(--color-primary-base)',
          dark: 'var(--color-primary-dark)',
          darker: 'var(--color-primary-darker)',
          darkest: 'var(--color-primary-darkest)',
        },
        secondary: {
          lightest: 'var(--color-secondary-lightest)',
          lighter: 'var(--color-secondary-lighter)',
          light: 'var(--color-secondary-light)',
          base: 'var(--color-secondary-base)',
          dark: 'var(--color-secondary-dark)',
          darker: 'var(--color-secondary-darker)',
          darkest: 'var(--color-secondary-darkest)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
        },
        /* Theme Variables */
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        border: {
          primary: 'var(--border-primary)',
          secondary: 'var(--border-secondary)',
        },
      },
    },
  },
}; 