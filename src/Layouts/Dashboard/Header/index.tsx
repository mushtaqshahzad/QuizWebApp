import * as React from 'react'
import { Button, Grid, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import SearchBar from '../../../components/SearchBar'

const HeaderBox = styled(Box)(({ theme }) => ({
    boxShadow: theme.shadows[1],
    height: '100px',
}))

export default function Header(): JSX.Element {
    return (
        <HeaderBox>
            <Grid container sx={{ pt: 2 }}>
                <Grid item xs={4}>
                    <Typography sx={{ pt: 2 }} variant="h5">
                        Member Directory
                    </Typography>
                </Grid>
                <Grid item xs={7} sx={{ pt: 2 }}>
                    <SearchBar />
                </Grid>
            </Grid>
        </HeaderBox>
    )
}
