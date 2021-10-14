import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';

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
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: '#232323', color: 'white' }} position="fixed">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        Algo Visualizer
                    </Typography>
                    <Link to="/Sorting" className={classes.menuLinks}>
                        <Button color="inherit">Sorting</Button>
                    </Link>
                    <Link to="/Searching" className={classes.menuLinks}>
                        <Button color="inherit">Searching</Button>
                    </Link>
                    <Button color="inherit">Path Finding</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
