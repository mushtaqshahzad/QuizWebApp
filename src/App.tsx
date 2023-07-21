import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Routes from './routes/Routes'
import UserContainer from './context/UserContext'
import { SnackbarMessage } from './components/core/SnackbarMessage'
import { MessageContainer } from './context/MessageContext'
import { theme } from './theme'

import './css/style.css'

export default function App(): JSX.Element {
    return (
        <HelmetProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MessageContainer>
                    <BrowserRouter>
                        <UserContainer>
                            <Routes />
                        </UserContainer>
                    </BrowserRouter>
                    <SnackbarMessage />
                </MessageContainer>
            </ThemeProvider>
        </HelmetProvider>
    )
}
