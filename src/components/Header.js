import { ThemeProvider, Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import { Container } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar/AppBar'
import React from 'react'
import { Select } from '@material-ui/core'
import {makeStyles} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import { useTheme } from '@material-ui/core'



const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
   color:"gold",
   fontWeight:"bold",
   cursor:"pointer",
  },
}));


const Header = () => {

  const classes = useStyles();
  const navigate = useNavigate();
  const darkTheme = useTheme({
    palette: {
      primary:{
        main: "#fff",
      },
      type:"dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
   <AppBar color="transparent" position="static">
   <Container>
    <Toolbar>
      <Typography onClick={() => navigate("/")} className={classes.title} variant="h6">Crypto Hunter</Typography>

      <Select 
      variant='outlined'
      style={{
        width:100,
        height:40,
        marginRight:15,
      }}
       >
         <MenuItem value={"USD"}>USD</MenuItem>
         <MenuItem value={"INR"}>INR</MenuItem>
      </Select>
    </Toolbar>
   </Container>

   </AppBar>
   </ThemeProvider>
  )
}

export default Header