
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px 0',
  },
  input: {
    margin: '0 16px',
  },
}));

const App = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form with name:', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
        <TextField
          id="name"
          label="What is your name?"
          margin="normal"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default App;

