
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  input: {
    margin: '0 20px',
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
      <div style={styles.root}>
        <TextField
          style={styles.input}
          label="What is your name?"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button type="submit" variant="contained" style={styles.input}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default App;

