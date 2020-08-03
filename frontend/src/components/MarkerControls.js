import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup({ markers, handleMarkersChange }) {
  const classes = useStyles();
  const handleChange = (event) => {
    handleMarkersChange({ ...markers, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Divyadesams by region</FormLabel>
        <FormGroup>
          {Object.keys(markers).map((marker, index) => {
            return (
              <FormControlLabel
                control={<Checkbox color='primary' checked={markers[marker]} onChange={handleChange} name={marker} />}
                label={marker}
                key={index}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </div>
  );
}
