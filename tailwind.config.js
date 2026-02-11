/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#13ec13",
                "background-light": "#f6f8f6",
                "background-dark": "#102210",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
        },
    },
    plugins: [],
}
