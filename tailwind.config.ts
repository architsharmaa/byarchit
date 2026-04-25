import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-background": "#1d1c14",
        "primary-container": "#1c1b1b",
        "surface-container-low": "#f9f3e7",
        "tertiary-container": "#390b04",
        "surface-dim": "#dfd9ce",
        "on-tertiary-fixed-variant": "#71352a",
        "secondary": "#5e5e5b",
        "surface-variant": "#e8e2d6",
        "background": "#fff9ed",
        "outline": "#747878",
        "primary": "#000000",
        "primary-fixed-dim": "#c8c6c5",
        "on-primary-fixed-variant": "#474746",
        "outline-variant": "#c4c7c7",
        "inverse-primary": "#c8c6c5",
        "on-secondary-fixed-variant": "#474744",
        "on-error": "#ffffff",
        "surface-container-highest": "#e8e2d6",
        "inverse-surface": "#333028",
        "primary-fixed": "#e5e2e1",
        "error": "#ba1a1a",
        "tertiary-fixed": "#ffdad3",
        "secondary-fixed": "#e4e2dd",
        "on-surface": "#1d1c14",
        "tertiary-fixed-dim": "#ffb4a5",
        "on-secondary-container": "#63635f",
        "on-error-container": "#93000a",
        "on-tertiary": "#ffffff",
        "secondary-container": "#e1dfdb",
        "surface-bright": "#fff9ed",
        "on-primary": "#ffffff",
        "on-primary-fixed": "#1c1b1b",
        "surface": "#fff9ed",
        "error-container": "#ffdad6",
        "surface-tint": "#5f5e5e",
        "inverse-on-surface": "#f6f0e4",
        "surface-container-lowest": "#ffffff",
        "surface-container": "#f3ede1",
        "on-secondary-fixed": "#1b1c19",
        "on-secondary": "#ffffff",
        "on-primary-container": "#858383",
        "surface-container-high": "#eee8db",
        "on-surface-variant": "#444748",
        "tertiary": "#000000",
        "on-tertiary-container": "#ba7062",
        "on-tertiary-fixed": "#390b04",
        "secondary-fixed-dim": "#c8c6c2",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        gutter: "32px",
        "stack-md": "32px",
        "container-max": "1280px",
        unit: "8px",
        "stack-sm": "16px",
        "section-padding": "120px",
        "stack-lg": "64px",
      },
      fontFamily: {
        "body-md": ["var(--font-inter)"],
        "display-lg": ["var(--font-newsreader)"],
        "nav-link": ["var(--font-inter)"],
        "headline-md": ["var(--font-newsreader)"],
        "headline-lg": ["var(--font-newsreader)"],
        "display-md": ["var(--font-newsreader)"],
        "body-lg": ["var(--font-inter)"],
        "label-caps": ["var(--font-inter)"],
      },
      fontSize: {
        "body-md": [
          "16px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
        "display-lg": [
          "84px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
        "nav-link": [
          "14px",
          {
            lineHeight: "1.0",
            fontWeight: "500",
          },
        ],
        "headline-md": [
          "32px",
          {
            lineHeight: "1.3",
            fontWeight: "400",
          },
        ],
        "headline-lg": [
          "42px",
          {
            lineHeight: "1.2",
            fontWeight: "400",
          },
        ],
        "display-md": [
          "60px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "1.7",
            fontWeight: "400",
          },
        ],
        "label-caps": [
          "12px",
          {
            lineHeight: "1.0",
            letterSpacing: "0.1em",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
