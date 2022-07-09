import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  //borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icon = styled("div")(({ theme }) => ({
  display:"none",
  gap:"20px",
  alignItems:'center',
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    // we can give position sticky
    <AppBar position="static">
      <StyledToolbar>
        <Typography 
           variant="h6" 
           sx={{display: {xs: "none",sm:"block"}}}
           >
            RAIDER
        </Typography>  
        <GroupIcon sx={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder="search...."/></Search>
        <Icon>
          <Badge badgeContent={4} color="error">
             <MailIcon/>
          </Badge>
          <Badge badgeContent={4} color="error">
             <NotificationsActiveIcon />
          </Badge>
          <Avatar 
              sx={{width:30, height:30}} 
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onClick={(e) => setOpen(true)}
              />
         </Icon>  
          <UserBox onClick={(e) => setOpen(true)}>
             <Avatar 
                 sx={{width:30, height:30}} 
                 src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                 />      
              <Typography variant='span'>Pankaj</Typography>
          </UserBox>
        
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
