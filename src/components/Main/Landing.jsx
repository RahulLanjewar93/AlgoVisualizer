import { Grid, Typography, makeStyles, Button, Box } from '@material-ui/core'
// import BannerImage from '../../assets/images/homebackground.jpg'
import React from 'react'

const useStyles = makeStyles({
    banner: {
        minHeight: '100vh',
        display: 'flex',
    },
    bannerInfo: {
        backgroundColor: '#faf6f2'
    },
    bannerHero: {
        // backgroundImage: `url('${BannerImage}'),linear-gradient(to right,rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 1))`,
        backgroundColor: `#232323`,
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
        textTransform: 'capitalize'
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
                    <Typography variant='h4' className={classes.text}>
                        <em>Your best mate to solve your algorithms</em>
                    </Typography>
                    <Button className={classes.button} variant='outlined' >
                        Get Started
                    </Button>
                </Box>
            </Grid>
            <Grid className={classes.bannerHero} item xs={12} sm={4}>
                <Box className={classes.containerRight} >
                    <Typography variant='h4'>
                        <cite className={classes.cite}>"A picture is worth of thousands words"</cite>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Landing
