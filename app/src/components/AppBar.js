import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logoIcon from "assets/logo.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginLeft: theme.spacing(2)
  }
}));

export default function AppMainBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <img width={40} src={logoIcon} alt="Logo" />
        <Typography variant="h4" className={classes.title}>
          {"app"}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
