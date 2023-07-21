import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Box, Grid } from '@mui/material'

const AdminDashboard = (): JSX.Element => {
    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Admin Dashboard
            </Typography>

            <Grid
                container
                spacing={2}
                height="100%"
                alignItems="center"
                textAlign="center"
            >
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/admin/user-manage"
                        sx={{ margin: 1 }}
                    >
                        User Management
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/admin/user-result"
                        sx={{ margin: 1 }}
                    >
                        View Result
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/admin/quiz-manage"
                        sx={{ margin: 1 }}
                    >
                        Quiz Management
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AdminDashboard
