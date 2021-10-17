import React from 'react';
import { useContext } from 'react'
import { makeStyles } from '@mui/styles';
import { GlobalContext } from '../../App';
import { Grid, Paper, Typography, Button } from '@mui/material';
import Visualizer from './Visualizer';
import Steps from './Steps';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 20,
        marginTop: '10rem',
    },
    paper: {
        padding: '1rem',
        margin: 'auto',
    },
}));

const Sorting = () => {
    const globalContext = useContext(GlobalContext);
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container direction="row" spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} lg={3}>
                    <Paper className={classes.paper} elevation={2}>
                        <Grid container direction="column" alignItems="center" justify="center">
                            <Grid item >
                                <Button style={{ textTransform: 'capitalize' }} onClick={() => { globalContext.dispatch({ type: 'BUBBLE' }) }}>
                                    <Typography variant='h6'>
                                        Bubble Sort
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button style={{ textTransform: 'capitalize', }} onClick={() => { globalContext.dispatch({ type: 'SELECTION' }) }}>
                                    <Typography variant='h6'>
                                        Selection Sort
                                    </Typography>
                                </Button>
                            </Grid>

                        </Grid>

                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper className={classes.paper} elevation={2}>
                        <Visualizer></Visualizer>
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Paper className={classes.paper} elevation={2}>
                        <Steps></Steps>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Sorting