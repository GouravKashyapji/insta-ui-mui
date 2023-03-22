import "./App.css";
import ProfileDetails from "./Container/ProfileDetails";
import SideNavbar from "./Container/SIdeNavbar";
import { Stack } from "@mui/system";
import { Box, createTheme, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useCallback, useState } from "react";
import Navbar from "./Container/Navbar";
import styled from "@emotion/styled";
import BodySection from "./Container/BodySection";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const theme1 = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [thememode, setthememode] = useState(theme);
  const [switchName, setName] = useState("Name");

  const changeAccount = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [switchName]
  );

  const themeChange = useCallback(
    (e) => {
      console.log('e',e.target.checked)
      if (e.target.checked) {
        setthememode(theme1);
      } else {
        setthememode(theme);
      }
    },
    [thememode]
  );
  return (
    <>
      <ThemeProvider theme={thememode}>
        <CssBaseline />
        <Navbar
          themeChange={themeChange}
          themeMode={thememode}
          changeAccount={changeAccount}
          switchName={switchName}
        />
        <Grid container spacing={2} >
          <Grid item sx={{ display: { xs: "none", md: "block" } }} md={2} lg={2}>
            <SideNavbar
              themeChange={themeChange}
              changeAccount={changeAccount}
              switchName={switchName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <BodySection switchName={switchName}/>
            {/* <ProfileDetails switchName={switchName} /> */}
          </Grid>
        </Grid>
      </ThemeProvider>
      {/* <ThemeProvider theme={thememode}> */}
      {/* <CssBaseline /> */}
      {/* <Stack direction={"column"}> */}
      {/* <Navbar */}
      {/* themeChange={themeChange} */}
      {/* themeMode={thememode} */}
      {/* changeAccount={changeAccount} */}
      {/* switchName={switchName} */}
      {/* /> */}
      {/* <Grid container> */}
      {/* <Grid item lg={2}> */}
      {/* <SideNavbar  */}
      // themeChange={themeChange}
      {/* /> */}
      {/* </Grid> */}
      {/* <Grid item spacing={10}> */}
      {/* <ProfileDetails switchName={switchName} /> */}
      {/* </Grid> */}
      {/* </Grid> */}
      {/* </Stack> */}
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
