import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo } from "react";
import useStyles from "./Styles"
const Footer = () => {
  const classes = useStyles();
  console.log('footer',classes)
  const data = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Locations",
    "Instagram Lite",
    "Contact"
  ];
  return (
    <>
      <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center',}}>
      {
        data.map((element,index)=>{
            return <Typography keys={index} sx={{p:'10px'}} className={classes.root}>{element}</Typography>
        })
      }
      </Box>
    </>
  );
};

export default memo(Footer);
// export default (Footer);
