import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    flexGrow: 1
  }
});

export default function({ backButton, heading }) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        {backButton}
        <Typography variant="h6" className={classes.title}>
          {heading}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}