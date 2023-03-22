import { Box } from "@mui/system";
import React, { memo } from "react";
import RandomImage1 from "./photoContainer/randomimage1.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Avatar, Button, Typography } from "@mui/material";
const Suggestion = () => {
  console.log('Suggestion')
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
const name=['Peter Parker','Tony Stark','Bruce Wayne','Thor','Clint',"T'Chala"]
// const name=['Tony Stark','Bruce Wayne','Thor',"T'Chala"]

  return (
    <>
      <Carousel 
      responsive={responsive}
      >
      {
        name.map((element,index)=>{

       return <Box
          component={"div"}
          sx={{
            justifyContent: "center",
            height: "200px",
            width: "200px",
            pt: "10px",
            textAlign: "center",
            m:'5px',
            border: "1px solid grey",
            borderRadius:'4px'
          }}
        >
          <Avatar
            alt="Remy Sharp"
            variant="div"
            src={RandomImage1}
            sx={{ width: 100, height: 100, m: "0 auto", mb: "5px" }}
          />
          <Typography sx={{ textAlign: "center" }}>{element}</Typography>
          <Button variant="contained" size="small">Follow</Button>
        </Box>
        
        })
      }
      </Carousel>
    </>
  );
};

// export default Suggestion;
export default memo(Suggestion);
