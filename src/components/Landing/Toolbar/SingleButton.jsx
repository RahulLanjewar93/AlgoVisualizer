import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';

const SingleButton = ({ text, link }) => {
    return (
        <Box textAlign="center" width="100%">
            <Link to={link} style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary" style={{ padding: "10px 40px", fontFamily: "Great Vibes", width: "70%", textTransform: "capitalize", fontSize: "2em" }}>
                    {text}
                </Button>
            </Link>
        </Box>
    )
}

export default SingleButton
