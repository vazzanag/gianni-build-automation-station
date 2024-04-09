
import React, { useState } from 'react';

const App: React.FC = () => {
  // State to store the user's name
  const [name, setName] = useState('');

  // Function to handle changes to the input value
  const handleChange = (event: React.ChangeEvent) => {
    setName(event.target.value);
  };

  // Function to clear the current name
  const handleClear = () => {
    setName('');
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        onBlur={handleClear}
      />
      <p>{name}</p>
    </div>
  );
};

export default App;

