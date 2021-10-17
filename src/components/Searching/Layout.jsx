import React from 'react';
import { useContext } from 'react'
import { makeStyles } from '@mui/styles';
import { GlobalContext } from '../../App';
import { Typography, TextField, Grid } from '@mui/material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Visualizer from './Visualizer';
import Steps from './Steps';

const primary = '#faf6f2'
const secondary = '#232323'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: 20,
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#232323',
            },
        },
    },
    optionContainer:{
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
        outline: '#232323 !important',
    }
});

export default function Layout() {
    const globalContext = useContext(GlobalContext);
    const [alignment, setAlignment] = React.useState('linearsearch');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const classes = useStyles();
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
                    <TextField id="outlined-basic" variant="outlined" className={classes.arrayInput} size="small" />
                </span>
            </div>
            <Grid container spacing={2}>
                <Grid item md={8} sm={12}>
                    <Visualizer/>
                </Grid>
                <Grid item md={4} sm={12}>
                    <Steps />
                </Grid>
            </Grid>
        </div >
    )
}
