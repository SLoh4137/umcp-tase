const config = {
    siteTitle: "UMCP TASE", // Site title.
    siteTitleShort: "UMCP TASE", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "UMCP Taiwanese American Student Association", // Alternative site title for SEO.
    siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "umcptase.netlify.com", // Domain of your website without pathPrefix.
    pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
    fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
    siteDescriptionShort: "University of Maryland, College Park Taiwanese American Student Association",
    siteDescriptionLong: "University of Maryland, College Park Taiwanese American Student Association", // Website description used for RSS feeds/meta description tag.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "MMM D, YYYY", // Date format for display.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    // userLinks: [
    //   {
    //     label: "Facebook",
    //     url: "https://www.facebook.com/movingoolong/",
    //     iconClassName: "fa fa-facebook"
    //   },
    //   {
    //     label: "Instagram",
    //     url: "https://www.instagram.com/movingoolongpod/",
    //     iconClassName: "fa fa-instagram"
    //   },
    //   {
    //     label: "Email",
    //     url: "mailto:movingoolong@gmail.com",
    //     iconClassName: "fa fa-envelope"
    //   }
    // ],
    copyright: "Copyright © 2020. UMCP TASE" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
    config.pathPrefix = "";
} else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
    config.siteUrl = config.siteUrl.slice(0, -1);

module.exports = config;
