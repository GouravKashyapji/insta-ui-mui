import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { memo, useMemo } from "react";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import useStyles from "./Styles";
import styled from "@emotion/styled";

const  TextContainer=({ switchName })=> {
  const classes = useStyles();
  console.log("text container");
  const textValue = useMemo(() => {
    console.log('in memo')
    return (
      <Typography variant="h5" className={classes.name} sx={{fontFamily: 'Mulish',}}>
        __{switchName}__
      </Typography>
    );
  }, [switchName]);

  const ContainerBox = styled(Box)(({ theme }) => ({
    width: "100%",
    //  ml: "5px",
      mb: "20px" ,
    [theme.breakpoints.down("sm")]: {
      // margin:'0 auto',
      // backgroundColor:'black',
    display: "flex",
    flexDirection: 'column',
    alignContent: "flex-end",
    alignItems: "center",


    },
  }));
  return (
    <>
      <ContainerBox >
        <Stack direction={"row"} spacing={2}>
          {textValue}
          <Button variant="contained" className={classes.button}>
            Follow
          </Button>
          <Button
            variant="contained"
          
            className={classes.button}
          >
            Message
          </Button>
          <SettingsSharpIcon />
        </Stack>
      <Stack direction={"row"} spacing={4} mb="20px">
        <Typography component={"p"} variant="p">
          <span>233</span> posts
        </Typography>
        <Typography component={"p"} variant="p">
          <span>33M</span> followers
        </Typography>
        <Typography component={"p"} variant="p">
          <span>35</span> following
        </Typography>
      </Stack>

      <Typography sx={{fontfamily: 'Mulish', }}>Instagram</Typography>
      <Typography>Discover what's next on Instagram 🔎✨</Typography>
      <Typography>Marketing On Instagram</Typography>
      </ContainerBox>
    </>
  );
}
export default memo(TextContainer)