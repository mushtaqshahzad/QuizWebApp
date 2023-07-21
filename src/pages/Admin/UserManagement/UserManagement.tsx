import React, { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Box, Grid, TextField } from '@mui/material'

const UserManagement: React.FC = () => {
    const [username, setUsername] = useState('')

    const handleUsernameChange = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        setUsername(event.target.value)
    }

    const handleCreateUser = (): void => {
        // Add your logic to create a user with the provided username
        console.log('User created:', username)
    }

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h4">User Management</Typography>
            <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
            >
                <TextField
                    label="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    variant="outlined"
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCreateUser}
                >
                    Create User
                </Button>
            </Box>
        </Box>
    )
}

export default UserManagement
