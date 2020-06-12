import React from "react"
import { Link, PageProps } from "gatsby"
import {
    Container,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

import SEO from "components/seo"
import useBios from "hooks/useBios"
import Bio from "components/Bios/Bio"

const styles = (theme: Theme) =>
    createStyles({
        grid: {},
        gridItem: {},
    })

type Props = WithStyles<typeof styles> & PageProps

function BoardPage(props: Props) {
    const { classes } = props
    const data = useBios()
    return (
        <>
            <SEO title="Board" />
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={3}
                    alignItems="stretch"
                    alignContent="stretch"
                    justify="center"
                >
                    {data.map((bio) => (
                        <Grid
                            item
                            className={classes.gridItem}
                            xs={12}
                            sm={4}
                            lg={3}
                            key={bio.node.id}
                        >
                            <Bio bioData={bio} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default withStyles(styles)(BoardPage)
