import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Button, Container, Grid, Theme, createStyles, WithStyles, withStyles, TextField } from "@material-ui/core"

const styles = (theme: Theme) => createStyles({
    root: {

    },
    title: {
        color: theme.palette.primary.main,
    },
});

type Props = {} & WithStyles<typeof styles>;

function Newsletter(props: Props) {
    const { classes } = props;
    const [email, setEmail] = useState<string>("");
    const [msg, setMsg] = useState<string>();
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleChange = (event: React.FormEvent<EventTarget>) => setEmail((event.target as HTMLInputElement).value);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setDisabled(true);
        setMsg("Sending...");

        const response = await addToMailchimp(email);
        if (response.result === "error") {
            if (response.msg.toLowerCase().includes("already subscribed")) {
                setMsg("You are already on this list!");
            } else {
                setMsg("Some error occured while subscribing to list.")
            }
            setDisabled(false);
        } else {
            setMsg("Successfully added to list! Please check your email and confirm registration.")
        }
    };

    return (
        <Container maxWidth="lg" className={classes.root}>
            <h1 className={classes.title}>Sign up for our newsletter!</h1>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            label="Email"
                            name="email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Button disabled={disabled} fullWidth>Sign up</Button>
                    </Grid>
                </Grid>


            </form>
        </Container>
    );
}

export default withStyles(styles)(Newsletter);