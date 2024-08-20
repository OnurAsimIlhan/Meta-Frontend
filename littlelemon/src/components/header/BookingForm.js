import React, { useState } from 'react';

function BookingForm({ onSubmit, availableTimes }) {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newErrors = {};
  
    const name = formData.get('name');
    const date = formData.get('date');
    const time = formData.get('time');
    const guests = formData.get('guests');
  
    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!date) {
      newErrors.date = 'Date is required';
    }
    if (!time) {
      newErrors.time = 'Time is required';
    }
    if (!guests || guests <= 0) {
      newErrors.guests = 'Number of guests is required and must be greater than 0';
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      onSubmit(event);
    }
  };
  

  return (
    <div className="reservation-form">
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit} data-testid="booking-form">
        <label>
          Name:
          <input type="text" name="name" />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Date:
          <input type="date" name="date" />
          {errors.date && <span className="error">{errors.date}</span>}
        </label>
        <label>
          Time:
          <select name="time">
            <option value="">Select a time</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </label>
        <label>
          Guests:
          <input type="number" name="guests" />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </label>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
