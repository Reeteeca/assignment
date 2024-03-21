import React from 'react';

function SubmissionPage() {
  // Assume bookingDetails is fetched from form inputs
  const bookingDetails = {
    name: 'John Doe',
    wheels: '4',
    vehicleType: 'SUV',
    vehicleModel: 'Model A',
    startDate: '2024-03-20',
    endDate: '2024-03-25',
  };

  return (
    <div>
      <h2>Submission Summary</h2>
      <p>Name: {bookingDetails.name}</p>
      <p>Number of Wheels: {bookingDetails.wheels}</p>
      <p>Type of Vehicle: {bookingDetails.vehicleType}</p>
      <p>Specific Model: {bookingDetails.vehicleModel}</p>
      <p>Start Date: {bookingDetails.startDate}</p>
      <p>End Date: {bookingDetails.endDate}</p>
      <button>Confirm Booking</button>
    </div>
  );
}

export default SubmissionPage;
