module.exports = {
    purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    darkMode: false,
    theme: {
        extend: {
            width: {
                45: "45px",
            },
            height: {
                100: "100px",
                45: "45px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
