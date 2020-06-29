import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import {
    Button,
    Container,
    Grid,
    Theme,
    createStyles,
    WithStyles,
    withStyles,
    TextField,
} from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"
import { ContainerProps } from "@material-ui/core/Container"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(2),
            backgroundColor: "white",
            padding: theme.spacing(2),
            paddingLeft: theme.spacing(3),
            width: "100%",
            borderRadius: theme.shape.borderRadius,
        },
        textField: {
            marginBottom: theme.spacing(1),
            [theme.breakpoints.down("xs")]: {
                marginLeft: theme.spacing(2),
            },
        },
        icon: {
            marginTop: theme.spacing(1),
        },
        button: {
            height: "100%",
        },
    })

type Props = WithStyles<typeof styles> & {
    maxWidth?: ContainerProps["maxWidth"]
}

function Newsletter(props: Props) {
    const { classes, maxWidth = "lg" } = props
    const [email, setEmail] = useState<string>("")
    const [msg, setMsg] = useState<string>()
    const [disabled, setDisabled] = useState<boolean>(false)

    const handleChange = (event: React.FormEvent<EventTarget>) =>
        setEmail((event.target as HTMLInputElement).value)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setDisabled(true)
        setMsg("Sending...")

        const response = await addToMailchimp(email)
        if (response.result === "error") {
            if (response.msg.toLowerCase().includes("already subscribed")) {
                setMsg("You are already on this list!")
            } else {
                setMsg("Some error occured while subscribing to list.")
            }
            setDisabled(false)
        } else {
            setMsg(
                "Successfully added to list! Please check your email and confirm registration."
            )
        }
    }

    return (
        <Container maxWidth={maxWidth} className={classes.root}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={1}>
                        <EmailIcon className={classes.icon} />
                    </Grid>
                    <Grid item xs={10} sm={8}>
                        <TextField
                            required
                            className={classes.textField}
                            label="Email"
                            name="email"
                            fullWidth
                            value={email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button
                            disabled={disabled}
                            className={classes.button}
                            fullWidth
                            variant="contained"
                            color="secondary"
                        >
                            Subscribe
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default withStyles(styles)(Newsletter)
