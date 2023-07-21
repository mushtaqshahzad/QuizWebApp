import React from 'react'
import { Box, Typography, Divider, Avatar, Grid, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export default function Card({
    img,
    practiceName,
    companyName,
    name,
}): JSX.Element {
    const BtnBox = styled(Box)`
    color:#015790;
    margin: 8px;
    width: 117px;
    height: 29px;
    left: 456px;
    top: 664px;
    background: #d9d9d9;
    border-radius: 24px;s
`

    return (
        <Box sx={{ mt: 2 }}>
            <Avatar
                alt="avatar"
                style={{ width: '100px', height: '100px' }}
                src={img}
            />
            <Box display="flex" justifyContent="center" flexDirection="column">
                <Typography variant="h5" sx={{ pt: 1 }}>
                    {name}
                </Typography>
                <Divider sx={{ width: '35%' }} />
                <Typography variant="subtitle1" sx={{ pt: 1 }}>
                    {practiceName}
                </Typography>
                <Typography sx={{ ml: '18px' }}>{companyName}</Typography>
            </Box>
            <BtnBox>
                <Button sx={{ py: 0 }}>Read More</Button>
            </BtnBox>
        </Box>
    )
}
