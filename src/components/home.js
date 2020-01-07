import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    intro: {
        marginTop: '20vh',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        fontWeight: '400',
        fontSize: '22px'
    }
}));

export default function Home() {

    const classes = useStyles();

    return (
        <Grid id={'home'} container className={classes.root} alignItems="center">
            <Avatar src={process.env.PUBLIC_URL + '/profile.png'} className={classes.avatar} />
            <p className={classes.intro}>I'm Benjamin Fischer and I do programming, welcome to my portfolio.</p>
        </Grid>
    );
}
