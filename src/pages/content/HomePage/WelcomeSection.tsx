import React from "react"
import {
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import Text from "components/Typography/Text"
import Section from "components/Layout/Section"
import ButtonLink from "components/Button/ButtonLink"

const styles = (theme: Theme) => createStyles({})

type Props = WithStyles<typeof styles>

function WelcomeSection(props: Props) {
    return (
        <Section>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                spacing={3}
            >
                <Grid item>
                    <Text variant="h3" color="textSecondary" align="center">
                        Welcome to TASA @ UMCP
                    </Text>
                </Grid>
                <Grid item>
                    <Text variant="body1" color="textPrimary" align="center">
                        <b>Taiwanese American Student Association (TASA)</b> is
                        a social and cultural student organization that aims to
                        celebrate Taiwanese culture. We welcome people from any
                        cultural background as long as you are curious or
                        passionate about Taiwanese culture. We have weekly GBMS
                        on <b>Mondays 7pm - 9pm</b> in Stamp Student Union and
                        host multiple events each semester. Want to learn more?
                        Check out what we're about.
                    </Text>
                </Grid>
                <Grid item>
                    <ButtonLink to="about" variant="contained" color="primary">
                        About TASA
                    </ButtonLink>
                </Grid>
            </Grid>
        </Section>
    )
}

export default withStyles(styles)(WelcomeSection)
