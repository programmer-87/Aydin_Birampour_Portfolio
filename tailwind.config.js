/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./assets/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                navy: '#0A192F',
                navyLight: '#112240',
                turquoise: '#64FFDA',
                grayLight: '#8892B0',
                gold: '#D4AF37',
            },
            fontFamily: {
                vazir: ['Vazirmatn', 'sans-serif'],
            }
        }
    },
    plugins: [],
}