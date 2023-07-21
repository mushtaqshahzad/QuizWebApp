import React from 'react'
import { Box, Grid } from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function DashboardLayout({ children }): JSX.Element {
    return (
        <Box>
            <Grid container>
                <Grid style={{ flexBasis: '0' }} item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid margin="auto" item xs={9}>
                    <Header />
                    <Box>{children}</Box>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    )
}
