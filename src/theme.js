import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#a9ddde",
            contrastText: "#26547C",
        },
        secondary: {
            main: "#989C94",
        },
    },
    typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
    },
})

export default theme
