import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import { Divider, Drawer, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/logo.svg'
import { useState } from 'react';
export default function Header() {
    const isTablet = useMediaQuery('(max-width: 960px)');

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

            <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: "1" }}><img src={Logo} alt="logo" height={'70'} width='200' /> </Typography>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: "column", gap: '20px', mt: '30px' }}>
                <Button component={Link} to={'/'} color="inherit" sx={{ textTransform: "none", fontSize: "18px" }}>Home</Button>
                <Button component={Link} sx={{ textTransform: "none", fontSize: "18px" }} to={'/about'} color="inherit">About</Button>
                <Button component={Link} sx={{ textTransform: "none", fontSize: "18px" }} to={'/contact'} color="inherit">Contact</Button>
                <Button component={Link} sx={{ textTransform: "none", fontSize: "18px" }} to={'/menu'} color="inherit">Menu</Button>
            </Box>

        </Box>
    )

    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: "1", marginLeft: isTablet ? '1%' : '10%' }}> <img src={Logo} alt="logo" height={'70'} width='250' /></Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: isTablet?'15px' : '30px', marginRight: isTablet ? '1%' : '10%' }}>
                            <Button
                                component={NavLink}
                                to={'/'}
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    borderBottom: "1px solid transparent",
                                    borderRadius: 0,
                                    "&:hover": {
                                        borderBottom: " 2px solid goldenrod",
                                    },
                                }}
                            >
                                Home
                            </Button>
                            <Button
                                component={NavLink}
                                to={'/about'}
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    borderBottom: "1px solid transparent",
                                    borderRadius: 0,
                                    "&:hover": {
                                        borderBottom: " 2px solid goldenrod",
                                    },
                                }}
                            >
                                About
                            </Button>
                            <Button
                                component={NavLink}
                                to={'/contact'}
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    borderBottom: "1px solid transparent",
                                    borderRadius: 0,
                                    "&:hover": {
                                        borderBottom: " 2px solid goldenrod",
                                    },
                                }}
                            >
                                Contact
                            </Button>
                            <Button
                                component={NavLink}
                                to={'/menu'}
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    borderBottom: "1px solid transparent",
                                    borderRadius: 0,
                                    "&:hover": {
                                        borderBottom: " 2px solid goldenrod",
                                    },
                                }}
                            >
                                Menu
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component='nav'>
                    <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{
                        display: { xs: 'block', sm: "none" }, "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: '240px'
                        }
                    }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    )
}