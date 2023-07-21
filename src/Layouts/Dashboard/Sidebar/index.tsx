import React from 'react'

import {
    Box,
    Link,
    Drawer,
    Typography,
    Avatar,
    Stack,
    List,
    Divider,
    Toolbar,
    ListItemIcon,
    ListItemButton,
    ListItemText,
    ListItem,
} from '@mui/material'

import Logo from '../../../components/Logo'
import { sideBarList } from './Data'

const DRAWER_WIDTH = 300

export default function Sidebar(): JSX.Element {
    const renderContent = (
        <>
            <Logo />
            <Box>
                <List sx={{ pt: 3 }}>
                    {sideBarList.map((item, index) => (
                        <>
                            <ListItem key={`icon-${index + 1}`} sx={{ p: 1 }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={item.icon} alt={item.text} />
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                            {index !== sideBarList.length - 1 && (
                                <Divider
                                    sx={{ width: '204px' }}
                                    variant="inset"
                                />
                            )}
                        </>
                    ))}
                </List>
            </Box>
        </>
    )

    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    // bgcolor: 'background.grey',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            {renderContent}
        </Drawer>
    )
}
