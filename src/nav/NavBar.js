import React from 'react'
import { Box, 
    AppBar, 
    Toolbar, 
    Drawer, 
    IconButton, 
    Button,
    ListItem,
    List,
    ListItemIcon,
    ListItemText, } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import { useMarvelContext } from "../contexts/marvelContext"
import {
} from '@mui/material'
import { useHistory } from 'react-router-dom'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'


const NavBar = () => {

    const history = useHistory()
    const [isOpen, setIsOpen] = React.useState(false)

    const handleNavChoice = (choice, shouldToggle) => {
        history.push(`/${choice}`)
        if (shouldToggle) toggleDrawer()
    }
    const drawerItemList = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListItem button onClick={() => handleNavChoice('characters', true)}>
                    <ListItemIcon>
                        <EmojiPeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Characters" />
                </ListItem>
                <ListItem button onClick={() => handleNavChoice('comics', true)}>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Comics" />
                </ListItem>
            </List>
        </Box>
    )

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="home button"
                            color="inherit"
                            onClick={() => handleNavChoice('', false)}
                        >
                            <HomeIcon />
                        </IconButton>
                        <Box>
                            <Button color="inherit">Sign Up</Button>
                            <Button color="inherit">Login</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer achor="left" open={isOpen} onClick={toggleDrawer}>
                    {drawerItemList()}
            </Drawer>
        </>
    )
}

export default NavBar