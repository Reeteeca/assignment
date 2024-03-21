import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <label>Select Dates:</label>
      <br />
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} endDate={endDate} selectsStart />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} startDate={startDate} endDate={endDate} minDate={startDate} selectsEnd />
    </div>
  );
}

export default DateRangePicker;
