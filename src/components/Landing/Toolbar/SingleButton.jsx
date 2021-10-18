import { Box, Button } from '@mui/material'
import React from 'react'

const SingleButton = ({ text }) => {
    return (
        <Box textAlign="center" width="100%">
            <Button variant="contained" color="primary" style={{ padding: "10px 40px", fontFamily: "Great Vibes", width: "70%", textTransform: "capitalize", fontSize: "2em" }}>
                {text}
            </Button>
        </Box>
    )
}

export default SingleButton
