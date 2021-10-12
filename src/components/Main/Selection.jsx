import { Container, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

const Selection = () => {
    return (
        <Container styles={{ width: '100px' }}>
            <Grid container>
                <Grid item md={4}>
                    <Paper elevation={2}>
                        <Typography>
                            hi
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper elevation={2}>
                        <Typography>
                            hi
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper elevation={2}>
                        <Typography>
                            hi
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Selection
