import React from 'react';
import { useContext } from 'react'
import { makeStyles } from '@mui/styles';
import { GlobalContext } from '../../App';
import { Typography, TextField, Grid, Button } from '@mui/material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Visualizer from './Visualizer';
import Steps from './Steps';

const primary = '#faf6f2'
const secondary = '#232323'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: 20,
    },
    optionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: "5rem",
    },
    optionButton: {
        border: '2px solid #232323',
        backgroundColor: primary,
        textTransform: 'uppercase',
        padding: '0.5rem 3rem',
        color: secondary,
        margin: '0 0.5rem'
    },
    arrayInput: {
        padding: 0,
        marginLeft: '1rem',
        width: '100%',
    }
});

export default function Searching() {
    const globalContext = useContext(GlobalContext);
    const [alignment, setAlignment] = React.useState('linearsearch');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const classes = useStyles();

    const handleClick = (e) => {
        alignment === 'linearsearch' ? globalContext.dispatch({ type: 'LINEARSEARCH' }) : globalContext.dispatch({ type: 'BINARYSEARCH' });
    }

    return (
        <div className={classes.root}>
            <div className={classes.optionContainer}>
                <span style={{ display: 'inline' }}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                    >
                        <ToggleButton value="linearsearch">Linear Search</ToggleButton>
                        <ToggleButton value="binarysearch">Binary Search</ToggleButton>
                    </ToggleButtonGroup>
                </span>
                <span style={{ display: 'inline-flex' }}>
                    <Typography>Enter custom array (Separate each number with a comma): </Typography>
                    <TextField id="outlined-basic" variant="outlined" className={classes.arrayInput} size="small" color="secondary" />
                </span>
            </div>
            <Grid container direction="column" justify="center" alignItems="center" sx={{ width: '100%' }}>
                <Grid item xs={10}>
                    <Grid container spacing={2} sx={{ width: '90vw' }}>
                        <Grid item md={8} sm={12}>
                            <Visualizer />
                        </Grid>
                        <Grid item md={4} sm={12}>
                            <Steps />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} sx={{ display: 'flex', mt: '2rem', justifyContent: 'center' }}>
                    <Typography sx={{ mt: '0.2rem' }}>
                        Enter the number you want to search for:
                    </Typography>
                    <TextField id="outlined-basic" type="number" variant="outlined" size="small" sx={{ width: '4rem', ml: '1rem' }} />
                    <Button variant="contained" color="secondary" sx={{ ml: '1rem' }} onClick={(e) => { handleClick(e) }}>Start</Button>
                </Grid>
            </Grid>

        </div >
    )
}
