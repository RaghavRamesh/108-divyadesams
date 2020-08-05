import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from './Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import MarkerControls from './MarkerControls';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#fbfbfb',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    width: "33%",
  },
  content: {
    flexShrink: 0,
    padding: '8px',
  },
  info: {
    padding: '24px'
  }
});

export default function PermanentDrawer({ markers, handleMarkersChange }) {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  return !isMobile ? (
    <Drawer variant="permanent" classes={{ paper: classes.paper }}>
      <Toolbar heading="108 Divyadesams" />
      <div
        className={classes.content}
        role="presentation"
      >
        <MarkerControls markers={markers} handleMarkersChange={handleMarkersChange} />
        <Divider />
        <Typography variant="body1" className={classes.info}>Click on one of the Divyadesams to view its information</Typography>
      </div>
    </Drawer>
  ) : null
}
