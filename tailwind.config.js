/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            // keyframes: {
            //     lebar: {
            //         "0%": "w-[60%] h-[33px]",
            //         "50%": "w-full h-[33px]",
            //         "100%": "w-full h-[300px]",
            //     },
            //     lebarReverse: {
            //         "0%": "w-full h-[300px]",
            //         "50%": "w-full h-[33px]",
            //         "100%": "w-[60%] h-[33px]",
            //     },
            // },

            // animation: {
            //     lebar: "lebar 1s forwards",
            //     lebarReverse: "lebarReverse 1s forwards",
            // },

            boxShadow: {
                card: "0px 2px 18px rgba(0, 0, 0, 0.04)",
            },
            spacing: {
                "col-4": "calc(100% * 4/12 - 15px)",
                "col-5": "calc(100% * 5/12 - 15px)",
                "col-6": "calc(100% * 6/12 - 15px)",
                "col-7": "calc(100% * 7/12 - 15px)",
                "col-8": "calc(100% * 8/12 - 15px)",
                "col-9": "calc(100% * 9/12 - 15px)",
                "col-10": "calc(100% * 10/12 - 15px)",
                "col-11": "calc(100% * 11/12 - 15px)",
                "col-12": "calc(100% - 15px)",
            },
            colors: {
                primary: "#1E3240",
                secondary: "#BDBDBD",
                hero: "#AFD4E2",
            },
        },
        container: {
            screens: {
                sm: "470px",
                md: "598px",
                lg: "854px",
                xl: "1110px",
            },
            center: true,
        },
    },
    plugins: [],
};
