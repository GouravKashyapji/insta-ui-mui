import { Grid } from '@mui/material'
import { styled } from '@mui/styles'
import { Box } from '@mui/system'
import React, { memo } from 'react'
import ImageContainer from './ImageContainer'
import TextContainer from "./TextContainer"
import StorySection from "./StorySection"
import Gallery from "./Gallery"
import TabList from "./TabList"
import Suggestion from "./Suggestion"
import Footer from "./Footer"
const BodySection = ({switchName}) => {

    const Component=styled(Box)(({theme})=>({
        // backgroundColor:'red',
        // width:'100vw',
        marginLeft:'0px',
        marginTop:'70px',
        width:'1100px',
        // height:'600px',
        // [theme.breakpoints.up('xs')]:{

        // }
        
    }))
  return (
    <>
      <Component>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <ImageContainer />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextContainer switchName={switchName}/>
                </Grid>
                <Grid item xs={12} sm={12 } md={12} lg={12}>
                  <StorySection />
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                  <TabList />
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                  <Gallery />
                </Grid>
                {/* <Grid item xs={12} sm={10}>
                  <Suggestion />
                </Grid> */}
                <Grid item xs={12} sm={12} lg={12}>
                  <Footer />
                </Grid>
            </Grid>
      </Component>
    </>
  )
}

export default memo(BodySection)
