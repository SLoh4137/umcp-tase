import React, { useState } from "react"
import {
    Container,
    ContainerProps,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import VisibilitySensor from "react-visibility-sensor"
import { useSpring, animated } from "react-spring"

import Text, { TextColorOptions } from "components/Typography/Text"
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

const AnimatedText = animated(Text)

const styles = (theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(4),
        },
        title: {
            marginBottom: theme.spacing(2),
        },
    })

type Props = WithStyles<typeof styles> &
    TextColorOptions & {
        maxWidth?: ContainerProps["maxWidth"]
        title?: string
        children: React.ReactNode
    }

function Section(props: Props) {
    const {
        classes,
        maxWidth = "md",
        title,
        color = "textSecondary",
        children,
    } = props

    const [isVisible, setVisible] = useState(false)
    const springStyle = useSpring({
        to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0px)" : "translateY(-10px)",
        },
        immediate: usePrefersReducedMotion(),
    })

    return (
        <Container maxWidth={maxWidth} className={classes.root}>
            <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
                spacing={3}
            >
                {title ? (
                    <VisibilitySensor
                        onChange={(isVisible) => setVisible(isVisible)}
                        active={!isVisible}
                    >
                        <AnimatedText
                            variant="h3"
                            color={color}
                            align="center"
                            className={classes.title}
                            heading
                            style={springStyle}
                        >
                            {title}
                        </AnimatedText>
                    </VisibilitySensor>
                ) : (
                    <></>
                )}
                {children}
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(Section)
