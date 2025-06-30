import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'

const Sidebar = () => {
    return (
        <Box 
            // bgcolor="red"
            flex={1}
            p={2}
            sx={{display:{xs:"none",sm:"block"}}}
        >
            <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Homepage"/>
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#pages">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Pages"/>
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#explore">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Explore"/>
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Homepage"/>
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Homepage"/>
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Homepage"/>
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Homepage"/>
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <Switch></Switch>
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>

        
    )
}

export default Sidebar