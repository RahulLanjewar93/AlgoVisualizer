import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 20,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
    },
}));
const Main = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" spacing={2} alignItems="center" justify="center">
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Grid container direction="column" alignItems="center" justify="center">
                            <Grid item >
                                <Typography variant='h5'>
                                    Merge Sort
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography>Hello</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography>Hello</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Main
