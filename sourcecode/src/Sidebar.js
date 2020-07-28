import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from './Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#fbfbfb',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)'
  },
  content: {
    width: 400,
    flexShrink: 0,
    padding: '8px',
  },
});

export default function PermanentDrawer() {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" classes={{ paper: classes.paper }}>
      <Toolbar heading="108 Divyadesams" />
      <div
        className={classes.content}
        role="presentation"
      >
        <Typography variant="body1">Click on one of the Divyadesams to view its information</Typography>
      </div>
    </Drawer>
  );
}
