import styled from "@emotion/styled";
import { Favorite } from "@mui/icons-material";
import { Grid, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React,{memo} from "react";
import RandomImage1 from './photoContainer/randomimage1.jpg'
import RandomImage2 from './photoContainer/randomimage2.jpg'
import useStyles from "./Styles";

const Gallery = () => {
  const classes=useStyles();
  console.log('gallery')
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    }
    ,
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    }
    ,
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    }
    
    
  ];

  const ImageComponent=styled('img')(({theme})=>({
    height: "22rem",
    width: "100%",
    margin: "0px",
    position: "relative",
    [theme.breakpoints.down('sm')]:{
      height: "10rem",
    }
  }));
  const HoverComponent=styled(Box)(({theme})=>({
    height: "22rem",
    width: "100%",
    top: 0,
    left: 0,
    opacity: "0",
    color:'white',
    display:'grid',
    alignContent:'center',
    justifyContent:'center',
    position: "absolute",
    [theme.breakpoints.down('sm')]:{
      height: "10rem",
    },
    ["&:hover"]: {
      opacity: 1,
      backgroundColor:'#00000099',
      cursor: "pointer"
    },
  }))
  return (
    <>
      <Grid container spacing={2} sx={
        {
          paddingLeft:0,
          paddingRight:'16px',
        }
      } >
        {itemData.map((Element,index) => (
          <Grid item xs={4} sm={4}  keys={index}>
            <ImageListItem keys={index}>
              <ImageComponent
                
                src={(index % 2 == 0 ? RandomImage1 : RandomImage2)}
                alt={'no image'}
               
                keys={index}
              />
              <HoverComponent
             
                keys={index}
              >
                <Typography keys={index}> <Favorite/>354</Typography>
                <Typography keys={index}>{Element.title}</Typography>
              </HoverComponent>
            </ImageListItem>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default memo(Gallery);
// export default Gallery;
