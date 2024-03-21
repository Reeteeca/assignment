import React from 'react';

function WheelsInput() {
  return (
    <div>
      <label>Number of wheels:</label>
      <br />
      <input type="radio" name="wheels" value="2" /> 2
      <input type="radio" name="wheels" value="4" /> 4
    </div>
  );
}

export default WheelsInput;
