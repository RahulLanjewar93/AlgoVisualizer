import React, { useEffect } from 'react';
import { useContext } from 'react'
import { makeStyles } from '@mui/styles';
import { GlobalContext } from '../../App';
import { Typography, TextField, Grid, Button } from '@mui/material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Visualizer from './Visualizer';
import Steps from './Steps';
import RefreshIcon from '@mui/icons-material/Refresh';

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
    const classes = useStyles();

    useEffect(() => {
        if (globalContext.algoState) {
            console.log("Algo was running so reset")
            globalContext.setRandomArray([])
            globalContext.setCurrentElement(0)
            globalContext.setNextElement(1)
            globalContext.setStepsArray(["Please Select Algorithm"])
            globalContext.setCurrentStep([])
        }
    }, [])

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleClick = (e) => {
        if(alignment === 'bubblesort') globalContext.dispatch({ type: 'BUBBLESORT' })
        else if(alignment === 'selectionsort')globalContext.dispatch({ type: 'SELECTIONSORT' });
        else if(alignment === 'mergesort')globalContext.dispatch({ type: 'MERGESORT' });
    }

    const handleNumberChange = (e) => {
        globalContext.setTarget(e.target.value);
    }

    React.useEffect(() => {
        globalContext.dispatch({ type: 'STOP' });
    }, [])

    const insertInArray = () => {
        for (let i = 0; i < 20; i++) {
            globalContext.setRandomArray(prevArray => [...prevArray, Math.floor(Math.random() * 64)]);
        };
    }

    React.useEffect(() => {
        globalContext.setRandomArray([]);
        insertInArray();
        return () => { globalContext.setRandomArray([]); }
    }, []);


    return (
        <div className={classes.root}>
            <div className={classes.optionContainer}>
                <span style={{ display: 'inline' }}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                    >
                        <ToggleButton value="bubblesort">Bubble Sort</ToggleButton>
                        <ToggleButton value="selectionsort">Selection Sort </ToggleButton>
                        <ToggleButton value="mergesort">Merge Sort</ToggleButton>
                    </ToggleButtonGroup>
                    <Button variant="contained" color="secondary" sx={{ ml: '1rem' }} onClick={(e) => { handleClick(e) }}>Sort</Button>

                </span>
                <span style={{ display: 'inline-flex' }}>
                    {/* <Typography>Enter custom array (Separate each number with a comma): </Typography>
                    <TextField id="outlined-basic" variant="outlined" className={classes.arrayInput} size="small" color="secondary" /> */}
                    <RefreshIcon onClick={() => { globalContext.setRandomArray([]); insertInArray() }} />
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
                </Grid>
            </Grid>
        </div >
    )
}
