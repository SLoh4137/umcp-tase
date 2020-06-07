/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 * Usually the same code that's in gatsby-browser
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const Layout = require("./src/components/Layout/Layout").default;
const ThemeProvider = require("@material-ui/styles/ThemeProvider").default;
const theme = require("./src/theme").default;

exports.wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout {...props}>{element}</Layout>;
}

exports.wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            {element}
        </ThemeProvider>
    );
}