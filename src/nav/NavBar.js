import React from 'react'
import {
    Box,
    AppBar,
    Toolbar,
    Drawer,
    IconButton,
    Button,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate, NavLink } from 'react-router-dom'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import FavoriteIcon from '@mui/icons-material/Favorite'


const NavBar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = React.useState(false)
    const identity = useIdentityContext()

    const handleNavChoice = (choice, shouldToggle, shouldLogOut = false) => {
        navigate(`/${choice}`)
        if (shouldLogOut) identity.logout()
        if (shouldToggle) toggleDrawer()
    }
    const drawerItemList = () => (
        <Box sx={{ width: 250 }} role="presentation">
            {identity.user &&
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
                    <ListItem button onClick={() => handleNavChoice('favorites', true)}>
                        <ListItemIcon>
                            <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Favorites" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavChoice('login', true, true)}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            }
            {!identity.user &&
                <List>
                    <ListItem button onClick={() => handleNavChoice('login', true)}>
                        <ListItemIcon>
                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavChoice('signup', true)}>
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign Up" />
                    </ListItem>
                </List>
            }

        </Box>
    )

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ background: '#F0131E' }}>
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Box>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
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
                        </Box>
                        <Box>

                            {!identity.user && !identity.provisionalUser && (
                                <>
                                    <Button color="inherit">
                                        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/signup">Sign Up</NavLink>
                                    </Button>
                                    <Button color="inherit">
                                        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/login">Login</NavLink>
                                    </Button>
                                </>
                            )}

                            {identity.provisionalUser && (
                                <Button color="inherit">
                                    <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/login">Login</NavLink>
                                </Button>
                            )}

                            {identity.user && (
                                <Button color='inherit' onClick={() => handleNavChoice('', false, true)}>
                                    Logout
                                </Button>
                            )}

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