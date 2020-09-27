import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddNewHotel() {
  const [hotelName, setHotelName] = useState('');
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:3000/hotels', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: hotelName }),
    }).then(() => history.push('/'));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hotel Name:
        <input
          type="text"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddNewHotel;
