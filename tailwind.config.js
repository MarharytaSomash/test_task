module.exports = {
    purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    darkMode: false,
    theme: {
        extend: {
            width: {
                45: "45px",
                82: "82px",
            },
            height: {
                100: "100px",
                45: "45px",
                82: "82px",
                194: "194px",
                266: "266px",
            },
            margin: {
                400: "400px",
            },
            font: {
                space: "Space Grotesk",
            },
            background: {
                orange: "#ED5E21",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
