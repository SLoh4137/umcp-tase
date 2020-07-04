import React from "react"
import {
    Grid,
    GridProps,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Hooks
import { BioArrayType } from "hooks/useBios"

// Components
import Bio from "./Bio"
import Text from "components/Typography/Text"

const styles = (theme: Theme) => createStyles({})

// Note EventHookOptions provides
//  tags?: string[],
//  filterFunction?: EventFilterFunction,
//  amount: number,
type Props = WithStyles<typeof styles> & {
    bios: BioArrayType
    xs?: GridProps["xs"]
    sm?: GridProps["sm"]
    md?: GridProps["md"]
    lg?: GridProps["lg"]
    xl?: GridProps["xl"]
}

function BioGrid(props: Props) {
    const {
        classes,
        bios,
        xs = 12,
        sm = 4,
        md = false,
        lg = false,
        xl = false,
    } = props

    const noBiosText =
        bios.length <= 0 ? (
            <Text variant="h5" align="center">
                No bios to show
            </Text>
        ) : (
            <></>
        )

    return (
        <Grid
            container
            spacing={3}
            alignItems="stretch"
            alignContent="stretch"
            justify="center"
        >
            {noBiosText}
            {bios.map((bio) => (
                <Grid
                    item
                    xs={xs}
                    sm={sm}
                    md={md}
                    lg={lg}
                    xl={xl}
                    key={bio.node.id}
                >
                    <Bio bioData={bio} />
                </Grid>
            ))}
        </Grid>
    )
}

export default withStyles(styles)(BioGrid)
