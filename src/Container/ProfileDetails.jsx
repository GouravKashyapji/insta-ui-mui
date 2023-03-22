import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { memo } from "react";
import Footer from "./Footer";
import Gallery from "./Gallery";
import ImageContainer from "./ImageContainer";
import StorySection from "./StorySection";
import useStyles from "./Styles";
import Suggestion from "./Suggestion";
import TabList from "./TabList";
import TextContainer from "./TextContainer";

const ProfileDetails = ({ switchName }) => {
  console.log("ProfieDetails");
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={2}
        className={classes.mainContaier}
        sx={{ mt: "60px" }}
      >
        {/* <Box className={classes.subContainer}> */}
          <Grid
            item
            lg={3}
            // sx={{
            //   display: "grid",
            //   alignContent: "center",
            //   justifyContent: "center",
            // }}
          >
            <ImageContainer />
          </Grid>
          <Grid item lg={5}>
            <TextContainer switchName={switchName} />
          </Grid>
        {/* </Box> */}
        <Grid item lg={8}>
          <StorySection />
          <Divider />
        </Grid>
        <Grid item lg={8}>
          <TabList />
        </Grid>
        <Grid item lg={8} sx={{ m: "0px" }}>
          <Gallery />
        </Grid>
        <Grid item lg={8} sx={{ mt: "10px" }}>
          <Typography sx={{ m: "10px" }} color={"otherColor"}>
            Related Accounts
          </Typography>
          <Suggestion />
        </Grid>
        <Grid item lg={8} sx={{ m: "50px 0" }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

// export default (ProfileDetails);
export default memo(ProfileDetails);
