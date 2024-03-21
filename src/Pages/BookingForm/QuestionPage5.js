import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

function QuestionPage5() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <h2>Date Range Picker</h2>
      <div>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} endDate={endDate} selectsStart />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} startDate={startDate} endDate={endDate} minDate={startDate} selectsEnd />
      </div>
      <Link to="/submit">Submit</Link>
    </div>
  );
}

export default QuestionPage5;
