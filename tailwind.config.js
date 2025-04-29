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
        },
        accent: {
          DEFAULT: 'var(--accent)',
        },
        background: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
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