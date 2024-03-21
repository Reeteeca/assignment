import React from 'react';

function VehicleModelInput({ vehicleModels }) {
  return (
    <div>
      <label>Specific Model:</label>
      <br />
      {vehicleModels.map((model, index) => (
        <div key={index}>
          <input type="radio" name="vehicleModel" value={model} /> {model}
        </div>
      ))}
    </div>
  );
}

export default VehicleModelInput;
