import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import Divider from '@material-ui/core/Divider';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
  title: {
    flexGrow: 1
  }
});

export default function PermanentDrawer({ data }) {
  const classes = useStyles();

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData('Temple', data?.temple),
    createData('Perumal', data?.moolavar),
    createData('Thaayaar', data?.thaayaar),
    createData('Location', `${data?.district} district, ${data?.state}, ${data?.country}`)
  ];

  const content = () => (
    <div
      className={classes.content}
      role="presentation"
    >
      {data ? (
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
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
          <Divider />
        </>
      ) : null}
      <Typography variant="body1">Click on one of the Divyadesams to view its information</Typography>
    </div>
  );

  return (
    <Drawer variant="permanent" anchor="left" classes={{ paper: classes.paper}} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            108 Divyadesams
          </Typography>
        </Toolbar>
      </AppBar>
      {content()}
    </Drawer>
  );
}
