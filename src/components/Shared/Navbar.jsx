import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

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

    return (
        <Box className={classes.root}>
            <AppBar style={{ backgroundColor: '#232323', color: 'white' }} position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.menuLinks}>
                            <Button color="inherit">Algo Visualizer</Button>

                        </Link>
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
