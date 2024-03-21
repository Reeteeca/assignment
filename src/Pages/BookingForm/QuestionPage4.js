import React from 'react';
import { Link } from 'react-router-dom';

function QuestionPage4() {
  // Assume vehicleModels is fetched from the database
  const vehicleModels = ['Model A', 'Model B', 'Model C', 'Model D', 'Model E', 'Model F'];

  return (
    <div>
      <h2>Specific Model</h2>
      <form>
        {vehicleModels.map((model, index) => (
          <div key={index}>
            <input type="radio" id={model} name="vehicleModel" value={model} />
            <label htmlFor={model}>{model}</label>
            <br />
          </div>
        ))}
      </form>
      <Link to="/question5">Next</Link>
    </div>
  );
}

export default QuestionPage4;
