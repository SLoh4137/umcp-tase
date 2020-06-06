import React from "react"
import { Link, PageProps } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles} from "@material-ui/core"

// Components
import SEO from "components/seo"
import ContactUsForm from "components/ContactUs/Form"

const styles = (theme: Theme) => createStyles({
  root: {
      top: 'auto',
      bottom: 0,
      padding: theme.spacing(1),
  },
  grow: {
      flexGrow: 1,
  },
  copyright: {
      marginLeft: theme.spacing(3),
      color: theme.palette.primary.main,
  },
});

type Props = PageProps & WithStyles<typeof styles>;

function ContactUsPage(__: Props) {
  return (
    <>
      <SEO title="Contact Us" />
      <ContactUsForm />
    </>
  );
}

export default ContactUsPage
