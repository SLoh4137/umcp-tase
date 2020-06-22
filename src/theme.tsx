import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#303f9f",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#8e24aa",
        },
        info: { // We'll use this for the color of text
            main: "#999",
            dark: "#555", 
        }
    },
    typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
    },
})

export default responsiveFontSizes(theme)
