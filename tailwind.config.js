/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            spacing: {
                "col-7": "calc(100% * 7/12 - 15px)",
                "col-6": "calc(100% * 6/12 - 15px)",
                "col-5": "calc(100% * 5/12 - 15px)",
            },
            colors: {
                primary: "#1E3240",
                secondary: "#BDBDBD",
                hero: "#AFD4E2",
            },
        },
        container: {
            screens: {
                xl: "1110px",
            },
            center: true,
        },
    },
    plugins: [],
};
