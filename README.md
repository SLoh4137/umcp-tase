# UMCP TASE
# Table of Contents
1. [Installation](#installation)
    1. [Gatsby](#gatsby)
2. [Customizing Theme and Styling](#customizing-theme-and-styling)
3. [Mailchimp Integration](#mailchimp-integration)
4. [Adding New Events](#adding-new-events)
5. [Editing Bios](#editing-bios)


# Installation
Everything is already set-up in the [package.json](package.json) so all you have to do is
```
npm install
```

## Gatsby
You will have to install gatsby-cli which you can do with `npm install -g gatsby-cli`
Their website has a nice [tutorial](https://www.gatsbyjs.org/tutorial/) which I recommend following. 

You also can find the original [Gatsby's original README.md here](https://github.com/gatsbyjs/gatsby-starter-hello-world). That doc details a quick look at some file structure and basic files for this repo 

# Typescript Module Resolution
https://www.typescriptlang.org/docs/handbook/module-resolution.html
Change in tsconfig.json

[When to use type vs interface for Typescript](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)

# Customizing Theme and Styling
This site uses [Material-UI](https://material-ui.com/) components for styling. The theme can be modified in [`theme.js`](/src/theme.js) to change the primary and secondary colors, the spacing used throughout the site, and typography. More info about customizing theme can be found on the [official Material-UI cutomization guide](https://material-ui.com/customization/theming/). The theme is provided to all the pages in [`gatsby-browser.js`](gatsby-browser.js) via ThemeProvider.

The Material-UI framework relies on the idea of [css-in-js](https://css-tricks.com/bridging-the-gap-between-css-and-javascript-css-in-js/). In particular, we use Material-UI's [withStyles](https://material-ui.com/styles/basics/) method of adding styles. 

We can add styles to components by defining CSS in the `styles` object. There's a slight difference in naming between usual CSS fields and CSS-in-JS fields, but that's usually replacing - with camelCase. We can also use media queries to use different styles depending on the size of the screen! Examples can be seen in the [`Header.tsx`](src/components/Layout/Header.tsx) component where it sets the fontsize to be "18px" if the screen is smaller than the "sm" size defined in the theme. 
```
[theme.breakpoints.down("sm")]: {
    fontSize: "18px",
},
```

The styles object takes in the optional theme parameter to use information specified by our theme. We use the `createStyles` function so that TypeScript can properly recognize the type of the styles object. We then use `WithStyles<typeof styles>` to get the type of the styles object. The withStyles function passes down `classes` as a prop to the component (this is known as [higher order composition](https://medium.com/@rossbulat/how-to-use-react-higher-order-components-c0be6821eb6c)), and the component can then use the `classes` object to extract out the classNames. 

# Mailchimp Integration
1. Add the Mailchimp endpoint to `gatsby-config.js` by following the instructions listed on [gatsby-plugin-mailchimp](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/) 
2. Modify and stylize the [`Newsletter.tsx`](/src/components/Mailchimp/Newsletter.tsx) component to look how you want it to
3. Use the [`Newsletter.tsx`](/src/components/Mailchimp/Newsletter.tsx) component where you want to display it

# Adding New Events
Through Netlify CMS, we have a nice interface to add events. You can access it by following the url of the site `[url]/admin` Then, sign in with an account that has access to the repository. Once you're in, you should see ![Netlify CMS admin panel](/docs/netlify-cms-events.png)

You can click on an existing event to edit it or on "New Events" to create a new event. From there, you should see ![Netlify CMS add event](/docs/netlify-cms-events-edit.png). Once all the fields are filled out, hit publish and a markdown file and image file should be added to the GitHub repository! Then, Netlify will rebuild the site with the new content.

## How does it work?
When new events are created via the Netlify CMS interface, a markdown file gets added to [`content/events`](/content/events) and the uploaded image gets added to [`static/assets/`](/static/assets). Then, [`gatsby-node.js`](gatsby-node.js) creates a new page using [`EventPageTemplate.tsx`](/src/templates/EventPageTemplate.tsx). 

The markdown file has a section called frontmatter and the actual body which should be the description. We can then query graphql to get this file. For the event pages, this happens at the page level, so we can query for the file and the corresponding image.

For everywhere else, we have to use static queries which can't take parameters. We get the events through the hook [`useEvents.tsx`](/src/hooks/useEvents.tsx). More about hooks can be found [on the official React site](https://reactjs.org/docs/hooks-intro.html). The useEvents hook queries for all of the event markdown files and every image. Then, it filters based off any tags given and returns a combined node with the associated image. 

We can use the result from useEvents to display the data in various ways such as in a grid. If we wanted to get upcoming or previous events, we can add a filter to the useEvents hook which can do return us events that occur before or after a certain date. 

The [`EventPreview.tsx`](/src/components/Events/EventPreview.tsx) component displays a card with information about the event. If you click on the card, it brings us to the dedicated page for that event. 

# Editing Bios
Similar to adding events, go to the Netlify CMS admin panel. Click on the bios section on the side, and you should be able to add new bios and edit existing ones.

## How does it work?
We get all the bios using the [`useBios.tsx`](/src/hooks/useBios.tsx) hook. Like the useEvents hook, it runs a static query that gets all the content labeled bio and links them together with their associated images. Then, we can use the [`Bio.tsx`](/src/components/Bios/Bio.tsx) component to display the data.

We can change how the bios look on the site by editing [`Bio.tsx`](/src/components/Bios/Bio.tsx). 


