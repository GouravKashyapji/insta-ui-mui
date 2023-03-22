import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    color: "grey",
    flexWrap: 'wrap!important',
    justifyContent:'center',
    "&:hover":{
      color:'blue',
      cursor: "pointer",
    }
  },
  mainContaier: {
    justifyContent: "center",
    alignContent: "flex-start",
    marginTop: "60px",
    // ml: "0px",
    // position:'absolute'
  },
  subContainer: {
    position: "relative",
    display: "flex",
    // width: "935px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  imageComponent: {
    height: "150px",
    width: "150px",
    borderRadius: "70%",
    // border: "1px solid grey",
  },
  name: {
    fontWeight: 900,
    // width: "150px",
    lineHeight: "30px",
    fontSize: "18px",
    marginBottom: "20px",
    textAlign:"center",
    // fontFamily: 'Mulish', 
    // color: "black",
  },
  button: {
    height: "30px",
    color: "black",
    width: "90px",
    bgcolor: "#efefef",
  },
  storysection: {
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  storysection1: {
    width: "70px!important",
    height: "70px!important",
    marginBottom: "15px",
    border:'1px solid grey',
    padding:'3px!important'
  },
  galleryimages:{
    height: "28rem",
    width: "100%",
    margin: "0px",
    position: "relative",
  },
  galleryBox:{
    height: "14.6rem",
    width: "100%",
    top: 0,
    left: 0,
    opacity: "0",
    color:'white',
    display:'grid',
    alignContent:'center',
    justifyContent:'center',
    position: "absolute",
    ["&:hover"]: {
      opacity: 1,
      backgroundColor:'#00000099',
      cursor: "pointer"
    },
  },
  searchBar:{
    backgroundColor: "#efefef",
    borderRadius:'4px',
    "&:hover":{
      // color:'blue',
      cursor: "pointer",
    }
  },
  logo1:{
    fontWeight:'bolder',
    fontSize:'14px',
    fontFamily: 'Dancing Script',
  }
});

export default useStyles;
