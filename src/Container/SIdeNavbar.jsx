import {
  Box,
  Drawer,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Button, MenuItem, Menu } from "@mui/material";
import Switch from "@mui/material/Switch";
import MenuIcon from "@mui/icons-material/Menu";
import {
  HomeOutlined,
  ExploreOutlined,
  SearchRounded,
  MovieFilter,
  MapsUgcOutlined,
  FavoriteBorderOutlined,
  AddBoxOutlined,
} from "@mui/icons-material";
import SwitchAccount from "./SwitchAccount";
import { memo, useState } from "react";
import { styled } from "@mui/system";

const SideNavbar = ({ themeChange, changeAccount, switchName }) => {
  console.log("SideNavbar");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const listOfMoreButton = [
    "Settings",
    "Your activity",
    "Saved",
    "Switch apperarnce",
    "Report a problem",
    "Switch account",
    "Logout",
  ];
  const listOfSideBar = [
    {
      content: "Home",
      id: 1,
      icon: <HomeOutlined />,
    },
    {
      content: "Search",
      id: 2,
      icon: <SearchRounded />,
    },
    {
      content: "Explore",
      id: 2,
      icon: <ExploreOutlined />,
    },
    {
      content: "Reels",
      id: 2,
      icon: <MovieFilter />,
    },
    {
      content: "Messages",
      id: 2,
      icon: <MapsUgcOutlined />,
    },
    {
      content: "Notifications",
      id: 2,
      icon: <FavoriteBorderOutlined />,
    },
    {
      content: "Create",
      id: 2,
      icon: <AddBoxOutlined />,
    },
    {
      content: "Profile",
      id: 2,
      icon: <SearchRounded />,
    },
  ];

  const SideNavbarContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    maxWidth: 260,
    backgroundColor: "background.paper",
    height: "100vh",
    position: "fixed",
    marginTop: "60px",
  }));
  return (
    // <SideNavbarContainer>
    // <Typography >
    //     Theme
    //     <Switch onChange={(e) => themeChange(e)} />
    //   </Typography>

    //   {listOfSideBar.map((text, index) => (
    //     <ListItem key={index} disablePadding>
    //       <ListItemButton key={index}>
    //         <ListItemIcon key={index}>{text.icon}</ListItemIcon>
    //         <ListItemText key={index} primary={text.content} />
    //       </ListItemButton>
    //     </ListItem>
    //   ))}

      
    //   <SwitchAccount changeAccount={changeAccount} switchName={switchName} />
    //   <Button
    //     id="demo-positioned-button"
    //     aria-controls={open ? "demo-positioned-menu" : undefined}
    //     aria-haspopup="true"
    //     aria-expanded={open ? "true" : undefined}
    //     onClick={handleClick}
    //     sx={{ color: "black" }}
    //     startIcon={<MenuIcon />}
    //     m='0px'
    //   >
    //     More
    //   </Button>
    //   <Menu
    //     id="demo-positioned-menu"
    //     aria-labelledby="demo-positioned-button"
    //     anchorEl={anchorEl}
    //     open={open}
    //     sx={{
    //       width: "700px",
    //     }}
    //     onClose={handleClose}
    //     anchorOrigin={{
    //       vertical: "top",
    //       horizontal: "left",
    //     }}
    //     justifyContent="space-between"
    //     transformOrigin={{
    //       vertical: "top",
    //       horizontal: "left",
    //     }}
    //   >
    //     {listOfMoreButton.map((Element) => {
    //       return <MenuItem onClick={handleClick}>{Element}</MenuItem>;
    //     })}
    //   </Menu>
    // </SideNavbarContainer>

    <Drawer
      variant="permanent"
      sx={{
        // display: "flex",
        width:'auto',
        // height: "90vh",
        justifyContent: "space-evenly",
        [`& .MuiDrawer-paper`]: {
          width: 'auto',
          boxSizing: "border-box",
          justifyContent: "start",
          position: "relative",
          position: "fixed",
          marginTop:'60px',
          zIndex:0,
          paddingTop:'10px',
          alignItems: "flex-start",
          paddingLeft: "20px",
        },
      }}
    >
      <Typography  m='0px' >Theme<Switch  onChange={(e)=>themeChange(e)}/></Typography>

      <Box sx={{ overflow: "auto",m:'0px'}}>
        <List>
          {listOfSideBar.map((text, index) => (
            <ListItem key={text.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.content} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
      <SwitchAccount changeAccount={changeAccount} switchName={switchName}/>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // sx={{ color: "black" }}
        startIcon={<MenuIcon />}
        m='0px'
      >
        More
      </Button>
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      sx={{
        width: "700px",
      }}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      justifyContent="space-between"
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >

    {listOfMoreButton.map(Element=>{
     return <MenuItem onClick={handleClick}>
        {Element}
      </MenuItem>
    })}
    </Menu>
    </Drawer>
  );
};

// export default (SideNavbar)
export default memo(SideNavbar);
