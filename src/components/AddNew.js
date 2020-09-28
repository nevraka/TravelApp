import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AddNew() {
  const [hotelName, setHotelName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:3000/hotels', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: hotelName, city: city, country: country }),
    }).then(() => history.push('/'));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Hotel:
          <input
            type="text"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <label>
          Counrty:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <br />
        <Link to="/">
          <span>Cancel</span>
        </Link>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default AddNew;
