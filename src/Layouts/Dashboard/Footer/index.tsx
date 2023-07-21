import { Typography, Box, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

export default function Footer(): JSX.Element {
    return (
        <Box display="flex" justifyContent="center">
            <Divider variant="inset" />
            <Typography
                sx={{ fontFamily: 'Roboto', fontWeight: '400' }}
                variant="h6"
            >
                Copyright © 2022 All rights reserved.
            </Typography>
        </Box>
    )
}
