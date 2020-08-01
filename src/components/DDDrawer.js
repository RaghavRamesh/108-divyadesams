import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from './Toolbar';
import { isMobileOrTablet } from '../util';

const useStyles = makeStyles({
  root: {
    width: isMobileOrTablet() ? '90%' : '30%',
  },
  drawerContent: {
    flexShrink: 0,
    padding: '8px',
  },
  backdrop: {
    width: '400px'
  },
  button: {
    color: 'white'
  },
  video: {
    width: '100%',
    height: '75%',
  },
  divider: {
    margin: '24px 0',
  }
});


export default function DDDrawer ({ data, handleDrawerClose, drawerOpen }) {
  const classes = useStyles();
  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData('Temple Name', data?.temple),
    createData('Perumal', data?.moolavar),
    createData('Thaayaar', data?.thaayaar),
    createData('Location', `${data?.district} district, ${data?.state}, ${data?.country}`)
  ];

  const ddInfo = () => (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {data?.no ? (
              <TableRow>
                <TableCell component="th" scope="row">
                  No.
                </TableCell>
                <TableCell align="right">{data.no}</TableCell>
              </TableRow>
            ) : null}
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data?.video ? (
        <>
          <Divider className={classes.divider} />
          <iframe
            src={data.video}
            className={classes.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video"
          />
        </>
      ) : null}
    </>
  );

  const backButton = (
    <IconButton
      color="inherit"
      aria-label="close drawer"
      onClick={handleDrawerClose}
      edge="start"
    >
      <ArrowBackIcon classes={{root: classes.button}} />
    </IconButton>
  );

  return (
    <Drawer open={drawerOpen} onClose={handleDrawerClose} classes={{paper:classes.root}}>
      <Toolbar backButton={backButton} heading={data?.temple || ''} />
      <div
        className={classes.drawerContent}
        role="presentation"
        classes={{modal: classes.backdrop}}
      >
        {ddInfo()}
      </div>
    </Drawer>
  );
}
