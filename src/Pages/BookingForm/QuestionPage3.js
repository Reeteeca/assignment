import React from 'react';
import { Link } from 'react-router-dom';

function QuestionPage3() {
  const vehicleTypes = ['Hatchback', 'SUV', 'Sedan', 'Coupe', 'Truck', 'Van', 'Motorcycle'];

  return (
    <div>
      <h2>Type of Vehicle</h2>
      <form>
        {vehicleTypes.map((type, index) => (
          <div key={index}>
            <input type="radio" id={type} name="vehicleType" value={type} />
            <label htmlFor={type}>{type}</label>
            <br />
          </div>
        ))}
      </form>
      <Link to="/question4">Next</Link>
    </div>
  );
}

export default QuestionPage3;
