import {
  AppBar,
  Button,
  ButtonGroup,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { memo } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import SwitchAccount from "./SwitchAccount";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./Styles";

const Navbar = () => {
  const classes = useStyles();

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SearchBar = styled("div")(({ theme }) => ({
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    display:'flex',
    alignItems:'center',
    backgroundColor:alpha(theme.palette.common.white,0.25),
    '&:hover':{
      backgroundColor:alpha(theme.palette.common.white,0.35),
    }
  }));

  const Buttons = styled("div")(({ theme }) => ({
    // backgroundColor: "white",
    // height:'20px',
    padding: "0 10px",
    // flexGrow:1,
    
    // borderRadius: theme.shape.borderRadius,
    // width: "30%",
  }));

  return (
    <>
      <AppBar mt='-2px'>
        <StyledToolbar>
          <Typography
            className={classes.logo1}
            sx={{
              fontFamily: "Dancing Script",
              fontSize: "28px",
              display: { xs: "none", sm: "block" },
              // flexGrow:1,
            }}
          >
            Instagram
          </Typography>
          <InstagramIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <SearchBar>
            <SearchIcon />
            <InputBase placeholder="Search..." paddingLeft='10px'/>
          </SearchBar>
          <Buttons>
          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="outlined primary button group"
            size="medium"
            // sx={{flexGrow:1,}}
          >
            <Button >Signup</Button>
            <Button>Login</Button>
          </ButtonGroup>
          </Buttons>
         
          {/* <Buttons>
          <Button variant="contained" color="secondary">Signup</Button>
          <Button variant="contained" color="secondary">Login</Button>
          </Buttons> */}
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default memo(Navbar);

// const Navbar = ({ themeChange, themeMode, changeAccount, switchName }) => {
//   const classes = useStyles();
//   console.log("navbar");
//   const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(3),
//       width: "auto",
//     },
//   }));

//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       width: "100%",
//       [theme.breakpoints.up("md")]: {
//         width: "20ch",
//       },
//     },
//   }));

//   return (
//     <>
//       <AppBar
//         sx={{
//           position: "fixed",
//           // top :-10,
//           zIndex: 1,
//           bgcolor: themeMode.palette.mode === "dark" ? "black" : "white",
//           color: themeMode.palette.mode === "dark" ? "white" : "black",
//         }}
//         bgcolor={"background.default"}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
//           <Typography
//             className={classes.logo1}
//             sx={{
//               fontFamily: "Dancing Script",
//               fontSize: "28px",
//               display: { xs: "none", sm: "block" },
//             }}
//           >
//             Instagram
//           </Typography>
//           <InstagramIcon sx={{ display: { xs: "block", sm: "none" } }} />
//           <Search
//             // className={classes.searchBar}
//             sx={{ bgcolor: "#efefef" }}
//           >
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               // className={classes.searchBar}
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//           <Box>
//             <Button>Signup</Button>
//             <Button>Login</Button>
//           </Box>
//           {/* <Typography>
//             <Switch onChange={(e) => themeChange(e)}></Switch>Theme
//           </Typography> */}
//           {/* <SwitchAccount changeAccount={changeAccount} switchName={switchName} /> */}
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

// // export default (Navbar)
// export default memo(Navbar);
