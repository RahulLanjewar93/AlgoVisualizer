import { Box, Button, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import SingleButton from './SingleButton'

const Toolbar = () => {
    return (
        <Box>
            <Container>
                <Typography>
                    Algorithm
                </Typography>
                <Box style={{ backgroundColor: "#232323", margin: "100px 0" }}>
                    <Grid container style={{ padding: "20px 0px" }}>
                        <Grid item md={4} >
                            <SingleButton text="Searching" />
                        </Grid>
                        <Grid item md={4} >
                            <SingleButton text="Sorting" />
                        </Grid>
                        <Grid item md={4} >
                            <SingleButton text="Pathfinding" />
                        </Grid >
                    </Grid >
                </Box >
            </Container >
        </Box>
    )
}

export default Toolbar
