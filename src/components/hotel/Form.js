import React from 'react';
import { Link } from 'react-router-dom';

function Form({ handleSubmit, hotel, setHotel, buttonText }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Hotel
          <input
            type="text"
            value={hotel.name}
            onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
          />
        </label>
        <br />
        <label>
          City
          <input
            type="text"
            value={hotel.city}
            onChange={(e) => setHotel({ ...hotel, city: e.target.value })}
          />
        </label>
        <br />
        <label>
          Counrty
          <input
            type="text"
            value={hotel.country}
            onChange={(e) => setHotel({ ...hotel, country: e.target.value })}
          />
        </label>
        <br />

        <input type="submit" value={buttonText} />
        <Link to="/">
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
