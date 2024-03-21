import React from 'react';

function VehicleTypeInput({ vehicleTypes }) {
  return (
    <div>
      <label>Type of Vehicle:</label>
      <br />
      {vehicleTypes.map((type, index) => (
        <div key={index}>
          <input type="radio" name="vehicleType" value={type} /> {type}
        </div>
      ))}
    </div>
  );
}

export default VehicleTypeInput;
