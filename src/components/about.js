import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
    },
    text: {
        fontWeight: '400',
        fontSize: '18px'
    }
}));

export default function About(props) {

    const classes = useStyles();

    return (
        <Grid id={'about'} container className={classes.root}
              justify="center"
              alignItems="center">
            <Grid item xs={4}>
                <h3> About me </h3>
                <hr/>
                <p className={classes.text}>
                    I currently live in Linköping, Sweden where i work as a software developer for Configura.
                    At Configura i help develop their C++ platform to meet the needs of customers across multiple industries.
                </p>
                <p className={classes.text}>
                    more infos here
                </p>
            </Grid>
        </Grid>
    );
}
