import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { memo } from "react";
import profilepic from "./photoContainer/profilepic.png";
import useStyles from "./Styles";
const ImageContainer = () => {
  const classes = useStyles();
  const Random = styled(Box)(({ theme }) => ({
    height: "150px",
    width: "150px",
    borderRadius: "70%",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "red",
      // border:'4px solid black'
    },
  }));
  console.log("gfhgdhhg");
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'center'}}>

      <Random
        component="img"
        // className={classes.imageComponent}
        // p={1}
        alt="Profile Photo"
        // src="https://variety.com/wp-content/uploads/2023/02/Screen-Shot-2023-02-22-at-5.58.57-PM.png"
        // src={profilepic}
        src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"
      ></Random>
    </Box>
    </>
  );
};

export default memo(ImageContainer);
