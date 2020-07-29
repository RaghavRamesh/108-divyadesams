import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FeedbackForm() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [feedback, setFeedback] = React.useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        id="feedback"
        label="Feedback"
        multiline
        rowsMax={4}
        value={feedback}
        onChange={handleFeedbackChange}
      />
      <Button href="mailto:raghavramesh94@gmail.com?subject=Feedback on 108 Divyadesams">Send</Button>
    </form>
  )
}