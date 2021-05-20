import { Grid, Typography, makeStyles } from '@material-ui/core'
import BannerImage from '../../assets/images/homebackground.jpg'
import React from 'react'

const useStyles = makeStyles({
    banner: {
        minHeight: '100vh',
        display: 'flex'
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
    }
})

const Landing = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid className={classes.banner} container>
                <Grid className={classes.bannerInfo} item md={8}>

                </Grid>
                <Grid className={classes.bannerHero} item md={4}>
                    <Typography>Hi</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Landing
