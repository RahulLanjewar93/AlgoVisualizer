import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography, Button, TextField, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { GlobalContext } from '../../App';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: '1rem',
    },
    title: {
        flexGrow: 1,
    },
    menuLinks: {
        marginLeft: '1rem',
        textDecoration: 'none',
        color: 'white'
    }
});

const Navbar = () => {
    const classes = useStyles();
    const { changeArray } = useContext(GlobalContext)
    return (
        <Box className={classes.root}>
            <AppBar style={{ backgroundColor: '#232323', color: 'white' }} position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.menuLinks}>
                            <Button color="inherit">Algo Visualizer</Button>

                        </Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title} display="inline-block">
                        <Grid container>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={4} margin="auto">
                                Enter Custom Array
                            </Grid>
                            <Grid item xs={6}>
                                <TextField onChange={changeArray} fullWidth sx={{ backgroundColor: "#faf6f2", border: "1px solid black 20px" }}></TextField>
                            </Grid>
                        </Grid>
                    </Typography>
                    <Link to="/Sorting" className={classes.menuLinks}>
                        <Button color="inherit">Sorting</Button>
                    </Link>
                    <Link to="/Searching" className={classes.menuLinks}>
                        <Button color="inherit">Searching</Button>
                    </Link>
                    <Link to="/Pathfinding" className={classes.menuLinks}>
                        <Button color="inherit">Path Finding</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
