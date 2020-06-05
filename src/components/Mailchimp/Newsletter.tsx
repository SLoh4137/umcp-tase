import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Button, Container, Theme, createStyles, WithStyles, withStyles, TextField } from "@material-ui/core"

const styles = (__: Theme) => createStyles({});

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
        <Container maxWidth="lg">
            <form onSubmit={handleSubmit}>
                <TextField 
                    required 
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={handleChange}
                />
                <Button disabled={disabled}>Sign up</Button>
            </form>
        </Container>
    );
}

export default withStyles(styles)(Newsletter);