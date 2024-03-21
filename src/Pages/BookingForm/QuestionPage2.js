import React from 'react';
import { Link } from 'react-router-dom';

function QuestionPage2() {
  return (
    <div>
      <h2>Number of wheels</h2>
      <input type="radio" name="wheels" value="2" /> 2
      <input type="radio" name="wheels" value="4" /> 4
      <Link to="/question3">Next</Link>
    </div>
  );
}

export default QuestionPage2;
