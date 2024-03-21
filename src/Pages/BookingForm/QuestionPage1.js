import React from 'react';
import { Link } from 'react-router-dom';

function QuestionPage1() {
  return (
    <div>
      <h2>What is your name?</h2>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <Link to="/question2">Next</Link>
    </div>
  );
}

export default QuestionPage1;
