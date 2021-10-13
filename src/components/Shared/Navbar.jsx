import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    menuLinks: {
        marginLeft: theme.spacing(2),
        textDecoration: 'none',
        color: 'white'
    }
}));

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
