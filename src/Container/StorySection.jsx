import styled from "@emotion/styled";
import { Avatar, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo } from "react";
import useStyles from "./Styles";

const StorySection = () => {
  const classes=useStyles();
  console.log('story section')
  const storyArray = [
    {
      Image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      text: "story1",
      id: 1,
    },
    {
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      text: "story2",
      id: 2,
    },
    {
      Image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      text: "story3",
      id: 3,
    },
    {
      Image:
        "https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
      text: "story4",
      id: 4,
    },
    {
      Image:
        "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      text: "story5",
      id: 5,
    },
    {
      Image:
        "https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
      text: "story6",
      id: 6,
    },
  ];
   const StoryBox=styled(Box)(({theme})=>({
    display:'flex',
    width:'100%',
    // backgroundColor:'blue',
    margin:'0px',
    paddingLeft:'0px',
    justifyContent:'space-evenly',
   }))
  return (
    <>
      <StoryBox
        // direction="row"
        // spacing={2}
        // className={classes.storysection}
      >
        {storyArray.map((element,index) => (
          <Box keys={index}
           >
            <Avatar
              alt="Remy Sharp"
              variant="div"
              keys={index}
              className={classes.storysection1}
            />
            <Typography keys={index} sx={{ textAlign: "center" }}>{element.text}</Typography>
          </Box>
        ))}
      </StoryBox>
    </>
  );
};

export default memo(StorySection);
// export default (StorySection);
