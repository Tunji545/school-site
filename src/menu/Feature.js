import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}))

const Feature = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.toolbar}></div>
    <p>Feature</p>
    </>
  )
}

export default Feature