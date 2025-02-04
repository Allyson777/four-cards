import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "redhsl": "var(--redhsl)",
        "cyanhsl": "var(--cyanhsl)",
        "orangehsl": "var(--orangehsl)",
        "bluehsl": "var(--bluehsl)",
        "darkBlue": "var(--darkBlue)"
      },
    },
  },
  plugins: [],
} satisfies Config;
