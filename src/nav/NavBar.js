import { Box, AppBar, Toolbar, Drawer, IconButton, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import { useMarvelContext } from "../contexts/marvelContext"


const NavBar = () => {

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
                        >
                            <MenuIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="home button"
                            color="inherit"
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
            <Drawer achor="left">

            </Drawer>
        </>
    )
}

export default NavBar