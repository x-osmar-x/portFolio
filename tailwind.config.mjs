import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
		'sans': ['Helvetica', 'Arial', 'sans-serif','Press Start 2P'],
      },
    },
  },
  plugins: [],
  
}