/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        primary: "#7856ff",
        yello: "#fefd00",
        blak: "#202123",
        tabs: "#84edb2",
        tabs2: "#b353fc",
        disc: "#f64056"
      },
      gridTemplateColumns: {
        "lemon": "repeat(auto-fit, minmax(400px, 1fr))"
      }
    },
  },
	plugins: [],
}
