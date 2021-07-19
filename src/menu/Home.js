import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}))

const Home = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.toolbar}></div>
    <p>Home</p>
    </>
  )
}

export default Home