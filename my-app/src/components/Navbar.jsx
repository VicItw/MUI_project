import { AppBar, Avatar, Badge, Box, Icon, InputBase, Menu, MenuItem, Stack, styled, Toolbar, Typography } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DiamondIcon from '@mui/icons-material/Diamond';
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("div")(({theme}) =>({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons= styled(Box)(({theme}) =>({
    display:'none',
    alignItems:"center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox= styled(Box)(({theme}) =>({
    display:'flex',
    alignItems:"center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky" >
            <StyledToolbar>
                <Stack direction="row" alignItems="center" spacing="5px">
                    <DiamondIcon/>
                    <Typography variant='h6'>
                        BESTBOOK
                    </Typography>
                </Stack>
                <FaceIcon sx={{display:{xs:"block", sm:"none"}}} />
                <Search>
                    <InputBase placeholder='search...'/>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon/>
                    </Badge>
                    <Avatar 
                        sx={{width:30, height:30}} 
                        src ="https://art.ngfiles.com/images/3272000/3272599_hiscoconutgun_my-pfp.png?f1687197821"
                        onClick={(e)=>setOpen(true)}
                    />
                </Icons>
                <UserBox>
                    <Avatar 
                        sx={{width:30, height:30}} 
                        src ="https://art.ngfiles.com/images/3272000/3272599_hiscoconutgun_my-pfp.png?f1687197821"
                        onClick={(e)=>setOpen(true)}
                    />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar