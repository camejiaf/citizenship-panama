/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#3B82F6',
                bg: '#F9FAFB',
                surface: '#FFFFFF',
                accent: '#818CF8',
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.25rem',
            },
        },
    },
    plugins: [],
};
module.exports = {
    darkMode: 'class', // ← important!
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
}
