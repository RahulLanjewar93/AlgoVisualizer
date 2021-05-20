import { Grid, Typography, makeStyles, Button, Box, Divider } from '@material-ui/core'
// import BannerImage from '../../assets/images/homebackground.jpg'
import React from 'react'

const primaryColor = '#faf6f2'
const secondaryColor = '#232323'
const useStyles = makeStyles({
    banner: {
        minHeight: '100vh',
        display: 'flex',
    },
    bannerInfo: {
        backgroundColor: primaryColor
    },
    bannerHero: {
        // backgroundImage: `url('${BannerImage}'),linear-gradient(to right,rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 1))`,
        backgroundColor: secondaryColor,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    containerLeft: {
        position: 'relative',
        top: '50%',
        left: '40%',
        width: '50%',
        transform: 'translate(-50%,-50%)'
    },
    containerRight: {
        position: 'relative',
        top: '50%',
        left: '50%',
        width: '50%',
        transform: 'translate(-50%,-50%)'
    },
    cite: {
        color: 'white'
    },
    button: {
        textTransform: 'capitalize',
        backgroundColor: secondaryColor,
        color: 'white',
        '&:hover': {
            color: secondaryColor,
            border: 'none',
            backgroundColor: 'white',
            transition: '0.2s ease-in-out'
        }
    },
    text: {
        margin: '20px 0px'
    }
})

const Landing = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.banner} container>
            <Grid className={classes.bannerInfo} item xs={12} sm={8}>
                <Box className={classes.containerLeft} >
                    <Typography variant='h2' className={classes.text}>
                        Algo Visualizer
                    </Typography>
                    <Divider></Divider>
                    <Typography variant='body1' className={classes.text}>
                        <em>Ever wondered what a algorithm looks like?  <br></br>Scroll  below and expand your imagination</em>
                    </Typography>
                    <Button className={classes.button} variant='outlined' >
                        Get Started
                    </Button>
                </Box>
            </Grid>
            <Grid className={classes.bannerHero} item xs={12} sm={4}>
                <Box className={classes.containerRight} >
                    <Typography variant='h4'>
                        <cite className={classes.cite}>"An algorithm must be seen to be believed." <br></br><br></br> -Donald Ervin Knuth</cite>

                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Landing
