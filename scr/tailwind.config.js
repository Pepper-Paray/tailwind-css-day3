/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                cool: {
                    blue: "#3ABEFF",
                    purple: "#A259F7",
                    pink: "#FF6F91",
                    yellow: "#FFD166",
                    green: "#06D6A0",
                    dark: "#22223B",
                    light: "#F8F7FF"
                },
                maroon: {
                    500: '#800000',
                },
                pink: {
                    500: '#FFC0CB',
                },
            },
            animation: {
                pop: 'pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both'
            },
            keyframes: {
                pop: {
                    '0%': { transform: 'scale(0.8)', opacity: '0.7' },
                    '80%': { transform: 'scale(1.1)', opacity: '1' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                }
            }
        }
    },
    plugins: [],
}