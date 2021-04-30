import React from 'react';
import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { RunningContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Visualizer from './Visualizer';
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
    const runningContext = useContext(RunningContext);
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container direction="row" spacing={2} alignItems="center" justify="center">
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={2}>
                        <Grid container direction="column" alignItems="center" justify="center">
                            <Grid item >
                                <Button style={{ textTransform: 'capitalize', }} onClick={() => { runningContext.bubbleSort() }}>
                                    <Typography variant='h6'>
                                        Bubble Sort
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button style={{ textTransform: 'capitalize', }} onClick={() => { runningContext.bubbleSort() }}>
                                    <Typography variant='h6'>
                                        Heap Sort
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button style={{ textTransform: 'capitalize', }} onClick={() => { runningContext.bubbleSort() }}>
                                    <Typography variant='h6'>
                                        Merge Sort
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button style={{ textTransform: 'capitalize', }} onClick={() => { runningContext.bubbleSort() }}>
                                    <Typography variant='h6'>
                                        Selection Sort
                                    </Typography>
                                </Button>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={2}>
                        <Visualizer></Visualizer>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={2}>
                        <Typography>Visitor Count</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Main
