import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}))

const About = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.toolbar}></div>
    <p>About Us</p>
    </>
  )
}

export default About