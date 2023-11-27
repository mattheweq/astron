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
        disc: "#f64056",
        chartBg: "#F8E9DD",
        orangi: "#FF4E2B",
        blueish: "#76B5BC",
        lawnGreen: "#007300",
        lightGreen: "#1eb361"

      },
      gridTemplateColumns: {
        "lemon": "repeat(auto-fit, minmax(400px, 1fr))"
      }
    },
  },
	plugins: [require("@tailwindcss/typography")],
}
